import logging
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import urllib3
import vast as vast
import os

class Group(BaseModel):
    name: str
    description: str = None

class GroupMembers(BaseModel):
    name: str
    users: Optional[list] = None

app = FastAPI()
vast = vast.VASTClient()

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

@app.get('/vast_user_quota/{username}')
def vast_get_user_quota(username):
    try:
        quota = vast.get_user_quota(username, os.environ['VASTSERVER']+'/api/userquotas/')
        return {'data': quota }
    except Exception as err:
        logging.error(f'Error reading user quota {username}: {err}')

@app.get('/vast_user_quotas')
def vast_get_all_user_quotas():
    try:
        quotas = vast.get_user_quotas(os.environ['VASTSERVER']+'/api/userquotas/')
        return {'data': quotas }
    except Exception as err:
       logging.error(f'Error reading all vast user quotas: {err}')

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
