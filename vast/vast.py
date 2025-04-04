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
        headers = urllib3.make_headers(basic_auth=f'{self._user}:{self._password}')
        r = pm.request(method, url, headers=headers, fields=params)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {url} with {params} failed with error {r.status} and message {r.data}')

        return json.loads(r.data.decode('utf-8'))

    def get(self, url, params=None):
        return self._request('GET', url, params)

    def get_user_quota(self, id, url):
        client_response = self.get(url)
        while True:
            for quota in client_response['results']:
                if quota['entity']['name'] == id:
                    return quota
            if client_response['next']:
                client_response = self.get(client_response['next'])
            else:
                return "{'error':'username not found'}"

    def get_user_quotas(self, url):
        output_list = []
        client_response = self.get(url)
        output_list.append(client_response['results'])
        while True:
            if not client_response['next']:
                return output_list
            client_response = self.get(client_response['next'])
            output_list.append(client_response)

# userquota_url = 'https://vast.hpc.nyu.edu/api/userquotas/'
# vast = VASTClient()
# print(vast.get_user_quota('rjy1', userquota_url))