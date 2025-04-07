import urllib3
import http
import json
import os
import redis

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
        # headers = urllib3.make_headers(basic_auth=f'{self._user}:{self._password}')
        token = self.get_cert()
        # print(f'token: {token}')
        # headers = {'Authorization': f"Bearer {os.environ['VASTTOKEN']}"}
        headers = {'Authorization': f"Bearer {token}"}
        r = pm.request(method, url, headers=headers, fields=params)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {url} with {params} failed with error {r.status} and message {r.data}')

        return json.loads(r.data.decode('utf-8'))

    def get_cert(self):
        auth_data = {
            'username': os.environ['VASTUSER'],
            'password': os.environ['VASTPASS']
        }
        headers = {
            'content-type': 'application/json'
        }
        # print(f"auth_data: {auth_data}")
        encoded_auth_data = json.dumps(auth_data).encode('utf-8')
        token_url = f'{os.environ["VASTSERVER"]}/api/token/'
        # print(f'token_url: {token_url}')
        pm = urllib3.PoolManager(cert_reqs='CERT_NONE')
        r = pm.request('POST', token_url, headers=headers, body=encoded_auth_data, fields=None)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {token_url} failed with error {r.status} and message {r.data}')
        token = json.loads(r.data.decode('utf-8'))['access']
        # print('get_cert: {token}')
        return token

    def get(self, url, params=None):
        return self._request('GET', url, params)

    def get_user_quota_old(self, id, url):
        client_response = self.get(url)
        while True:
            for quota in client_response['results']:
                if quota['entity']['name'] == id:
                    return quota
            if client_response['next']:
                client_response = self.get(client_response['next'])
            else:
                return "{'error':'username not found'}"

    def get_user_quota(self, username):
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        quota_data = r.get(username)
        if quota_data:
            return json.loads(quota_data)
        else:
            return "{'error':'username not found'}"

    def get_user_quotas_old(self, url):
        output_list = []
        client_response = self.get(url)
        output_list.append(client_response['results'])
        while True:
            if not client_response['next']:
                return output_list
            client_response = self.get(client_response['next'])
            output_list.append(client_response)

    def get_user_quotas(self):
        quota_list = []
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        for key in r.scan_iter():
            quota_list.append(r.get(key.decode('utf-8')))
        return quota_list

    def parse_load_block(self, json_block):
        r = redis.Redis(host=os.environ['REDISSERVER'], port=6379, db=0)
        for entry in json_block:
            redis_key = entry['entity']['name']
            if redis_key:
                redis_data = json.dumps(entry)
                r.set(redis_key, redis_data)

    def load_user_quotas_redis(self, url):
        client_response = self.get(url)
        self.parse_load_block(client_response['results'])
        while True:
            if not client_response['next']:
                return
            client_response = self.get(client_response['next'])
            self.parse_load_block(client_response['results'])



userquota_url = 'https://vast.hpc.nyu.edu/api/userquotas/'
vast = VASTClient()

# vast.load_user_quotas_redis(userquota_url)
# print(vast.get_user_quota('rjy1'))
print(vast.get_user_quotas())
