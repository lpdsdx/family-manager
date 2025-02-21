import React from 'react';
import { Select, Form } from 'antd';

const MemberSelector: React.FC = () => {
  return (
    <Form.Item
      label="家庭成员"
      name="memberId"
      rules={[{ required: true, message: '请选择家庭成员' }]}
    >
      <Select placeholder="选择家庭成员">
        <Select.Option value="1">爸爸</Select.Option>
        <Select.Option value="2">妈妈</Select.Option>
        <Select.Option value="3">孩子</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default MemberSelector; 