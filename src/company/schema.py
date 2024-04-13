from typing import Optional
from pydantic import BaseModel, ConfigDict

class ShowPoints(BaseModel):
    id:int
    
    latitude:float
    
    longtitude:float
class CreatePoints(BaseModel):
    
    latitude:float
    
    longtitude:float

class ProductCreate(BaseModel):


    
    title:str
    
    desc:str
    
    price:float


class ProductShow(BaseModel):

    id:int
    
    title:str
    
    desc:str
    
    price:float
    

class ProductUpdate(BaseModel):


    
    title:Optional[str]
    
    desc:Optional[str]
    
    price:Optional[float]
    
