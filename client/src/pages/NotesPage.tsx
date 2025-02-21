import React from 'react';
import PageTitle from '../components/PageTitle';
import { BookOutlined } from '@ant-design/icons';

export default function NotesPage() {
  return (
    <div>
      <PageTitle 
        title="灵感笔记" 
        subtitle="记录您的想法和灵感"
        icon={<BookOutlined />}
      />
      {/* 其他内容 */}
    </div>
  );
} 