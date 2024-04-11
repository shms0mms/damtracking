from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import selectinload, joinedload
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


from .utils import check_address
from .models import Points, Products
from .schema import ProductCreate, ProductShow, ProductUpdate, ShowPoints



from ..auth.models import User, Company
from ..auth.router import get_current_user
from ..db import get_session


app = APIRouter(prefix="/company", tags=['company'])

async def get_current_company( me:User = Depends(get_current_user)):
    
    if me.role.value != "company":    
            raise HTTPException(status_code=404, detail={"status_code":404, "detail":"Do not have permissions"})
        
    return me





@app.post("/add_address")
async def check_addres(address:ShowPoints, me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    

    point = Points(longtitude= address.longtitude, latitude = address.latitude, company_id = me.id)
    
    
    session.add(point)
    
    await session.commit()
    
    
    return True

@app.get("/my_address", response_model = list[ShowPoints])
async def check_addres( me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    

    addresses = await session.scalars(select(Points).options(joinedload(Points.company)).where(Points.company_id == me.id))
   
    return addresses.all()


@app.post("/add_product")
async def add_product(data:ProductCreate,me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    product = Products(title = data.title, desc = data.desc  , price = data.price)
    product.company_2 = me
    
    session.add(product)
    
    
    await session.commit()
    
    
    return True

@app.get("/show_products", response_model=list[ProductShow])
async def show_products(me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    products = await session.scalars(select(Products).options(selectinload(Products.company_2)).where(Products.company_id == me.id).order_by(Products.id))      
    
    return products.all()


@app.put("/update_product/{product_id}", response_model=ProductShow)
async def update_product(product_id:int,data:ProductUpdate,me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    product  = await session.scalar(select(Products).options(selectinload(Products.company_2)).where(Products.id == product_id, Products.company_id == me.id))
    if not product:
        
        raise HTTPException(status_code=500, detail={"status_code":500, "detail":"Dont have permissions"})
    if data.title:
        product.title = data.title    
    if data.desc:
        product.desc = data.desc
        
    if data.price:
        product.desc = data.price
        
    await session.commit()
    
    product = await session.scalar(select(Products).options(selectinload(Products.company_2)).where(Products.id == product.id))
    
    
    return product

@app.delete("/delete_product/{product_id}")
async def delete_product(product_id:int,me:User = Depends(get_current_company),session:AsyncSession = Depends(get_session)):
    
    
    product  = await session.scalar(select(Products).options(selectinload(Products.company_2)).where(Products.id == product_id, Products.company_id == me.id))
    if not product:
        
        raise HTTPException(status_code=500, detail={"status_code":500 , "detail":"Dont have permissions"})
    await session.delete(product)
    
    await session.commit()
    
    
    
    return True