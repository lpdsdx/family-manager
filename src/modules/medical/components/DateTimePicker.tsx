import React from 'react';
import { DatePicker, Form } from 'antd';
import type { DatePickerProps } from 'antd';

interface DateTimePickerProps extends DatePickerProps {
  label: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ label, ...props }) => {
  return (
    <Form.Item
      label={label}
      name="visitTime"
      rules={[{ required: true, message: '请选择时间' }]}
    >
      <DatePicker showTime {...props} />
    </Form.Item>
  );
};

export default DateTimePicker; 