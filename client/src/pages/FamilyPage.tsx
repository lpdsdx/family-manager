import React from 'react';
import PageTitle from '../components/PageTitle';
import { HeartOutlined } from '@ant-design/icons';
import { Typography, List, Avatar } from 'antd';

export default function FamilyPage() {
  return (
    <div>
      <PageTitle 
        title="家庭动态" 
        subtitle="了解家人的近期活动"
        icon={<HeartOutlined />}
      />
      <div style={{ padding: 24 }}>
        <Typography.Title level={2}>家庭动态</Typography.Title>
        <List
          dataSource={[
            { title: '小明', desc: '完成了数学作业' },
            { title: '妈妈', desc: '更新了家庭购物清单' }
          ]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title={item.title}
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
} 