from sqlalchemy import ForeignKey
from ..db import Base

from sqlalchemy.orm import Mapped, mapped_column, relationship
    
import typing 


if typing.TYPE_CHECKING:
    from ..auth.models import User
    from ..company.models import Products

class Basket(Base):
    
    __tablename__ = 'basket'
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    
    
    user_id:Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))
    
    user:Mapped["User"] = relationship(uselist=False, back_populates="basket")
    
    products:Mapped[list["ProductsBasket"]] = relationship(uselist=True, back_populates="basket")
    
    
class ProductsBasket(Base):
    
    __tablename__ = "products_basket"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    basket_id:Mapped[int] = mapped_column(ForeignKey("basket.id", ondelete='CASCADE'))
    
    basket:Mapped["Basket"] = relationship(uselist=False, back_populates="products")
    
    
    counts:Mapped[int]  = mapped_column(default=1)
    
    product_id:Mapped[int] = mapped_column(ForeignKey("products.id", ondelete="CASCADE"))
    
    product:Mapped["Products"]  =relationship(uselist=False)
    
class Order(Base):
    
    __tablename__ = "orders"
    
    id:Mapped[int] = mapped_column(primary_key=True)
    
    