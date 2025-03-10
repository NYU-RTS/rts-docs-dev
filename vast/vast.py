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

def print_user_quota(id):
    client = VASTClient()
    client_response = client.get("quotas/" + str(id))
    print(client_response)

def print_quotas():
    client = VASTClient()
    client.get("userquotas/")

    tbq = None
    su = None
    suiq = None
    iu = None
    iup = None
    sup = 0
    for quota in client.get('userquotas')['results']:
        if quota['soft_limit'] is not None:
            for property in ['entity_identifier', 'state', 'soft_limit', 'hard_limit', 'soft_limit_inodes', 'hard_limit_inodes', 'grace_period', 'used_capacity', 'used_inodes', 'percent_inodes', 'percent_capacity']:
                if quota[property] is not None:
                    if property == 'soft_limit':
                        tbq = int(quota[property] / 1000000000000)
                    elif property == 'used_capacity':
                        su = round(int(quota['used_capacity']) / 1000000000000, 2)
                        #print(f'{su} TB')
                    elif property == 'soft_limit_inodes':
                        #print(quota[property])
                        suiq = int(quota[property]) / 1000000
                    elif property == 'used_inodes':
                        iu = quota[property]
                    elif property == 'percent_inodes':
                        iup = quota[property]
            if su is not None and tbq is not None:
                sup = round(su / tbq, 2) * 100
                #print(type(quota[property]))
                #print(f'{property}={quota[property]} ', end='')
            print(f'/vast        $VAST      NO/YES        {tbq}TB/{suiq}M           {su}TB({sup}%)/{iu}({iup}%)')
            #print()

# print_user_quota(460)
# print_quotas()
