import logging
from fastapi import FastAPI, BackgroundTasks, HTTPException
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import urllib3
import gpfs as gpfs
import re

class Group(BaseModel):
    name: str
    description: str = None

class GroupMembers(BaseModel):
    name: str
    users: Optional[list] = None

app = FastAPI()
gpfs = gpfs.GPFS()

# create Redis stores and dictionaries
gpfs.create_file_systems_and_sets()

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s')
logging = logging.getLogger("uvicorn")

@app.get('/')
def index():
    return {'data': 'Go away please'}

@app.get('/healthz')
def healthz(background_tasks: BackgroundTasks):
    background_tasks.add_task(gpfs.load_all_quotas)
    background_tasks.add_task(gpfs.load_filesystems_and_sets)
    return {'status': 'ok'}

@app.get('/dicts')
def get_dicts():
    dicts = gpfs.get_dicts()
    return {'data': dicts}

@app.get('/rebuild_cache')
def rebuild_redis(background_tasks: BackgroundTasks):
    background_tasks.add_task(gpfs.create_file_systems_and_sets)
    return {'status': 'ok'}

@app.get('/update_cache/{endpoint}')
def update_cache_gpfs_home(endpoint):
    try:
        gpfs.load_quotas(endpoint, force=True)
    except Exception as err:
        logging.error(f'Error updating home cache: {err}')
    return {'status': 'ok'}

@app.get('/quotas/gpfs/{endpoint}')
def get_quotas_gpfs_endpoint(endpoint, background_tasks: BackgroundTasks):
    quotas = ''
    try:
        quotas = gpfs.get_quotas(endpoint)
        if quotas == 'bad endpoint':
            raise HTTPException(status_code=404, detail="Not a valid endpoint")
    except Exception as err:
       logging.error(f'Error reading {endpoint} quotas: {err}')
    finally:
        background_tasks.add_task(gpfs.load_all_quotas)
        background_tasks.add_task(gpfs.load_filesystems_and_sets)

    return {'data': quotas }

@app.get('/quota/gpfs/{endpoint}/{username}')
def get_quota_gpfs_endpoint_username(endpoint, username, background_tasks: BackgroundTasks):
    quota = ''
    try:
        quota = gpfs.get_quota(endpoint, username)
        if quota == 'bad endpoint' or re.fullmatch(r'Error: username [a-z0-9]* not found', quota):
            raise HTTPException(status_code=404, detail="Not a valid endpoint")

    except Exception as err:
       logging.error(f'Error reading {endpoint} quota for {username}: {err}')
    finally:
        background_tasks.add_task(gpfs.load_all_quotas)
        background_tasks.add_task(gpfs.load_filesystems_and_sets)
    return {'data': quota }

@app.get('/filesystems')
def get_filesystems(background_tasks: BackgroundTasks):
    filesystems = ''
    try:
        filesystems = gpfs.get_filesystems()
        background_tasks.add_task(gpfs.load_all_quotas)
        background_tasks.add_task(gpfs.load_filesystems_and_sets)
    except Exception as err:
       logging.error(f'Error reading filesystems: {err}')
    return {'data': filesystems }

@app.get('/filesets/{filesystem}')
def get_filesets(filesystem, background_tasks: BackgroundTasks):
    filesets = ''
    try:
        filesets = gpfs.get_filesets(filesystem)
        background_tasks.add_task(gpfs.load_all_quotas)
        background_tasks.add_task(gpfs.load_filesystems_and_sets)
    except Exception as err:
       logging.error(f'Error reading filesystems: {err}')
    return {'data': filesets }

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
