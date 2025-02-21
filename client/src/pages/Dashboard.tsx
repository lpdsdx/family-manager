import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from 'antd/es/card';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Statistic from 'antd/es/statistic';
import Timeline from 'antd/es/timeline';
import List from 'antd/es/list';
import Tag from 'antd/es/tag';
import { 
  CheckCircleOutlined, 
  ClockCircleOutlined,
  CalendarOutlined,
  HeartOutlined 
} from '@ant-design/icons';
import AnimatedCard from '../components/AnimatedCard';
import TodoList from '../components/TodoList';
import FamilyFeed from '../components/FamilyFeed';
import { BookOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './dashboard.module.css'
import { Skeleton, Alert } from 'antd'
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';

// 添加模拟数据接口
interface DashboardData {
  pendingTasks: number;
  completedTasks: number;
  todayEvents: number;
  familyReminders: number;
  todoList: { id: number; title: string; completed: boolean }[];
  schedule: { time: string; event: string; status: 'pending' | 'in-progress' | 'completed' }[];
  familyActivities: FamilyActivity[];
}

// 添加类型定义
interface FamilyActivity {
  user: string;
  action: string;
  time: string;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    pendingTasks: 0,
    completedTasks: 0,
    todayEvents: 0,
    familyReminders: 0,
    todoList: [],
    schedule: [],
    familyActivities: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/dashboard');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCompleteTask = async (taskId: number) => {
    try {
      await axios.patch(`http://localhost:3000/api/tasks/${taskId}/complete`);
      setData(prev => ({
        ...prev,
        todoList: prev.todoList.map(task => 
          task.id === taskId 
            ? { ...task, completed: !task.completed }
            : task
        ),
        pendingTasks: prev.pendingTasks - 1,
        completedTasks: prev.completedTasks + 1
      }));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setData(prev => ({
      ...prev,
      todoList: prev.todoList.filter(task => task.id !== taskId),
      pendingTasks: prev.pendingTasks - 1
    }));
  };

  if (error) {
    return <Alert type="error" message={error} />
  }

  return (
    <div className={styles.dashboardGrid}>
      {loading ? (
        <Skeleton active paragraph={{ rows: 8 }} />
      ) : (
        <>
          {/* 统计卡片区 */}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={6}>
              <AnimatedCard>
                <Card bodyStyle={{ padding: '20px' }}>
                  <Statistic 
                    title={<span style={{ 
                      fontSize: '16px',
                      color: '#666',
                      fontWeight: '500'
                    }}>待办任务</span>}
                    value={data.pendingTasks} 
                    valueStyle={{ 
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#333'
                    }}
                    prefix={<ClockCircleOutlined style={{ 
                      color: '#ff9a9e', 
                      fontSize: '24px',
                      marginRight: '8px'
                    }}/>}
                  />
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AnimatedCard delay={0.1}>
                <Card bodyStyle={{ padding: '20px' }}>
                  <Statistic 
                    title={<span style={{ 
                      fontSize: '16px',
                      color: '#666',
                      fontWeight: '500'
                    }}>已完成</span>}
                    value={data.completedTasks} 
                    valueStyle={{ 
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#333'
                    }}
                    prefix={<CheckCircleOutlined style={{ 
                      color: '#a3be8c', 
                      fontSize: '24px',
                      marginRight: '8px'
                    }}/>}
                  />
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AnimatedCard delay={0.2}>
                <Card bodyStyle={{ padding: '20px' }}>
                  <Statistic 
                    title={<span style={{ 
                      fontSize: '16px',
                      color: '#666',
                      fontWeight: '500'
                    }}>今日日程</span>}
                    value={data.todayEvents} 
                    valueStyle={{ 
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#333'
                    }}
                    prefix={<CalendarOutlined style={{ 
                      color: '#81a1c1', 
                      fontSize: '24px',
                      marginRight: '8px'
                    }}/>}
                  />
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AnimatedCard delay={0.3}>
                <Card bodyStyle={{ padding: '20px' }}>
                  <Statistic 
                    title={<span style={{ 
                      fontSize: '16px',
                      color: '#666',
                      fontWeight: '500'
                    }}>家庭提醒</span>}
                    value={data.familyReminders} 
                    valueStyle={{ 
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#333'
                    }}
                    prefix={<HeartOutlined style={{ 
                      color: '#b48ead', 
                      fontSize: '24px',
                      marginRight: '8px'
                    }}/>}
                  />
                </Card>
              </AnimatedCard>
            </Col>
          </Row>

          {/* 主要内容区 */}
          <Row gutter={[12, 12]} style={{ marginTop: 12 }}>
            <Col xs={24} md={12} lg={8}>
              <AnimatedCard>
                <Card 
                  bodyStyle={{ padding: '12px' }}
                  title={<span style={{ fontSize: '12px', color: '#666' }}>待办事项</span>}
                  extra={<Link to="/todos" style={{ fontSize: '12px' }}>更多</Link>}
                >
                  <TodoList 
                    todos={data.todoList}
                    onComplete={handleCompleteTask}
                    onDelete={handleDeleteTask}
                  />
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <AnimatedCard delay={0.1}>
                <Card 
                  bodyStyle={{ padding: '12px' }}
                  title={<span style={{ fontSize: '12px', color: '#666' }}>今日日程</span>}
                  extra={<Link to="/calendar" style={{ fontSize: '12px' }}>详情</Link>}
                >
                  <Timeline>
                    <Timeline.Item 
                      color="green"
                      style={{ fontSize: '12px', padding: '0 0 12px' }}
                    >
                      09:00 晨会
                    </Timeline.Item>
                    <Timeline.Item color="blue">11:00 项目评审</Timeline.Item>
                    <Timeline.Item color="red">15:00 客户会议</Timeline.Item>
                    <Timeline.Item>18:00 下班</Timeline.Item>
                  </Timeline>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} lg={8}>
              <AnimatedCard delay={0.2}>
                <Card 
                  bodyStyle={{ padding: '12px' }}
                  title={<span style={{ fontSize: '12px', color: '#666' }}>家庭动态</span>}
                  extra={<Link to="/family" style={{ fontSize: '12px' }}>全部</Link>}
                >
                  <List
                    itemLayout="horizontal"
                    size="small"
                    dataSource={data.familyActivities}
                    renderItem={(item: FamilyActivity) => (
                      <List.Item>
                        <List.Item.Meta
                          title={<span style={{ fontSize: '12px' }}>{item.user}</span>}
                          description={
                            <span style={{ fontSize: '12px' }}>
                              {item.action}
                              <Tag style={{ marginLeft: 8, fontSize: '11px', padding: '0 4px' }}>{item.time}</Tag>
                            </span>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </AnimatedCard>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
