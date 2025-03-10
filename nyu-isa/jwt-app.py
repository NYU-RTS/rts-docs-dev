from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2AuthorizationCodeBearer

from jwt import PyJWKClient
import jwt
from typing import Annotated
import os
import uvicorn
import logging

app = FastAPI()
certificateURL = os.environ['CERTURL'] 

oauth_2_scheme = OAuth2AuthorizationCodeBearer(
    tokenURL = os.environ['TOKENURL']
    authorizationUrl = os.environ['AUTHURL'],
    refreshUrl = os.environ['REFRESHURL'],
)

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(format='%(asctime)s %(levelname)s %(message)s')
logging = logging.getLogger("uvicorn")

async def valid_access_token(
    access_token: Annotated[str, Depends(oauth_2_scheme)]
):
    # url = "http://path/to/realm/protocol/openid-connect/certs"
    optional_custom_headers = {"User-agent": "custom-user-agent"}
    jwks_client = PyJWKClient(certificateURL, headers=optional_custom_headers)

    try:
        signing_key = jwks_client.get_signing_key_from_jwt(access_token)
        data = jwt.decode(
            access_token,
            signing_key.key,
            algorithms=["RS256"],
            audience="api",
            options={"verify_exp": True},
        )
        return data
    except jwt.exceptions.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Not authenticated")


@app.get("/public")
def get_public():
    return {"message": "Ce endpoint est public"}


@app.get("/private", dependencies=[Depends(valid_access_token)])
def get_private():
    return {"message": "Ce endpoint est privé"}