from datetime import datetime
from .base import Base
from sqlalchemy import Column, String, DateTime, Enum

class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(String, primary_key=True)
    title = Column(String(200), nullable=False)
    description = Column(String(1000))
    priority = Column(Enum('high', 'medium', 'low'))
    status = Column(Enum('todo', 'inProgress', 'done'), default='todo')
    created_at = Column(DateTime, default=datetime.utcnow)
    deadline = Column(DateTime) 