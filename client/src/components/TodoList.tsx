import { useState } from 'react';
import { List, Checkbox, Button } from 'antd'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ onComplete, onDelete }: TodoListProps) {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: '完成项目需求文档', completed: false }
  ])

  return (
    <List
      dataSource={todos}
      renderItem={item => (
        <List.Item>
          <Checkbox 
            checked={item.completed} 
            onChange={() => onComplete(item.id)}
          >
            {item.text}
          </Checkbox>
          <Button 
            type="link" 
            danger 
            size="small"
            onClick={() => onDelete(item.id)}
          >
            删除
          </Button>
        </List.Item>
      )}
    />
  )
} 