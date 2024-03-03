from pymongo import mongo_client
from src.config import config
from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient(config['DATABASE_URL'])
db = client[config['MONGO_INITDB_DATABASE']]
print('Connected to MongoDB')

# print(config)

# try:
#     db.command("serverStatus")
# except Exception as e:
#     print(e)
#     print("Unable to connect to MongoDB")
#     exit(1)
db = client.get_database(config['MONGO_INITDB_DATABASE'])

User = db.users
Teams = db.teams
ShortenedURL = db.shortened_urls