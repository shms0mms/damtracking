from sqlalchemy.orm import DeclarativeBase, sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

from .config import config




engine = create_async_engine(url = f"postgresql+asyncpg://{config.bd.POSTGRES_USER}:{config.bd.POSTGRES_PASSWORD}@db:5432/{config.bd.POSTGRES_DB}")
session = sessionmaker(engine , class_=AsyncSession)


async def get_session():
    async with session() as sess:
        yield sess


class Base(DeclarativeBase):
    ...
    
