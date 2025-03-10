import logging
import requests
from time import sleep
import os
import urllib3
urllib3.disable_warnings()

class QUAY():
    def __init__(self):
        self.user = os.environ['QUAY_SA']
        self.password = os.environ['QUAY_PASS']
        self.server = os.environ['QUAY_SERVER']
    def getRepos(self):
        repos = []
        page = 1
        r = requests.get(f'https://{self.server}:443/api/v1/repository', auth=(self.user, self.password), verify=False)
        r.json()
        for i in r.json()["quotas"]:
            repos.append(i)
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
                    repos.append(i)
        return repos
    def getRepo(self, repo):
        repos = []
        page = 1
        r = requests.get(f'https://{self.server}:443/api/v1/repository{repo}', auth=(self.user, self.password), verify=False)
        r.json()
        for i in r.json()["quotas"]:
            repos.append(i)
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
                    repos.append(i)
        return repos

    
        