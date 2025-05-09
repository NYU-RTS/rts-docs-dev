import urllib3
import json
import os
import redis
import datetime
import requests
from requests.exceptions import HTTPError
import ast

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

    def clear_gpfs_dbs(self):
        for db_num in range(1,99):      # TODO: fix this magic number
            if db_num > 0:  # extra protection for vast db
                redis_client = redis.Redis(host=self.server_redis, port=6379, db=db_num)
                redis_client.flushdb()

    def create_file_systems_and_sets(self):
        self.clear_gpfs_dbs()
        self.load_filesystems_and_sets(force=True)
        self.make_mapping_dicts()
        self.load_all_quotas()

    def make_mapping_dicts(self):
        curr_db = 2
        endpoints2filesystemset = {}
        filesystemset2db = {}

        filesystems = [_['name'] for _ in self.get_filesystems()['filesystems']]
        for fsys in filesystems:
            filesets_json = self.get_filesets(fsys)
            if filesets_json:
                filesets = [_['filesetName'] for _ in filesets_json['filesets']]
                for fset in filesets:
                    if fset == 'root':
                        e2f_key = fset + '_' + fsys if '_' not in fsys else fset + '_' + fsys.split('_')[1]
                        endpoints2filesystemset[e2f_key] = (fsys, fset)
                    elif fset in endpoints2filesystemset:
                        print(f"WARNING: endpoint {fset} already exists. Creating endpoint {fset}_{fsys.split('_')[1]}")
                        endpoints2filesystemset[fset + '_' + fsys.split('_')[1]] = (fsys, fset)
                    else:
                        endpoints2filesystemset[fset] = (fsys, fset)
                    filesystemset2db[(fsys, fset)] = curr_db
                    curr_db += 1

        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        redis_client.set('endpoints2filesystemset', json.dumps(endpoints2filesystemset))
        filesystemset2db_str_keys = {str(k): v for k, v in filesystemset2db.items()}
        redis_client.set('filesystemset2db', json.dumps(filesystemset2db_str_keys))

    def get_dicts(self):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        end2fss = json.loads(redis_client.get('endpoints2filesystemset').decode('utf-8'))
        fss2db = json.loads(redis_client.get('filesystemset2db').decode('utf-8'))
        return {'endpoint2filesystemset': end2fss,
                'filesystemset2db': fss2db}

    def get_db(self, filesystem, fileset):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        filesystemset2db = {ast.literal_eval(k): v for k,v 
                                in json.loads(redis_client.get('filesystemset2db')).items()}
        try:
            return filesystemset2db[(filesystem, fileset)]
        except KeyError:
            print(f"filesystem and fileset key ({filesystem}, {fileset}) not found.")

    def get_filesystemset(self, endpoint):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        endpoints2filesystemset = json.loads(redis_client.get('endpoints2filesystemset'))
        try:
            return endpoints2filesystemset[endpoint]
        except KeyError:
            print(f'Error: key {endpoint} not found in endpoint2filesystemset.')

    def load_quota_page(self, redis_client, quotas):
        for q in quotas:
            if q['quotaType'] == 'USR' and not q['objectName'].isnumeric():
                redis_client.set(q['objectName'], json.dumps(q))

    def load_quotas(self, endpoint, force=False):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redis_client = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.get_db(filesystem, fileset))
        
        if redis_client.get('last_update'):
            current_timestamp = datetime.datetime.now().timestamp()
            last_update_timestamp = float(redis_client.get('last_update').decode('utf-8'))
            if (current_timestamp - last_update_timestamp) < (60 * 20) and not force:   # 20 minutes 
                return

        try:
            response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems/{filesystem}/filesets/{fileset}/quotas', 
                             auth=(self.user, self.password), verify=False)            
        except HTTPError as http_err:
            return json.dumps({'error': http_err.response.status_code})
        
        try:
            self.load_quota_page(redis_client, response.json()["quotas"])
            enter_loop = True
        except KeyError:
            enter_loop = False

        while enter_loop:
            try: 
                next_page = response.json()["paging"]["next"]
            except:
                break
            
            try:
                response = requests.get(f'https://{self.server}:443{next_page}', 
                                 auth=(self.user, self.password), 
                                 verify=False)
                self.load_quota_page(redis_client, response.json()["quotas"])
            except HTTPError as http_err:
                return json.dumps({'error': http_err.response.status_code})

        timestamp = datetime.datetime.now().timestamp()
        redis_client.set('last_update', timestamp)

    def load_all_quotas(self):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        endpoints2filesystemset = json.loads(redis_client.get('endpoints2filesystemset'))
        for endpoint in endpoints2filesystemset.keys():
            self.load_quotas(endpoint)

    def load_everything(self):
        self.load_all_quotas()
        self.load_filesystems_and_sets()

    def get_quotas(self, endpoint):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redis_client = redis.Redis(host=self.server_redis, port=6379, 
                                  db=self.get_db(filesystem, fileset))
        quota_list = []
        for key in redis_client.scan_iter():
            quota_list.append(json.loads(redis_client.get(key.decode('utf-8'))))

        return quota_list

    def get_quota(self, endpoint, username):
        filesystem, fileset = self.get_filesystemset(endpoint)
        redis_client = redis.Redis(host=self.server_redis, port=6379,
                                  db=self.get_db(filesystem, fileset))
        quota_data = redis_client.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return f'Error: username {username} not found'
         
    def load_filesystems_and_sets(self, force=False):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        last_update = redis_client.get('last_update_filesystems')
        if last_update and not force:
            current_timestamp = datetime.datetime.now().timestamp()
            last_update_timestamp = float(last_update.decode('utf-8'))
            if (current_timestamp - last_update_timestamp) < (60 * 20):   # 20 minutes 
                return

        response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems', 
                                auth=(self.user, self.password), verify=False)
        redis_client.set('filesystems', json.dumps(response.json()))
        timestamp = datetime.datetime.now().timestamp()

        filesystems = [_['name'] for _ in response.json()['filesystems']]
        for fs in filesystems:
            response = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems/{fs}/filesets', 
                auth=(self.user, self.password), verify=False)
            redis_client.set(f'filesets_{fs}', json.dumps(response.json()))

        redis_client.set('last_update_filesystems_and_sets', timestamp)

    def get_filesystems(self):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        filesystems = redis_client.get('filesystems')
        if filesystems:
            return json.loads(filesystems)
        else:
            return f'Error: filesystems not found'

    def get_filesets(self, filesystem):
        redis_client = redis.Redis(host=self.server_redis, port=6379, db=1)
        filesets = redis_client.get(f'filesets_{filesystem}')
        return json.loads(filesets) if filesets else ''



# test = GPFS()
# test.load_filesets_dynamic()
# print('*** db: ', test.get_db('dss_scratch', 'hartleylab'))
# print('*** tup: ', test.get_filesystemset('hartleylab'))
# test.load_quotas('hartleylab')
# print(test.get_quotas('hartleylab'))
# print(test.get_quota('hartleylab', 'ss18879'))
# test.load_all_quotas()
# test.load_everything()
# print(test.get_filesystemset('root'))

# test = GPFS()
# test.create_file_systems_and_sets()
# print(test.get_filesystemset('home'))
# test.load_all_quotas()
# print(test.get_quotas('hartleylab'))
# print(test.get_quota('hartleylab', 'mm13852'))

# test.load_all_quotas()
# test.load_filesystems_and_sets()

# foo = test.get_dicts()
# print(foo)
# foo_dict = json.loads(foo)
# print(foo_dict.keys())

