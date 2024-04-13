from pydantic import BaseModel



class ShowCompany(BaseModel):
    
    id:int
    company_name:str
    
    
class ShowPoints(BaseModel):
    id:int
    
    latitude:float
    
    longtitude:float
    
class ShowProducts(BaseModel):
    id:int
    
    title:str
    
    desc:str
    
    company_id: int
    price:float
    


class Distation(BaseModel):
    
    latitude1:float
    longtitude1:float
    latitude2:float
    longtitude2:float
    
    
class BasketProductModel(BaseModel):
    
    id:int
    
    counts:int
    
    product:ShowProducts