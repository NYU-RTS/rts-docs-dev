import logging
from fastapi import FastAPI, BackgroundTasks
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import urllib3
import gpfs as gpfs

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
def healthz(background_tasks: BackgroundTasks):
    background_tasks.add_task(gpfs.loadAllQuotas)
    background_tasks.add_task(gpfs.loadFilesystems)
    background_tasks.add_task(gpfs.loadAllFilesets)
    return {'status': 'ok'}

@app.get('/update_cache/{endpoint}')
def update_cache_gpfs_home(endpoint):
    try:
        gpfs.loadQuotas(endpoint, force=True)
    except Exception as err:
        logging.error(f'Error updating home cache: {err}')
    return {'status': 'ok'}

@app.get('/quotas/gpfs/{endpoint}')
def get_quotas_gpfs_endpoint(endpoint, background_tasks: BackgroundTasks):
    try:
        quotas = gpfs.getQuotas(endpoint)
        background_tasks.add_task(gpfs.loadAllQuotas)
        background_tasks.add_task(gpfs.loadFilesystems)
        background_tasks.add_task(gpfs.loadAllFilesets)
    except Exception as err:
       logging.error(f'Error reading {endpoint} quotas: {err}')
    return {'data': quotas }

@app.get('/quota/gpfs/{endpoint}/{username}')
def get_quota_gpfs_endpoint_username(endpoint, username, background_tasks: BackgroundTasks):
    try:
        quota = gpfs.getQuota(endpoint, username)
        background_tasks.add_task(gpfs.loadAllQuotas)
        background_tasks.add_task(gpfs.loadFilesystems)
        background_tasks.add_task(gpfs.loadAllFilesets)
    except Exception as err:
       logging.error(f'Error reading {endpoint} quota for {username}: {err}')
    return {'data': quota }

@app.get('/filesystems')
def get_filesystems(background_tasks: BackgroundTasks):
    try:
        filesystems = gpfs.getFilesystems()
        background_tasks.add_task(gpfs.loadAllQuotas)
        background_tasks.add_task(gpfs.loadFilesystems)
        background_tasks.add_task(gpfs.loadAllFilesets)
    except Exception as err:
       logging.error(f'Error reading filesystems: {err}')
    return {'data': filesystems }

@app.get('/filesets/{filesystem}')
def get_filesets(filesystem, background_tasks: BackgroundTasks):
    try:
        filesets = gpfs.getFilesets(filesystem)
        background_tasks.add_task(gpfs.loadAllQuotas)
        background_tasks.add_task(gpfs.loadFilesystems)
        background_tasks.add_task(gpfs.loadAllFilesets)
    except Exception as err:
       logging.error(f'Error reading filesystems: {err}')
    return {'data': filesets }

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
