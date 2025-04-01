import urllib3
import http
import json
import os

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
        headers = urllib3.make_headers(basic_auth=self._user + ':' + self._password)
        r = pm.request(method, url, headers=headers, fields=params)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {url} with {params} failed with error {r.status} and message {r.data}')

        return json.loads(r.data.decode('utf-8'))

    def get(self, url, params=None):
        return self._request('GET', url, params)

def vast_user_quota(id, url):
    client = VASTClient()
    client_response = client.get(url)
    while True:
        for quota in client_response['results']:
            if quota['entity']['name'] == id:
                return quota
        client_response = client.get(client_response['next'])
        if not client_response['next']:
            return "{'error':'username not found'}"

def vast_user_quotas(url):
    output_list = []
    client = VASTClient()
    client_response = client.get(url)
    output_list.append(client_response['results'])
    while True:
        if not client_response['next']:
            return output_list
        client_response = client.get(client_response['next'])
        output_list.append(client_response)

userquota_url = 'https://vast.hpc.nyu.edu/api/userquotas/'
# print(vast_user_quotas(userquota_url))
print(vast_user_quota('rjy1', userquota_url))