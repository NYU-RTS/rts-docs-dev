import logging
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from typing import (
    List, Optional
)
import os
import urllib3

class Group(BaseModel):
    name: str
    description: str = None

class GroupMembers(BaseModel):
    name: str
    users: Optional[list] = None

app = FastAPI()
quay = registry.QUAY()

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

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
