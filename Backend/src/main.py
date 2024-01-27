from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
from src.config import config
from src.routers import hello, auth


app.add_middleware(
    CORSMiddleware,
    allow_origins=config['CORS_ORIGINS'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hello.router, tags=['hello'])
app.include_router(auth.router, tags=['auth'])