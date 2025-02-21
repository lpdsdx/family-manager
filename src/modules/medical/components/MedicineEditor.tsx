import React from 'react';
import { Input, InputNumber, Space, Button, Form } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const MedicineEditor: React.FC = () => {
  return (
    <Form.List name="medicines">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} align="baseline">
              <Form.Item
                {...restField}
                name={[name, 'name']}
                rules={[{ required: true, message: '请输入药品名称' }]}
              >
                <Input placeholder="药品名称" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'dosage']}
                rules={[{ required: true, message: '请输入剂量' }]}
              >
                <InputNumber placeholder="剂量" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
              添加药品
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default MedicineEditor; 