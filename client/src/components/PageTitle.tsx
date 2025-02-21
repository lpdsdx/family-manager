import { Typography } from 'antd';
import { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function PageTitle({ title, subtitle, icon }: PageTitleProps) {
  return (
    <div style={{
      marginBottom: 24,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fdf2f8 100%)',
      padding: '16px 24px',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      border: '1px solid rgba(255,192,203,0.1)',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 12 
      }}>
        {icon && <span style={{ 
          fontSize: 24,
          color: '#ff9a9e',
          display: 'flex',
          alignItems: 'center'
        }}>{icon}</span>}
        <div>
          <Typography.Title level={2} style={{ 
            margin: 0,
            fontSize: 24,
            color: '#444',
            fontWeight: 600
          }}>
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Text type="secondary" style={{
              fontSize: 14,
              marginTop: 4,
              display: 'block'
            }}>
              {subtitle}
            </Typography.Text>
          )}
        </div>
      </div>
    </div>
  );
} 