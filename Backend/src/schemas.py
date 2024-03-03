from pydantic import BaseModel, EmailStr, constr, HttpUrl, conint, validator, Field
from typing import List, Optional, Union
from typing import List, Optional, Union
from enum import Enum
from pydantic import BaseModel


class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8, max_length=128) # type: ignore

class SignUPUserSchema(LoginUserSchema):
    username: constr(min_length=2, max_length=50) # type: ignore
    email: EmailStr
    password: constr(min_length=3, max_length=128) # type: ignore
    
class ShortenedUrl(BaseModel):
    short_url: str
    original_url: str

class URLSchema(BaseModel):
    original_url: HttpUrl

class TeamURLSchema(BaseModel):
    original_url: HttpUrl
    team_id: str