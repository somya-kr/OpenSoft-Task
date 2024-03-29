from dotenv import load_dotenv, find_dotenv
import os
BASEDIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv()

config = {
    'MONGO_INITDB_DATABASE':os.getenv('MONGO_INITDB_DATABASE'),
    'JWT_KEY':os.getenv('JWT_KEY'),
    'CORS_ORIGINS':os.getenv('CORS_ORIGINS'),
    'DATABASE_URL':os.getenv('DATABASE_URL'),
    'BASE_URL':os.getenv('BASE_URL'),
}
