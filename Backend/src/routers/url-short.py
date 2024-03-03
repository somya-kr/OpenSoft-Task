from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# from bson import ObjectId
from uuid import uuid4
import shortuuid
from src.db import ShortenedURL
from src import schemas
from routers.auth import get_current_user
from fastapi import jsonify
from fastapi.responses import RedirectResponse


router = APIRouter()

# def convert_object_id(data):
#     if isinstance(data, ObjectId):
#         return str(data)
#     if isinstance(data, dict):
#         for key in data:
#             data[key] = convert_object_id(data[key])
#     if isinstance(data, list):
#         for i, item in enumerate(data):
#             data[i] = convert_object_id(item)
#     return data

@router.post("/shorten")
async def shorten_url(request: schemas.URLSchema, current_user: dict = Depends(get_current_user)):
    
    existing_short_url = await ShortenedURL.find_one({"original_url": request.original_url})
    if existing_short_url:
        if '_id' in existing_short_url:
            del existing_short_url['_id']
        return existing_short_url

    short_code = shortuuid.uuid()[:6]
    shortened_url_data = {
        "short_code": short_code,
        "original_url": request.original_url,
        "user_id": current_user["id"],
        "clicks": 0,
        "team_id": None
    }

    await ShortenedURL.insert_one(shortened_url_data)
    return jsonify({"shortened_url": f"http://localhost:8000/{short_code}"})

@router.post("/team/shorten")
async def shorten_url(request: schemas.TeamURLSchema, current_user: dict = Depends(get_current_user)):
    short_code = shortuuid.uuid()[:6]
    existing_short_url = await ShortenedURL.find_one({"original_url": request.original_url, "team_id": current_user["team_id"]})
    if existing_short_url:
        if '_id' in existing_short_url:
            del existing_short_url['_id']
        return existing_short_url
    shortened_url_data = {
        "short_code": short_code,
        "original_url": request.original_url,
        "user_id": current_user["id"],
        "clicks": 0,
        "team_id": current_user["team_id"]
    }


    


@router.get("/{short_code}")
async def redirect_url(short_code: str):
    url = await ShortenedURL.find_one({"short_code": short_code})
    if url:
        await ShortenedURL.update_one({"short_code": short_code}, {"$inc": {"clicks": 1}})
        return RedirectResponse(url["original_url"])
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="URL not found")

@router.get("/user/{user_id}")
async def get_user_urls(user_id: str, current_user: dict = Depends(get_current_user)):
    if user_id != current_user["id"]:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    urls = await ShortenedURL.find({"user_id": user_id}).to_list(1000)
    for url in urls:
        if '_id' in url:
            del url['_id']
    return urls

@router.get("/stats/{short_code}")
async def get_url_stats(short_code: str, current_user: dict = Depends(get_current_user)):
    url = await ShortenedURL.find_one({"short_code": short_code})
    if not url:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="URL not found")
    if url["user_id"] != current_user["id"]:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    if '_id' in url:
        del url['_id']
    return url

@router.delete("/{short_code}")
async def delete_url(short_code: str, current_user: dict = Depends(get_current_user)):
    url = await ShortenedURL.find_one({"short_code": short_code})
    if not url:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="URL not found")
    if url["user_id"] != current_user["id"]:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    await ShortenedURL.delete_one({"short_code": short_code})
    return jsonify({"message": "URL deleted successfully"})

