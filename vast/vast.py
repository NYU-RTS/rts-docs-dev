import urllib3
import http
import json
import os
import redis
import datetime
from requests.exceptions import HTTPError

urllib3.disable_warnings()

class RESTFailure(Exception): pass

class VASTClient(object):
    def __init__(self, user = os.environ['VASTUSER'], password = os.environ['VASTPASS'], cert_file=None, cert_server_name=None):
        self._user = user
        self._password = password
        self._cert_file = cert_file
        self._cert_server_name = cert_server_name

    def _request(self, method, url, params):
        if self._cert_file:
            pm = urllib3.PoolManager(ca_certs=self._cert_file, server_hostname=self._cert_server_name)
        else:
            pm = urllib3.PoolManager(cert_reqs='CERT_NONE')
        token = self.get_cert()
        headers = {'Authorization': f"Bearer {token}"}
        r = pm.request(method, url, headers=headers, fields=params)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {url} with {params} failed with error {r.status} and message {r.data}')

        return json.loads(r.data.decode('utf-8'))

    def get_cert(self):
        if 'ACCESSTOKEN' in os.environ:
            url_test = os.environ['VASTSERVER'] + '/healthz'
            headers = {'Authorization': f"Bearer {os.environ['ACCESSTOKEN']}"}
            pm = urllib3.PoolManager(cert_reqs='CERT_NONE')
            try:
                r = pm.request('GET', url_test, headers=headers, fields=None)
                return os.environ['ACCESSTOKEN']
            except HTTPError as http_err:
                if http_err.response.status_code == 401:
                    url_refresh = os.environ['VASTSERVER'] + '/api/token/refresh/'
                    headers = {'Authorization': f"Bearer {os.environ['REFRESHTOKEN']}"}
                    try:
                        r = pm.request('POST', url_refresh, headers=headers, fields=None)
                        os.environ['ACCESSTOKEN'] = json.loads(r.data.decode('utf-8'))['access']
                        os.environ['REFRESHTOKEN'] = json.loads(r.data.decode('utf-8'))['refresh']
                        return os.environ['ACCESSTOKEN']
                    except HTTPError as http_err:
                        if http_err.response.status_code == 401:
                            return self.make_token()
                        else:
                            return json.dumps({'error': http_err.response.status_code})
                else:
                    return json.dumps({'error': http_err.response.status_code})
        else:
            return self.make_token()
                    
            
    def make_token(self):
        auth_data = {
            'username': os.environ['VASTUSER'],
            'password': os.environ['VASTPASS']
        }
        headers = {
            'content-type': 'application/json'
        }
        encoded_auth_data = json.dumps(auth_data).encode('utf-8')
        token_url = f'{os.environ["VASTSERVER"]}/api/token/'
        pm = urllib3.PoolManager(cert_reqs='CERT_NONE')
        r = pm.request('POST', token_url, headers=headers, body=encoded_auth_data, fields=None)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {token_url} failed with error {r.status} and message {r.data}')
        os.environ['ACCESSTOKEN'] = json.loads(r.data.decode('utf-8'))['access']
        os.environ['REFRESHTOKEN'] = json.loads(r.data.decode('utf-8'))['refresh']

        return os.environ['ACCESSTOKEN']

    def get(self, url, params=None):
        return self._request('GET', url, params)

    def get_user_quota(self, username):
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        quota_data = r.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return json.dumps({'error':'username not found'})

    def get_user_quotas(self):
        quota_list = []
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        for key in r.scan_iter():
            quota_list.append(r.get(key.decode('utf-8')))

        return quota_list

    def parse_load_block(self, r, json_block):
        for entry in json_block:
            redis_key = entry['entity']['name']
            entity_type = entry['entity']['identifier_type']
            if redis_key and entity_type == 'username':
                redis_data = json.dumps(entry)
                r.set(redis_key, redis_data)
        
    def load_user_quotas_redis(self, url):
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        current_timestamp = datetime.datetime.now().timestamp()
        last_update_timestamp = float(r.get('last_update').decode('utf-8'))
        if (current_timestamp - last_update_timestamp) < (60 * 20):  # 20 minutes
            return

        client_response = self.get(url)
        self.parse_load_block(r, client_response['results'])
        while True:
            if not client_response['next']:
                break
            client_response = self.get(client_response['next'])
            self.parse_load_block(r, client_response['results'])
         
        timestamp = datetime.datetime.now().timestamp()
        r.set('last_update', timestamp)
