import React from 'react';
import PageTitle from '../components/PageTitle';
import { MedicineBoxOutlined } from '@ant-design/icons';

export default function MedicalPage() {
  return (
    <div>
      <PageTitle 
        title="健康管理" 
        subtitle="记录和管理家庭成员的健康信息"
        icon={<MedicineBoxOutlined />}
      />
      {/* 其他内容 */}
    </div>
  );
}
