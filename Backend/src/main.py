from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
from src.config import config
from src.routers import hello, auth, url_short


app.add_middleware(
    CORSMiddleware,
    allow_origins=config['CORS_ORIGINS'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hello.router, tags=['hello'])
app.include_router(auth.router, tags=['auth'])
app.include_router(url_short.router, tags=['url-short'])