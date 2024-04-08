from typing import Optional
from pydantic import BaseModel




class UserCreate(BaseModel):
    
    
        
        username:str
        
        
        first_name:str
        
        second_name:str
        
        third_name:str
        
        
        password:str|bytes
        
        company:bool  

class UserAuth(BaseModel):
        
        username:str
        
        password:str|bytes
        
        
class UserMe(BaseModel):
        
        id:int
        
        username:str
        
        
        first_name:str
        
        second_name:str
        
        third_name:str

class UpdateUser(BaseModel):
        
        
        username:Optional[str]
        
        
        first_name:Optional[str]
        
        second_name:Optional[str]
        
        third_name:Optional[str]
        