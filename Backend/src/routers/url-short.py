from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from bson import ObjectId
from uuid import uuid4
import shortuuid
from src.db import ShortenedURL
from src import schemas

router = APIRouter()

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

@router.post("/shorten")
async def shorten_url(request: schemas.ShortenURLSchema, current_user: dict = Depends(get_current_user)):
    short_code = shortuuid.uuid()[:6]
    
    existing_short_url = await ShortenedURL.find_one({"short_code": short_code})
    if existing_short_url:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Short code already exists. Please try again.")
    
    shortened_url_data = {
        "short_code": short_code,
        "original_url": request.original_url,
        "user_id": current_user["id"] 
    }
    
    await ShortenedURL.insert_one(shortened_url_data)
    return {"shortened_url": f"http://localhost.com/{short_code}"}

@router.get("/{short_code}")
async def redirect_to_original(short_code: str):
    short_url_data = await ShortenedURL.find_one({"short_code": short_code})
    if not short_url_data:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Shortened URL not found.")
    return {"original_url": short_url_data["original_url"]}

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(HTTPBearer())
) -> dict:
    pass
