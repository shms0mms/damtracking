import typing

from sqlalchemy import ForeignKey

from ..db import Base

from enum import Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

if typing.TYPE_CHECKING:
    from ..company.models import Points, Products
    from ..client.models import Basket


class Company(Enum):
    company = "company"
    customer = "customer"
    
class User(Base):
    
    __tablename__ = "user"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    
    username:Mapped[str]
    
    email:Mapped[str] = mapped_column(unique=True)
    
    company_name:Mapped[str] = mapped_column(nullable=True)
    
    
    first_name:Mapped[str]
    
    second_name:Mapped[str]
    
    third_name:Mapped[str]
    
    
    password:Mapped[bytes]
    
    role:Mapped[Company]  
    
    
    points:Mapped[list["Points"]] = relationship(uselist=True, back_populates="company")
    
    products:Mapped[list["Products"]] = relationship(uselist=True, back_populates="company_2")
    
    
    
    
    
    
    
    
    basket:Mapped["Basket"] = relationship(uselist=False, back_populates="user")