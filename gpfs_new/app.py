import logging
from fastapi import FastAPI, BackgroundTasks
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import urllib3
import gpfs as gpfs
import json

class Group(BaseModel):
    name: str
    description: str = None

class GroupMembers(BaseModel):
    name: str
    users: Optional[list] = None

app = FastAPI()
gpfs = gpfs.GPFS()

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s')
logging = logging.getLogger("uvicorn")

@app.get('/')
def index():
    return {'data': 'Go away please'}

@app.get('/healthz')
def index():
    return {'status': 'ok'}

@app.get('/message')
def index():
    return {'data': 'FastAPI is easy!'}

@app.get('/update_cache/{filesystem}/{fileset}')
def update_cache_gpfs_home(filesystem, fileset):
    try:
        gpfs.loadQuotas(filesystem, fileset, force=True)
    except Exception as err:
        logging.error(f'Error updating home cache: {err}')
    return {'status': 'ok'}

@app.get('/quotas/gpfs/home')
def get_quotas_gpfs_home():
    try:
        quotas = gpfs.getQuotas('dss_home', 'root')
    except Exception as err:
       logging.error(f'Error reading home quotas: {err}')
    return {'data': quotas }

@app.get('/quota/gpfs/home/{username}')
def get_quota_gpfs_home(username):
    try:
        quota = gpfs.getQuota('dss_home', 'root', username)
    except Exception as err:
       logging.error(f'Error reading home quota for {username}: {err}')
    return {'data': quota }

@app.get('/quotas/gpfs/scratch')
def get_quotas_gpfs_scratch():
    try:
        quotas = gpfs.getQuotas('dss_scratch', 'root')
    except Exception as err:
       logging.error(f'Error reading scratch quotas: {err}')
    return {'data': quotas }

@app.get('/quota/gpfs/scratch/{username}')
def get_quota_gpfs_scratch(username):
    try:
        quota = gpfs.getQuota('dss_scratch', 'root', username)
    except Exception as err:
       logging.error(f'Error reading scratch quota for {username} : {err}')
    return {'data': quota }

@app.get('/quotas/gpfs/archive')
def get_quotas_gpfs_archive():
    try:
        quotas = gpfs.getQuotas('dss_archive', 'root')
    except Exception as err:
       logging.error(f'Error reading archive quotas: {err}')
    return {'data': quotas }

@app.get('/quota/gpfs/archive/{username}')
def get_quota_gpfs_archive(username):
    try:
        quota = gpfs.getQuota('dss_archive', 'root', username)
    except Exception as err:
       logging.error(f'Error reading archive quotas for {username}: {err}')
    return {'data': quota }

@app.get('/quotas/gpfs/cgsb')
def get_quotas_gpfs_cgsb():
    try:
        quotas = gpfs.getQuotas('dss_scratch', 'cgsb')
    except Exception as err:
       logging.error(f'Error reading cgsb quotas: {err}')
    return {'data': quotas }

@app.get('/quota/gpfs/cgsb/{username}')
def get_quota_gpfs_cgsb(username):
    try:
        quota = gpfs.getQuota('dss_scratch', 'cgsb', username)
    except Exception as err:
       logging.error(f'Error reading cgsb quota for {username}: {err}')
    return {'data': quota }

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
