from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import engine, Base


from .company.router import app as company_auth
from .auth.router import app  as auth_app
from .client.router import app as client_app

app = FastAPI()

app.include_router(auth_app)

app.include_router(client_app)


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



origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
)
