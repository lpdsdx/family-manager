import React from 'react';
import { AutoComplete, Form } from 'antd';

const DiagnosisAutoComplete: React.FC = () => {
  return (
    <Form.Item
      label="诊断结果"
      name="diagnosis"
      rules={[{ required: true, message: '请输入诊断结果' }]}
    >
      <AutoComplete
        placeholder="输入诊断结果"
        options={[
          { value: '感冒' },
          { value: '发烧' },
          { value: '咳嗽' },
        ]}
      />
    </Form.Item>
  );
};

export default DiagnosisAutoComplete; 