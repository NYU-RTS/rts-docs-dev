import urllib3
import json
import os
import redis
import datetime
import requests
from requests.exceptions import HTTPError
import ast
import sys

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

    def get_db(self, filesystem, fileset):
        if (filesystem, fileset) in self.filesystemset2db.keys():
            return self.filesystemset2db[(filesystem, fileset)]

        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        filesystemset2db_dynamic = {ast.literal_eval(k): v for k,v 
                                    in json.loads(redisClient.get('filesystemset2db_dynamic')).items()}
        if (filesystem, fileset) in filesystemset2db_dynamic.keys():
            return filesystemset2db_dynamic[(filesystem, fileset)]
    
        raise ValueError("filesystem and fileset key not found")
    
    def get_filesystemset(self, endpoint):
        if endpoint in self.endpoints2filesystemset.keys():
            return self.endpoints2filesystemset[endpoint]
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        endpoint2filesystemset_dynamic = json.loads(redisClient.get('endpoints2filesystemset_dynamic'))
        if endpoint in endpoint2filesystemset_dynamic.keys():
            return endpoint2filesystemset_dynamic[endpoint]
    
        raise ValueError("endpoint key not found")        

    def loadPage(self, redis_client, quotas):
        for q in quotas:
            if q['quotaType'] == 'USR' and not q['objectName'].isnumeric():
                redis_client.set(q['objectName'], json.dumps(q))

    def loadQuotas(self, endpoint, force=False):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.get_db(filesystem, fileset))
        
        if redisClient.get('last_update'):
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
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        endpoints2filesystemset_dynamic = json.loads(redisClient.get('endpoints2filesystemset_dynamic'))
        for endpoint in endpoints2filesystemset_dynamic.keys():
            self.loadQuotas(endpoint)


    def loadEverything(self):
        self.loadAllQuotas()
        self.loadFilesystems()
        self.loadAllFilesets()

    def loadAllFilesets(self):
        self.loadFilesets('dss_home')
        self.loadFilesets('dss_scratch')
        self.loadFilesets('dss_archive')
        self.load_filesets_dynamic()

    def getQuotas(self, endpoint):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redisClient = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.get_db(filesystem, fileset))
        quota_list = []
        for key in redisClient.scan_iter():
            quota_list.append(json.loads(redisClient.get(key.decode('utf-8'))))

        return quota_list

    def getQuota(self, endpoint, username):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redisClient = redis.Redis(host=self.server_redis, port=6379,
                                  db=self.get_db(filesystem, fileset))
        quota_data = redisClient.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return f'Error: username {username} not found'
        
    def loadFilesystems(self):
        response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems', 
                                auth=(self.user, self.password), verify=False)
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)

        last_update = redisClient.get('last_update_filesystems')
        if last_update:
            current_timestamp = datetime.datetime.now().timestamp()
            last_update_timestamp = float(last_update.decode('utf-8'))
            if (current_timestamp - last_update_timestamp) < (60 * 20):   # 20 minutes 
                return

        redisClient.set('filesystems', json.dumps(response.json()))
        timestamp = datetime.datetime.now().timestamp()
        redisClient.set('last_update_filesystems', timestamp)

    def getFilesystems(self):
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        filesystems = redisClient.get('filesystems')
        if filesystems:
            return json.loads(filesystems)
        else:
            return f'Error: filesystems not found'

    def loadFilesets(self, filesystem):
        response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems/{filesystem}/filesets', 
                                auth=(self.user, self.password), verify=False)
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)

        last_update = redisClient.get('last_update_filesets')
        if last_update:
            current_timestamp = datetime.datetime.now().timestamp()
            last_update_timestamp = float(last_update.decode('utf-8'))
            if (current_timestamp - last_update_timestamp) < (60 * 20):   # 20 minutes 
                return

        redisClient.set(f'filesets_{filesystem}', json.dumps(response.json()))
        timestamp = datetime.datetime.now().timestamp()
        redisClient.set('last_update_filesets', timestamp)

    def getFilesets(self, filesystem):
        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        filesets = redisClient.get(f'filesets_{filesystem}')
        if filesets:
            return json.loads(filesets)
        else:
            return f'Error: filesets for {filesystem} not found'

    def load_filesets_dynamic(self):
        curr_db = 6
        endpoints2filesystemset_dynamic = {}
        filesystemset2db_dynamic = {}

        redisClient = redis.Redis(host=self.server_redis, port=6379, db=5)
        filesets = json.loads(redisClient.get(f'filesets_dss_scratch'))
        for v in filesets['filesets']:
            if v['filesetName'] not in list(self.endpoints2filesystemset.keys()):
                endpoints2filesystemset_dynamic[v['filesetName']] = ('dss_scratch', v['filesetName'])
                filesystemset2db_dynamic[('dss_scratch', v['filesetName'])] = curr_db
                curr_db += 1
            # TODO: remove after we increase default db size
            if curr_db > 10:
                break

        redisClient.set('endpoints2filesystemset_dynamic', json.dumps(endpoints2filesystemset_dynamic))
        filesystemset2db_dynamic_str_keys = {str(k): v for k, v in filesystemset2db_dynamic.items()}
        redisClient.set('filesystemset2db_dynamic', json.dumps(filesystemset2db_dynamic_str_keys))



# test = GPFS()
# test.load_filesets_dynamic()
# print('*** db: ', test.get_db('dss_scratch', 'hartleylab'))
# print('*** tup: ', test.get_filesystemset('hartleylab'))
# test.loadQuotas('hartleylab')
# print(test.getQuotas('hartleylab'))
# print(test.getQuota('hartleylab', 'ss18879'))
# test.loadAllQuotas()
# test.loadEverything()
# print(test.get_filesystemset('root'))
