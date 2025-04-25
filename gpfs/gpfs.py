import urllib3
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
        self.endpoints2filesystemset = { 
            'home': ('dss_home', 'root'),
            'scratch': ('dss_scratch', 'root'),
            'archive': ('dss_archive', 'root'),
            'cgsb': ('dss_scratch', 'cgsb')
        }
        self.filesystemset2db = {
            ('dss_home', 'root'): 1,
            ('dss_scratch', 'root'): 2,
            ('dss_archive', 'root'): 3,
            ('dss_scratch', 'cgsb'): 4
        }

    def loadPage(self, redis_client, quotas):
        for q in quotas:
            if q['quotaType'] == 'USR' and not q['objectName'].isnumeric():
                redis_client.set(q['objectName'], json.dumps(q))

    def loadQuotas(self, endpoint, force=False):        
        filesystem, fileset = self.endpoints2filesystemset[endpoint]
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.filesystemset2db[(filesystem, fileset)])
        
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

    def loadAllQuotas(self):
        for endpoint in self.endpoints2filesystemset.keys():
            self.loadQuotas(endpoint)
        self.loadFilesystems()

    def getQuotas(self, endpoint):
        filesystem, fileset = self.endpoints2filesystemset[endpoint]
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.filesystemset2db[(filesystem, fileset)])
        quota_list = []
        for key in redisClient.scan_iter():
            quota_list.append(json.loads(redisClient.get(key.decode('utf-8'))))

        return quota_list

    def getQuota(self, endpoint, username):
        filesystem, fileset = self.endpoints2filesystemset[endpoint]
        redisClient = redis.Redis(host=self.server_redis, port=6379,
                                  db=self.filesystemset2db[(filesystem, fileset)])
        quota_data = redisClient.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return f'Error: username {username} not found'
        
    def loadFilesystems(self):
        response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems', 
                                auth=(self.user, self.password), verify=False)
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)

        last_update = redisClient.get('last_update')
        if last_update:
            current_timestamp = datetime.datetime.now().timestamp()
            last_update_timestamp = float(last_update.decode('utf-8'))
            if (current_timestamp - last_update_timestamp) < (60 * 20):   # 20 minutes 
                return

        redisClient.set('filesystems', json.dumps(response.json()))
        timestamp = datetime.datetime.now().timestamp()
        redisClient.set('last_update', timestamp)

    def getFilesystems(self):
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        filesystems = redisClient.get('filesystems')
        if filesystems:
            return json.loads(filesystems)
        else:
            return f'Error: filesystems not found'
