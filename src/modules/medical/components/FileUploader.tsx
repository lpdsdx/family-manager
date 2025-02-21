import React from 'react';
import { Upload, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

interface FileUploaderProps extends UploadProps {
  accept?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ accept, ...props }) => {
  return (
    <Form.Item
      label="上传附件"
      name="attachments"
    >
      <Upload accept={accept} {...props}>
        <Upload.Button icon={<UploadOutlined />}>上传文件</Upload.Button>
      </Upload>
    </Form.Item>
  );
};

export default FileUploader; 