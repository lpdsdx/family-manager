import React from 'react';
import { Alert } from 'antd'
import TaskBoard from '../modules/work/TaskBoard'

export default function WorkPage() {
  return (
    <div style={{ 
      background: '#fff',
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <Alert 
        message="工作管理模块" 
        type="info" 
        showIcon 
        style={{ marginBottom: 24 }}
      />
      <TaskBoard />
    </div>
  );
} 