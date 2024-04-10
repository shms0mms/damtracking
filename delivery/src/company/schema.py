from typing import Optional
from pydantic import BaseModel, ConfigDict

class ShowPoints(BaseModel):
    
    address:str


class ProductCreate(BaseModel):


    
    title:str
    
    desc:str


class ProductShow(BaseModel):

    id:int
    
    title:str
    
    desc:str

class ProductUpdate(BaseModel):


    
    title:Optional[str]
    
    desc:Optional[str]
