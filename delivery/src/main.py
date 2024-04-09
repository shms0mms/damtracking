from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import engine, Base

from .auth.router import app  as auth_app

app = FastAPI()

app.include_router(auth_app)

async def create_db():
    
    async with engine.begin()as conn:
        await  conn.run_sync(Base.metadata.create_all)
@app.get("/db")
async def create():
    await create_db()
    return True

origins = ['*']
app.add_middleware(CORSMiddleware,allow_origins=origins, allow_headers=["*"], allow_methods=["*"])