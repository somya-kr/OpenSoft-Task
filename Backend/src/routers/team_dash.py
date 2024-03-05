from fastapi import APIRouter, Depends
from src.routers.auth import get_current_user
from src.db import ShortenedURL
from src.config import config
import pymongo

router = APIRouter()

client = pymongo.MongoClient(config["MONGO_URI"])
db = client["AZAD"]
collection = db["shortened_url"]

@router.get("/user_urls")
async def user_urls(current_user: dict = Depends(get_current_user)):
    user_email = current_user["email"]

    urls = await collection.find({"email": user_email}).to_list(1000)

    formatted_urls = [{"original_url": url.get("original_url"), "shortened_url": f"{config['BASE_URL']}/{url.get('short_code')}"}
                      for url in urls]

    return formatted_urls
