
# @app.get("/all_addresses")
# async def all_addreses(session:AsyncSession = Depends(get_session)):
#     addresses = await session.scalars(select(Points).options(joinedload(Points.company)))
    
#     return addresses.all()

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import selectinload, joinedload
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from ..auth.models import User

from .schema import *
from .utils  import get_distantion

from ..db import get_session

from .models import ProductsBasket, Basket

from ..auth.router import get_current_user

from ..company.models import Points, Products

app = APIRouter(prefix='/client', tags=['client'])


async def get_current_client( me:User = Depends(get_current_user)):
    
    if me.role.value != "customer":    
            raise HTTPException(status_code=404, detail={"status_code":404, "detail":"Do not have permissions"})
        
    return me


@app.get("/all_company", response_model=list[ShowCompany])
async def all_company(me = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    
    company = await session.scalars(select(User).options(selectinload(User.points),selectinload(User.products), selectinload(User.basket)).where(User.role == "company"))
    return company.all()
    

@app.get("/points_for_company/{company_id}", response_model=list[ShowPoints])
async def points_for_company_company(company_id:int,me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    points =await session.scalars(select(Points).where(Points.company_id == company_id)) 
    
    
    return points.all()
    
@app.get("/products_for_company/{company_id}", response_model=list[ShowProducts])
async def points_for_company_company(company_id:int,me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    points =await session.scalars(select(Products).where(Products.company_id == company_id)) 
    
    
    return points.all()
    
    
@app.get("/product_for_company/{product_id}")
async def points_for_company_company(product_id:int,me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    points =await session.scalar(select(Products).where(Products.id == product_id)) 
    return points
    

@app.post("/add/product/{product_id}")
async def add_product(product_id:int,me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    product = await session.scalar(select(Products).options(selectinload(Products.company_2)).where(Products.id == product_id)        )
    if not product:
            raise HTTPException(status_code=404, detail={"status_code":404, "detail":"Do not have this product"})

    basket_id = me.basket.id
    basket_part = await session.scalar(select(ProductsBasket).
                                       where(ProductsBasket.basket_id == basket_id, ProductsBasket.product_id == product_id))
    if basket_part:
        
        basket_part.counts +=1
        
        await session.commit()
        
        return {"station":True, "detail":"suck my dick "}   
    basket_part = ProductsBasket(basket_id = basket_id, product_id = product_id)
    
    session.add(basket_part)
    
    await session.commit()
    
    return {"station":True, "detail":"suck my dick "}    


@app.delete("/delete/product/{basket_id}")
async def add_product(basket_id:int,me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):

    basket = await session.scalar(select(ProductsBasket).where(ProductsBasket.basket_id == me.basket.id, ProductsBasket.product_id == basket_id))
    
    if basket:
        
        await session.delete(basket)
        
    await session.commit()
    
    return True


@app.get("/products/basket", response_model=list[BasketProductModel])
async def products_basket(me:User = Depends(get_current_client),session:AsyncSession = Depends(get_session)):
    
    products = await session.scalars(select(ProductsBasket, Products, (Products.price*ProductsBasket.counts).label("all_price") ).
                                     options(selectinload(ProductsBasket.basket), selectinload(ProductsBasket.product)).
                                     where(ProductsBasket.basket_id == me.basket.id))
    
    return products.unique().all()
    



@app.post("/pay_for_distantion")
async def pay_for_distantion(data:Distation):
    distantion = get_distantion(latitude1= data.latitude1, longtitude1= data.longtitude1, latitude2=data.latitude2, longtitude2=data.longtitude2)
    return distantion


@app.post("/make/order")
async def make_order(session:AsyncSession = Depends(get_session)):
    ...
    