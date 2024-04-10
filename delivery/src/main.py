from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import engine, Base


from .company.router import app as company_auth
from .auth.router import app  as auth_app

app = FastAPI()

app.include_router(auth_app)

app.include_router(company_auth)


async def create_db():
    
    async with engine.begin()as conn:
        try:
            await  conn.run_sync(Base.metadata.drop_all)
        except:
            pass
        await  conn.run_sync(Base.metadata.create_all)
@app.get("/db")
async def create():
    await create_db()
    return True



origins = ['*']
app.add_middleware(CORSMiddleware,allow_origins=origins, allow_headers=["*"], allow_methods=["*"])