from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from src.config import config
from src.models import Base

engine = create_engine(config['DATABASE_URL'])

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)


def test_database_connection():
    try:

        session = SessionLocal()
        result = session.execute(text("SELECT CURRENT_TIMESTAMP"))
        print("Current time stamp:", result.scalar())
        session.close()
        return True

    except Exception as e:
        print("Error connecting to the database:", str(e))
        return False

if test_database_connection():
    print("Database connection successful.")
else:
    print("Error connecting to the database.")