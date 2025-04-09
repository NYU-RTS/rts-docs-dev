import logging
from fastapi import FastAPI, BackgroundTasks
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import urllib3
import vast as vast
import os
from prometheus_fastapi_instrumentator import Instrumentator

class Group(BaseModel):
    name: str
    description: str = None

class GroupMembers(BaseModel):
    name: str
    users: Optional[list] = None

app = FastAPI()
Instrumentator().instrument(app).expose(app)
vast = vast.VASTClient()

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s')
logging = logging.getLogger("uvicorn")
vast.load_user_quotas_redis(os.environ['VASTSERVER']+'/api/userquotas')

@app.get('/')
def index():
    return {'data': 'Go away please'}

@app.get('/healthz')
def healthz(background_tasks: BackgroundTasks):
    background_tasks.add_task(vast.load_user_quotas_redis, os.environ['VASTSERVER']+'/api/userquotas')
    return {'status': 'ok'}

@app.get('/message')
def index():
    return {'data': 'FastAPI is easy!'}

@app.get('/vast_user_quota/{username}')
def vast_get_user_quota(username, background_tasks: BackgroundTasks):
    try:
        quota = vast.get_user_quota(username)
        background_tasks.add_task(vast.load_user_quotas_redis, os.environ['VASTSERVER']+'/api/userquotas')
        return {'data': quota }
    except Exception as err:
        logging.error(f'Error reading user quota {username}: {err}')

@app.get('/vast_user_quotas')
def vast_get_all_user_quotas(background_tasks: BackgroundTasks):
    try:
        quotas = vast.get_user_quotas()
        background_tasks.add_task(vast.load_user_quotas_redis, os.environ['VASTSERVER']+'/api/userquotas')
        return {'data': quotas }
    except Exception as err:
       logging.error(f'Error reading all vast user quotas: {err}')

    background_tasks.add_task()

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
