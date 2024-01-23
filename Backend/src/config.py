from dotenv import load_dotenv, find_dotenv
import os
BASEDIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv()

config = {
    'JWT_KEY':os.getenv('JWT_KEY'),
    'CORS_ORIGINS':os.getenv('CORS_ORIGINS'),
    'DATABASE_URL':os.getenv('DATABASE_URL'),
}
