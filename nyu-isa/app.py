import uvicorn

from authlib.integrations.starlette_client import OAuth, OAuthError
from fastapi import FastAPI, HTTPException, status
from starlette.config import Config
from starlette.middleware.sessions import SessionMiddleware
from starlette.requests import Request


# configuration parameters
HOST = '0.0.0.0'
PORT = 8080
SCOPE = 'profile'  # if you need more scopes, add them to the string (separated with whitespaces)

# in a productive app, DO NOT leave any of the following in your code
# ACTION ITEM: replace these placeholders with your own values
CLIENT_ID = 'azeRAWFDgGufn5WoUrhIhdQYDf4a'
CLIENT_SECRET = '6u5kRpZjdXmf_4RttmImcICC_cIa'
SESSION_SECRET = '+HNqp+wvO3LTIqqDpp8vznYP27YX6cWn4Po98KgW/64='


# initialize the API
app = FastAPI()


# add session middleware (this is used internally by starlette to execute the authorization flow)
app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET,
                   max_age=60 * 60 * 24 * 7)  # one week, in seconds


# configure OAuth client
config = Config(environ={})  # you could also read the client ID and secret from a .env file
oauth = OAuth(config)
oauth.register(  # this allows us to call oauth.nyu later on
    'nyu',
    authorize_url='https://auth.nyu.edu/oauth2/authorize',
    access_token_url='https://auth.nyu.edu/oauth2/token',
    scope=SCOPE,
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET
)


# define the endpoints for the OAuth2 flow
@app.get('/login')
async def get_authorization_code(request: Request):
    """OAuth2 flow, step 1: have the user log into NYU SSO to obtain an authorization code grant
    """

    redirect_uri = request.url_for('auth')
    return await oauth.nyu.authorize_redirect(request, redirect_uri)


@app.get('/auth')
async def auth(request: Request):
    """OAuth2 flow, step 2: exchange the authorization code for access token
    """

    # exchange auth code for token
    try:
        token = await oauth.nyu.authorize_access_token(request)
    except OAuthError as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=error.error
        )

    # you now have a NYU-SSO token. Do whatever you need with it
    return token


# run the API
if __name__ == '__main__':
    uvicorn.run('main:app', host=HOST, port=PORT)