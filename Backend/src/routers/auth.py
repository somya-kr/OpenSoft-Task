from fastapi import APIRouter, Depends, HTTPException, Request, status, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from uuid import uuid4 as uuid
import bcrypt
from src import schemas
from src.db import User
import jwt
from src.config import config
router = APIRouter()
from bson import ObjectId
from uuid import uuid4

def convert_object_id(data):
    if isinstance(data, ObjectId):
        return str(data)
    if isinstance(data, dict):
        for key in data:
            data[key] = convert_object_id(data[key])
    if isinstance(data, list):
        for i, item in enumerate(data):
            data[i] = convert_object_id(item)
    return data


@router.post("/signup")
async def signup(request: schemas.SignUPUserSchema):
    hashed_password = bcrypt.hashpw(request.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    db_user = await User.find_one({"email": request.email.lower()})
    
    if db_user is not None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already exists.")
    
    user = {
        "id": str(uuid4()),  # Use uuid4 for cryptographically secure random UUID
        "email": request.email.lower(),
        "password": hashed_password,
        "name": request.username,
        "teams": []
    }
    await User.insert_one(user)
    return {"message": "User created successfully.", "user": convert_object_id(user)}

@router.post('/login')
async def login(payload: schemas.LoginUserSchema):
    db_user = await User.find_one({'email': payload.email.lower()})
    
    if not db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Incorrect email or password')

    hashed_password = db_user.get('password')
    
    if not hashed_password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Password not found in database')

    user_id = db_user.get("id")
    
    if not user_id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='User ID not found')

    if not bcrypt.checkpw(payload.password.encode('utf-8'), hashed_password.encode('utf-8')):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Incorrect email or password')

    token = jwt.encode(payload={"user_id": user_id}, key=config["JWT_KEY"], algorithm="HS256")

    return {'status': 'success', 'token': token}


security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Security(security)
) -> dict:
    token = credentials.credentials
    try:
        token_data = jwt.decode(token, config["JWT_KEY"], algorithms=["HS256"])
    except jwt.PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    user = await User.find_one({'user_id': token_data["user_id"]})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    return user