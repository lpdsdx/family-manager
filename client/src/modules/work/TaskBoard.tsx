import { useState } from 'react'
import { Button, Card, Table, Tag, Modal } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface Task {
  key: string
  title: string
  priority: 'high' | 'medium' | 'low'
  status: 'todo' | 'inProgress' | 'done'
  deadline: Date
}

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      key: '1',
      title: '项目需求分析',
      priority: 'high',
      status: 'todo',
      deadline: new Date('2023-09-30')
    }
  ])

  const columns: ColumnsType<Task> = [
    { title: '任务名称', dataIndex: 'title' },
    { title: '优先级', 
      render: (_, { priority }) => (
        <Tag color={
          priority === 'high' ? 'red' : 
          priority === 'medium' ? 'orange' : 'green'
        }>
          {priority}
        </Tag>
      )
    },
    { title: '状态', dataIndex: 'status' },
    { title: '截止日期', dataIndex: 'deadline' }
  ]

  return (
    <Card 
      title="任务看板" 
      extra={<Button type="primary">新建任务</Button>}
    >
      <Table
        columns={columns}
        dataSource={tasks}
        pagination={false}
      />
      <TaskForm />
    </Card>
  )
}

function TaskForm() {
  const [visible, setVisible] = useState(false)
  
  return (
    <Modal
      title="创建新任务"
      open={visible}
      onCancel={() => setVisible(false)}
    >
      {/* 表单内容 */}
    </Modal>
  )
} 