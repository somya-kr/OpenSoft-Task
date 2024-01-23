from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, create_engine, text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.ext.declarative import declarative_base
from src.config import config

Base = declarative_base()

