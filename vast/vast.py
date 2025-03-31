import urllib3
import http
import json
import os

urllib3.disable_warnings()

class RESTFailure(Exception): pass

class VASTClient(object):
    def __init__(self, user = os.environ['VASTUSER'], password = os.environ['VASTPASS'], address = 'vast.hpc.nyu.edu', cert_file=None, cert_server_name=None):
        self._user = user
        self._password = password
        self._address = address
        self._cert_file = cert_file
        self._cert_server_name = cert_server_name

    def _request(self, method, url, params):
        if self._cert_file:
            pm = urllib3.PoolManager(ca_certs=self._cert_file, server_hostname=self._cert_server_name)
        else:
            pm = urllib3.PoolManager(cert_reqs='CERT_NONE')
        headers = urllib3.make_headers(basic_auth=self._user + ':' + self._password)
        r = pm.request(method, f'https://{self._address}/api/{url}', headers=headers, fields=params)
        if r.status != http.HTTPStatus.OK:
            raise RESTFailure(f'Response for request {url} with {params} failed with error {r.status} and message {r.data}')

        return json.loads(r.data.decode('utf-8'))

    def get(self, url, params=None):
        return self._request('GET', url, params)

def vast_user_quotas():
    client = VASTClient()
    client_response = client.get("userquotas/")
    return client_response

print(vast_user_quotas())
