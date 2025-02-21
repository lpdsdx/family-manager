import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { 
  CoffeeOutlined,
  HeartOutlined,
  SmileOutlined,
  DashboardOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  BookOutlined,
  RestOutlined,
  HomeOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fdf2f8 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(255,192,203,0.1)'
      }}>
        <div className="logo" style={{ 
          fontSize: 20,
          fontWeight: 500,
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '0.5px'
        }}>
          <HomeOutlined style={{ 
            marginRight: 12,
            color: '#ff9a9e',
            fontSize: 22
          }} />
          家庭管理系统
        </div>
      </Header>
      
      <Layout>
        <Sider width={200} theme="light" style={{
          background: 'linear-gradient(180deg, rgba(253,242,248,0.6) 0%, rgba(255,255,255,0.8) 100%)',
          borderRight: '1px solid rgba(255,192,203,0.1)',
          boxShadow: '4px 0 12px rgba(0,0,0,0.02)'
        }}>
          <Menu
            mode="inline"
            defaultOpenKeys={['work', 'family']}
            style={{ 
              borderRight: 0,
              backgroundColor: 'rgba(255,255,255,0.8)',
            }}
            items={[
              {
                key: 'work',
                label: '工作空间',
                icon: <CoffeeOutlined style={{ color: '#ff9a9e' }} />,
                children: [
                  { 
                    key: 'dashboard', 
                    label: <Link to="/">工作看板</Link>,
                    icon: <DashboardOutlined style={{ color: '#88c0d0' }} />
                  },
                  { 
                    key: 'tasks', 
                    label: <Link to="/work">任务管理</Link>,
                    icon: <CheckCircleOutlined style={{ color: '#8fbcbb' }} />
                  }
                ]
              },
              {
                key: 'calendar',
                label: <Link to="/calendar">日历</Link>,
                icon: <CalendarOutlined style={{ color: '#81a1c1' }} />
              },
              {
                key: 'family',
                label: '家庭生活',
                icon: <HeartOutlined style={{ color: '#ffa69e' }} />,
                children: [
                  { 
                    key: 'recipes', 
                    label: <Link to="/recipes">我的菜谱</Link>,
                    icon: <RestOutlined style={{ color: '#a3be8c' }} />
                  },
                  { 
                    key: 'health', 
                    label: <Link to="/medical">健康管理</Link>,
                    icon: <MedicineBoxOutlined style={{ color: '#5e81ac' }} />
                  }
                ]
              },
              {
                key: 'personal',
                label: '个人空间',
                icon: <BookOutlined style={{ color: '#b48ead' }} />,
                children: [
                  { 
                    key: 'notes', 
                    label: <Link to="/notes">灵感笔记</Link>,
                    icon: <BookOutlined style={{ color: '#ebcb8b' }} />
                  }
                ]
              }
            ]}
          />
        </Sider>

        <Content style={{ padding: '24px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
} 