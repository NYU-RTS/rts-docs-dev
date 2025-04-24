import urllib3
import http
import json
import os
import redis
import datetime
import requests
from requests.exceptions import HTTPError

urllib3.disable_warnings()

class RESTFailure(Exception): pass

class GPFS():
    def __init__(self, user = os.environ['GPFSUSER'], 
                 password = os.environ['GPFSPASS'], 
                 server = os.environ['GPFSSERVER']):
        self.user = user
        self.password = password
        self.server = server
        self.server_redis = os.environ['REDISSERVER']

    def endpoint2filesystemset(self, endpoint):
        '''returns filesystem & fileset based on endpoint'''
        if endpoint == 'home':
            return ('dss_home', 'root')
        elif endpoint == 'scratch':
            return ('dss_scratch', 'root')
        elif endpoint == 'archive':
            return ('dss_archive', 'root')
        elif endpoint == 'cgsb':
            return ('dss_scratch', 'cgsb')
        else:
            raise ValueError(f"Invalid input parameter {endpoint} for endpoint2filesystemset")

    def filesystemset2db(self, filesystem, fileset):
        '''returns redis db ID based on input filesystem & fileset strings'''
        if filesystem == 'dss_home' and fileset == 'root':
            return 1
        elif filesystem == 'dss_scratch' and fileset == 'root':
            return 2
        elif filesystem == 'dss_archive' and fileset == 'root':
            return 3
        elif filesystem == 'dss_scratch' and fileset == 'cgsb':
            return 4
        else:
            raise ValueError(f"Invalid input paramters {filesystem} {fileset} to filesystem2db")
        
    def loadPage(self, redis_client, quotas):
        for q in quotas:
            if q['quotaType'] == 'USR' and not q['objectName'].isnumeric():
                redis_client.set(q['objectName'], json.dumps(q))

    def loadQuotas(self, endpoint, force=False):        

        filesystem, fileset = self.endpoint2filesystemset(endpoint)
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.filesystemset2db(filesystem, fileset))
        
        current_timestamp = datetime.datetime.now().timestamp()
        last_update_timestamp = float(redisClient.get('last_update').decode('utf-8'))
        if (current_timestamp - last_update_timestamp) < (60 * 20) and not force:   # 20 minutes 
            return

        try:
            response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems/{filesystem}/filesets/{fileset}/quotas', 
                             auth=(self.user, self.password), verify=False)            
        except HTTPError as http_err:
            return json.dumps({'error': http_err.response.status_code})
        
        self.loadPage(redisClient, response.json()["quotas"])
        while True:
            try: 
                nextPage = response.json()["paging"]["next"]
            except:
                break
            
            try:
                response = requests.get(f'https://{self.server}:443{nextPage}', 
                                 auth=(self.user, self.password), 
                                 verify=False)
                self.loadPage(redisClient, response.json()["quotas"])
            except HTTPError as http_err:
                return json.dumps({'error': http_err.response.status_code})

        timestamp = datetime.datetime.now().timestamp()
        redisClient.set('last_update', timestamp)

    def getQuotas(self, endpoint):
        filesystem, fileset = self.endpoint2filesystemset(endpoint)
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.filesystemset2db(filesystem, fileset))
        quota_list = []
        for key in redisClient.scan_iter():
            quota_list.append(json.loads(redisClient.get(key.decode('utf-8'))))

        return quota_list

    # def getQuotas(self, filesystem, fileset):
    #     redisClient = redis.Redis(host=self.server_redis, port=6379, 
    #                               db=self.filesystemset2db(filesystem, fileset))
    #     quota_list = []
    #     for key in redisClient.scan_iter():
    #         quota_list.append(json.loads(redisClient.get(key.decode('utf-8'))))
    # 
    #     return quota_list

    def getQuota(self, filesystem, fileset, username):
        redisClient = redis.Redis(host=self.server_redis, port=6379,
                                  db=self.filesystemset2db(filesystem, fileset))
        quota_data = redisClient.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return f'Error: username {username} not found'

    def loadFilesystems(self):
        response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems', 
                                auth=(self.user, self.password), verify=False)
        for fs in response.json()['filesystems']:
            print(fs['name'])


# test = GPFS()
# test.loadQuotas('dss_scratch', 'cgsb')
# print(test.getQuotas('dss_scratch', 'cgsb'))
# print(test.getQuota('dss_scratch', 'cgsb', 'ag8612'))
# test.loadFilesystems()
# foo = json.loads(test.getQuota('dss_home', 'root', 'rjy1'))
# print(type(foo))