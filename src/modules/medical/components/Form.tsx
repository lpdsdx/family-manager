import { Form as AntForm } from 'antd';
import type { FormProps } from 'antd';

export const Form: React.FC<FormProps> = (props) => {
  return <AntForm {...props} />;
};

export default Form; 