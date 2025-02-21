import React from 'react';
import { Typography, List, Checkbox } from 'antd';
import PageTitle from '../components/PageTitle';
import { CheckCircleOutlined } from '@ant-design/icons';

export default function TodoPage() {
  return (
    <div>
      <PageTitle 
        title="任务管理" 
        subtitle="管理和追踪您的待办事项"
        icon={<CheckCircleOutlined />}
      />
      <List
        dataSource={[
          { title: '完成项目报告', completed: false },
          { title: '购买家庭日用品', completed: true },
        ]}
        renderItem={item => (
          <List.Item>
            <Checkbox checked={item.completed}>{item.title}</Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
} 