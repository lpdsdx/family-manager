from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class TaskCreate(BaseModel):
    title: str
    description: str | None = None
    priority: str
    deadline: str

@router.post("/tasks")
async def create_task(task: TaskCreate):
    # 保存到数据库
    return {"status": "success", "task_id": "123"} 