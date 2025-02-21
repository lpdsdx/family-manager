from sqlalchemy import Column, Integer, String, JSON, DateTime
from .base import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    email = Column(String(100), unique=True)
    password_hash = Column(String(200))
    family_members = Column(JSON)  # 存储家庭成员信息
    created_at = Column(DateTime, default=datetime.utcnow) 