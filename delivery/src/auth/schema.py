from typing import Optional
from pydantic import BaseModel, EmailStr

from .models import Company


class UserCreate(BaseModel):
    
        email:EmailStr
    
        
        username:str
        
        company_name:Optional[str]
        
        
        first_name:str
        
        second_name:str
        
        third_name:str
        
        
        password:str|bytes
        
        role:Company  

class UserAuth(BaseModel):
        
        email:EmailStr

        
        password:str|bytes
        
        
class UserMe(BaseModel):
        
        id:int
        
        username:str
        
        company_name:Optional[str]
        
        email:EmailStr
        
        first_name:str
        
        second_name:str
        
        third_name:str
        
        role:Company  

class UpdateUser(BaseModel):
        
        
        username:Optional[str]
        
        email:Optional[EmailStr]
        
        company_name:Optional[str]
        
        
        first_name:Optional[str]
        
        second_name:Optional[str]
        
        third_name:Optional[str]
        