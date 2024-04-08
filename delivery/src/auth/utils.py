import datetime
import bcrypt
from fastapi import HTTPException
import jwt

from ..config import config






# # ______________________passwords_______________________
def hash_password(password:str) -> bytes:
    
    new_password = bcrypt.hashpw(password=password.encode(), salt=bcrypt.gensalt())
    
    return new_password

def check_password(password:str, old_password) -> bool:
    
    return bcrypt.checkpw(password=password.encode(), hashed_password=old_password)



# ______________________tokens_______________________


async def create_access_token(user_id:int, algorithm:str = config.algorithm, private_key:str = config.private_key.read_text()) -> str :
        
        payload = {"user_id":user_id, "exec":(datetime.datetime.now(datetime.UTC) + datetime.timedelta(days=7)).timestamp()}
        token = jwt.encode(payload=payload, algorithm=algorithm, key=private_key)
        return token




async def valid_access_token(
        token, 
        algorithm:str = config.algorithm,
        public_key:str = config.public_key.read_text()
        ) -> dict:
        
    
    try:
        payload = jwt.decode(jwt = token, key=public_key, algorithms=[algorithm])
    except:
        raise HTTPException(status_code=404, detail={
            "token":"not_valid",
            "status":404
    })
    if payload.get("exec"):
        times = payload['exec']
        if times > datetime.datetime.now(datetime.UTC).timestamp():
                return payload["user_id"]
    raise HTTPException(status_code=404, detail={
            "token":"not_valid",
            "status":404
    })
    
    


