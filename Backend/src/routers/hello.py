from fastapi import APIRouter, Request
from src.db import test_database_connection

router = APIRouter()

@router.get('/')
async def root():
    return {"message": "Hello World"}

