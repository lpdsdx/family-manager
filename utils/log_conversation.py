import yaml
from datetime import datetime
import os

def log_conversation(session_data: dict):
    today = datetime.now().strftime("%Y%m%d")
    log_dir = "docs/conversation_logs"
    log_file = f"{log_dir}/{today}.yaml"
    
    entry = {
        "timestamp": datetime.now().isoformat(),
        "session_id": session_data["session_id"],
        "key_points": session_data.get("key_points", []),
        "files_modified": session_data.get("files_modified", []),
        "decisions": session_data.get("decisions", []),
        "todos": session_data.get("todos", [])
    }
    
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
        
    with open(log_file, "a", encoding="utf-8") as f:
        yaml.dump([entry], f, allow_unicode=True, sort_keys=False) 