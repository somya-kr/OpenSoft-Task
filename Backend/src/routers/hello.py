from fastapi import APIRouter, Request

router = APIRouter()

@router.get('/')
async def root():
    return {"message": "Hello World"}

