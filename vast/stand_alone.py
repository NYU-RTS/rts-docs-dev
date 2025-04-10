import json
import sys
import requests

if len(sys.argv) < 2:
    print(f"usage: {sys.argv[0]} <username>")

username = sys.argv[1]
url = 'https://vast-quota-test-rtc-api-services.apps.cloud.rt.nyu.edu/vast_user_quota/'

def get_user_quota(url, username):
    response = requests.get(url + username)
    quota = json.loads(response.text)
    quota_data = quota['data']
    if isinstance(quota_data, str) and json.loads(quota_data)['error'] == 'username not found':
        print(f'Error: username {username} not found!')
        sys.exit(1)

    tbq  = None if quota_data['soft_limit'] == None else int(quota_data['soft_limit']/ 1000000000000)
    su   = None if quota_data['used_capacity'] == None else round(int(quota_data['used_capacity']) / 1000000000000, 2)
    suiq = None if quota_data['soft_limit_inodes'] == None else int(quota_data['soft_limit_inodes']) / 1000000
    iu   = quota_data['used_inodes']
    iup  = quota_data['percent_inodes']
    sup  = (round(su / tbq, 2) * 100) if not su == None and not tbq == None else None

    print(f'/vast        $VAST      NO/YES        {tbq}TB/{suiq}M           {su}TB({sup}%)/{iu}({iup}%)')

get_user_quota(url, username)
