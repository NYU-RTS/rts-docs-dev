import logging
import requests
from time import sleep
import os
import urllib3
urllib3.disable_warnings()

# objectName = username
# blockUsage = bytes used
# filesUsage = inodes used

class GPFS():
    def __init__(self):
        self.user = os.environ['GPFSUSER']
        self.password = os.environ['GPFSPASS']
        self.server = os.environ['GPFSSERVER']
    def getQuotas(self, filesystem, fileset):
        quotas = []
        page = 1
        r = requests.get(f'https://{self.server}:443/scalemgmt/v2/filesystems/{filesystem}/filesets/{fileset}/quotas', auth=(self.user, self.password), verify=False)
        r.json()
        for i in r.json()["quotas"]:
            quotas.append(i)
        while page == 1:
            try:
                nextPage = r.json()["paging"]["next"]
            except:
                # print(f'Last Page')
                page = 0
            else:
                # print(nextPage)
                r = requests.get(f'https://{self.server}:443{nextPage}', auth=(self.user, self.password), verify=False)
                for i in r.json()["quotas"]:
                    quotas.append(i)
        return quotas

    
        