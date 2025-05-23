import json
import requests
from requests.exceptions import HTTPError

def test_quota_home_rjy1():
    url = 'http://localhost:8000/quota/gpfs/root_home/rjy1'
    valid_quota = '{"data":{"blockGrace":"none","blockInDoubt":0,"blockLimit":57671680,"blockQuota":52428800,"blockUsage":24891584,"filesGrace":"none","filesInDoubt":0,"filesLimit":33000,"filesQuota":30000,"filesUsage":4914,"filesetName":"root","filesystemName":"dss_home","isDefaultQuota":false,"objectId":402570,"objectName":"rjy1","quotaId":58654,"quotaType":"USR"}}'
    valid_quota = json.loads(valid_quota)

    try:
        response = requests.get(url)
    except HTTPError as http_err:
        return json.dumps({'error': http_err.response.status_code})

    assert response.json() == valid_quota

def test_core_filesystem_connections():
    url_base = 'http://localhost:8000/quotas/gpfs'
    core_filesystem_list = ['/root_home', '/root_archive', '/root_scratch']

    for cf in core_filesystem_list:
        response = requests.get(url_base + cf)
        assert response.status_code == 200

def test_all_filesystemset_endpoints():
    url_base = 'http://localhost:8000'
    response_dict = requests.get(url_base + '/dicts')
    for key in response_dict.json()['data']['endpoint2filesystemset'].keys():
        response_sys= requests.get(f'{url_base}/quotas/gpfs/{key}')
        if response_sys.status_code != 200:
            print(f'Error: status code {response_sys.status_code} from endpoint {key}')
        elif response_sys.json() == "{'data': 'bad endpoint'}":
            print(f"Error: endpoint {key} returned 'bad endpoint'")
        for b in response_sys.json()['data']:
            if isinstance(b, dict) and b['quotaType'] == 'USR':
                response_set = requests.get(f'{url_base}/quota/gpfs/{key}/{b["objectName"]}')
                if response_set.status_code != 200:
                    print(f'Error: status code {response_sys.status_code} from endpoint {key}')
                elif response_sys.json() == "{'data': 'bad endpoint'}":
                    print(f"Error: endpoint {key} returned 'bad endpoint'")

