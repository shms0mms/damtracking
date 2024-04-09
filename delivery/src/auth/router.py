from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials


from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from .models import User
from .schema import *
from .utils import check_password, hash_password, create_access_token, valid_access_token

from ..db import get_session

bearer = HTTPBearer()

async def get_current_user(token:HTTPAuthorizationCredentials = Depends(bearer),connection:AsyncSession = Depends(get_session)):
    
    user_id = await valid_access_token(token=token.credentials)
    user = await connection.scalar(select(User).where(User.id == user_id))
    
    if user:
    
        return user
    raise HTTPException(status_code=404, detail={
        "token":"Not actual",
        "status":404
    })


app = APIRouter(prefix="/auth", tags=['auth'])


@app.post("/register")
async def register(data:UserCreate, session:AsyncSession = Depends(get_session)):
        data.password = hash_password(data.password)
        user =User(**data.model_dump())

        session.add(user)
        await session.flush()

        # access_token
        token = await create_access_token(user.id)
        
        await session.commit()        
            
        return {"token": token }

@app.post("/login")
async def auth(data:UserAuth,session:AsyncSession = Depends(get_session)):
    
    user = await session.scalar(select(User).where(User.email == data.email))
    
    if user:
        if check_password(data.password, user.password):
                    token = await create_access_token(user.id)
                    return {"token": token }
            
        
        
    raise HTTPException(status_code=400, detail={'data':"not valid"})
    
    
    
@app.get("/me", response_model=UserMe)
async def me(me:User = Depends(get_current_user)):
    
    return me




@app.post("/update_me")
async def update_user(  data:UpdateUser,user:User = Depends(get_current_user),connection:AsyncSession  = Depends(get_session)):

        for field, value in data.model_dump().items():
            setattr(user, field,value)

        
        
        
        
        await connection.commit()
        
        user = await connection.scalar(select(User).where(User.email == data.email))
        
        
        return user        