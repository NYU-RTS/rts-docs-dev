import ipa as ipa
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
ipa = ipa.IPA()

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

@app.get('/ipa/users')
def index():
    try:
       users = ipa.getUsers()
    except Exception as err:
       logging.error(f'Error fetching users: {err}')
    return {'data': users }

@app.put('/ipa/add-group')
async def add_group(group: Group):
    try:
       addNewGroup = ipa.addGroup(group.name,group.description)
    except Exception as err:
       logging.error(f'Error adding group: {err}')
    return {'data': addNewGroup }

@app.put('/ipa/add-group-members')
async def add_group_members(groupMembers: GroupMembers):
    try:
       addGroupMembers = ipa.addGroupMembers(groupMembers.name,groupMembers.users)
    except Exception as err:
       logging.error(f'Error adding group members: {err}')
    return {'data': addGroupMembers }

@app.put('/ipa/add-group-managers')
async def add_group_managers(groupManagers: GroupMembers):
    try:
       addGroupManagers = ipa.addGroupManagers(groupManagers.name,groupManagers.users)
    except Exception as err:
       logging.error(f'Error adding group managers: {err}')
    return {'data': addGroupManagers }

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8080)
