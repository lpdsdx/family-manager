import React from 'react';
import PageTitle from '../components/PageTitle';
import { RestOutlined } from '@ant-design/icons';

export default function RecipePage() {
  return (
    <div>
      <PageTitle 
        title="我的菜谱" 
        subtitle="收集和分享美味的家常菜谱"
        icon={<RestOutlined />}
      />
      {/* 其他内容 */}
    </div>
  );
}
