from pydantic import BaseModel, EmailStr, constr, HttpUrl, conint, validator, Field
from typing import List, Optional, Union
from typing import List, Optional, Union
from enum import Enum

class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8, max_length=128)

