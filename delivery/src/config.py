from pathlib import Path
from pydantic import BaseModel
from pydantic_settings import BaseSettings,SettingsConfigDict

BASE_DIR  = Path(__file__).parent.parent


class BdConfing(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")
    
    POSTGRES_DB:str
    
    POSTGRES_USER:str
    
    POSTGRES_PASSWORD:str
    
    
    
    
    
class Config(BaseModel):
    
    bd:BdConfing = BdConfing()
    
    private_key :Path = BASE_DIR / "src" / "auth" / "tokens" / "private_key.pem"
    
    public_key :Path = BASE_DIR / "src" / "auth" / "tokens" / "public_key.pem"
    algorithm:str = "RS256"
    
    
    
config = Config()
