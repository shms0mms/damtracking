from ..db import Base

from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
    
    __tablename__ = "user"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    
    username:Mapped[str] = mapped_column(unique=True)
    
    
    first_name:Mapped[str]
    
    second_name:Mapped[str]
    
    third_name:Mapped[str]
    
    
    password:Mapped[bytes]
    
    company:Mapped[bool]  