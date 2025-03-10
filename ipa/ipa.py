#from dotenv import dotenv_values
from python_freeipa import ClientMeta
import srvlookup
import logging
from time import sleep
import os

class IPA():
  def __init__(self):
    self.user = os.environ['IPAUSER']
    self.password = os.environ['IPAPASS']
    self.realm = os.environ['IPAREALM']
    self.client = ClientMeta(verify_ssl=False,dns_discovery=self.realm)
    self.client.login(self.user, self.password)
  def openConnection(self):
    try:
      self.client.login(self.user, self.password)
    except Exception as ex:
      logging.error(f'IPA authentication error: {ex}')
    return self.client
  
  def checkConnection(self):
    try:
      self.client.logged_in()
    except:
      self.openConnection()
    
  def checkHPCUsers(self,users):
    # Fetch all HPC users from IPA
    activeUsers = []
    ipausers = {}
    try:
      ipausers = self.client.group_show('users')
    except Exception as err:
      logging.error(f'unable get users group members. Lookup failed, aborting run: {err}')
    for username in users:
      if username not in ipausers['result']['member_user']:
        logging.error(f'Invalid account. {username} does not have an active HPC account')
      else:
        activeUsers.append(username)
    return activeUsers
  def checkRTCUsers(self,users):
    # Fetch all RTC users from IPA
    activeUsers = []
    try:
      ipausers = self.client.group_show('rtc-users')
    except Exception as err:
      logging.error(f'unable get RTC users group members. Lookup failed, aborting run: {err}')
    for username in users:
      if username not in ipausers['result']['member_user']:
        logging.error(f'Invalid account. {username} does not have an active RTC account')
      else:
        activeUsers.append(username)
    return activeUsers
  def checkGenAIUsers(self,users):
    # Fetch all AI users from IPA
    activeUsers = []
    try:
      ipausers = self.client.group_show('rit-genai-users')
    except Exception as err:
      logging.error(f'unable get GenAI users group members. Lookup failed, aborting run: {err}')
    for username in users:
      if username not in ipausers['result']['member_user']:
        logging.error(f'Invalid account. {username} does not have an active GenAI account')
      else:
        activeUsers.append(username)
    return activeUsers
  def getUsers(self):
    # Fetch all users from IPA
    users = {}
    try:
      hpcUsers = self.client.group_show('users')
      users[hpcUsers['result']['cn'][0]] = hpcUsers['result']['member_user']
    except Exception as err:
      logging.error(f'unable get HPC user members. Lookup failed, aborting run: {err}')
    try:
      rtcUsers = self.client.group_show('rtc-users')
      users[rtcUsers['result']['cn'][0]] = rtcUsers['result']['member_user']
    except Exception as err:
      logging.error(f'unable get RTC user members. Lookup failed, aborting run: {err}')
    try:
      aiUsers = self.client.group_show('rit-genai-users')
      users[rtcUsers['result']['cn'][0]] = aiUsers['result']['member_user']
    except Exception as err:
      logging.error(f'unable get AI user members. Lookup failed, aborting run: {err}')
    return users
  def addUser(self,userAttribs):
    # Check if user already exists in IPA
    self.openConnection()
    try:
      checkUser = self.client.user_find(userAttribs["name"])
    except Exception as err:
      logging.error(f'Error querying user. Lookup failed, aborting run: {err}')
      addUser = 'error'
    else:
      if checkUser['count'] == 0:
        logging.info(f'Adding new user {userAttribs["name"]}')
        uid = userAttribs["uid"]
        sn = userAttribs["sn"]
        givenName = userAttribs["firstName"]
        cn = userAttribs["cn"]
        uidNumber = userAttribs["homeUnixUid"]
        gidNumber = userAttribs["homeUnixUid"]
        main = userAttribs["nyuPrefMail"]
        try:
          print(f'addUser = self.client.user_add(group,o_description={description})')
          addGroup = f'adding group {group}, description {description}'
        except Exception as err:
          logging.error(f'Error adding group {userAttribs}: {err}')
      else:
        addUser = 'user already exists'
    finally:
      self.closeConnection()
      return addUser
  def addGroup(self,group,description):
    # Check if group already exists in IPA
    self.openConnection()
    try:
      checkGroup = self.client.group_find(group)
    except Exception as err:
      logging.error(f'Error querying group. Lookup failed, aborting run: {err}')
      addGroup = 'error'
    else:
      if checkGroup['count'] == 0:
        logging.info(f'Adding new group {group}')
        try:
          print(f'addGroup = self.client.group_add(group,o_description={description})')
          addGroup = f'adding group {group}, description {description}'
        except Exception as err:
          logging.error(f'Error adding group {group}: {err}')
      else:
        addGroup = 'group already exists'
    finally:
      self.closeConnection()
      return addGroup
  def addGroupMembers(self,group,users):
    try:
      checkGroup = self.client.group_find(group)
    except Exception as err:
      logging.error(f'Error querying group. Lookup failed, aborting run: {err}')
    else:
      activeUsers = self.checkUsers(users)
      if checkGroup['count'] > 0 and len(activeUsers) > 0:
        logging.info(f'Adding new users to group {group}')
        u = ','.join(activeUsers)
        try:
          print(f'addGroupMembers = self.client.group_add_members(group,o_user={u})')
          addGroupMembers = f'adding group {group} members {u}'
        except Exception as err:
          logging.error(f'Error adding users to group {group}: {err}')
      else:
        addGroupMembers = 'error adding users to group'
    finally:
      self.closeConnection()
      return addGroupMembers
  def addGroupManagers(self,group,users):
    try:
      checkGroup = self.client.group_find(group)
    except Exception as err:
      logging.error(f'Error querying group. Lookup failed, aborting run: {err}')
    activeUsers = self.checkUsers(users)
    if checkGroup['count'] > 0 and len(activeUsers) > 0:
      logging.info(f'Adding new managers to group {group}')
      u = ','.join(activeUsers)
      try:
        print(f'addGroupManagers = self.client.group_add_member_manager(group,o_user={u})')
        addGroupManagers = f'adding group {group} managers {u}'
      except Exception as err:
        logging.error(f'Error adding managers to group {group}: {err}')
      return addGroupManagers
    else:
      return 'error adding managers to group'
  def closeConnection(self):
    self.client.logout()
