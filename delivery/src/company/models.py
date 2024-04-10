import typing

from sqlalchemy import ForeignKey


from ..db import Base

from sqlalchemy.orm import Mapped, mapped_column, relationship

if typing.TYPE_CHECKING:
    from ..auth.models import User

class Points(Base):
    
    __tablename__ = "points"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    
    address:Mapped[str]
    
    company_id:Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))
    
    company:Mapped["User"] = relationship(uselist=False, back_populates="points")


class Products(Base):
    
    __tablename__ = "products"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    title:Mapped[str]
    
    desc:Mapped[str]
    
    company_id:Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"), nullable=True)
    
    
    company_2:Mapped["User"] = relationship(uselist=False, back_populates="products")
    
    