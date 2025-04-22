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

    def filesystemset2db(self, filesystem, fileset):
        '''return redis db ID based on input filesystem & fileset strings'''
        if filesystem == 'dss_home' and fileset == 'root':
            db = 1
        elif filesystem == 'dss_scratch' and fileset == 'root':
            db = 2
        elif filesystem == 'dss_archive' and fileset == 'root':
            db = 3
        elif filesystem == 'dss_scratch' and fileset == 'cgsb':
            db = 4
        else:
            raise ValueError("Invalid filesystem string provided in filesystem2db")
        
        return db
    
    def loadPage(self, redis_client, quotas):
        for q in quotas:
            redis_key = q['objectName']
            redis_client.set(redis_key, json.dumps(q))

    def loadQuotas(self, filesystem, fileset):
        redisClient = redis.Redis(host=os.environ['REDISSERVER'], port=6379, 
                                  db=self.filesystemset2db(filesystem, fileset))
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

    def getQuotas(self, filesystem, fileset):
        redisClient = redis.Redis(host=os.environ['REDISSERVER'], port=6379, 
                                  db=self.filesystemset2db(filesystem, fileset))
        quota_list = []
        for key in redisClient.scan_iter():
            quota_list.append(redisClient.get(key.decode('utf-8')).decode('utf-8'))

        return quota_list

test = GPFS()
print(test.getQuotas('dss_scratch', 'cgsb'))
