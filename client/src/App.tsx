import 'antd/dist/reset.css';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CalendarPage from './pages/CalendarPage'
import MedicalPage from './pages/MedicalPage'
import RecipePage from './pages/RecipePage'
import React, { FC } from 'react';
import WorkPage from './pages/WorkPage'
import './global.css'
import { 
  CoffeeOutlined,    // 工作空间
  HeartOutlined,     // 家庭生活
  SmileOutlined,     // 个人空间
  DashboardOutlined, // 工作看板
  CheckCircleOutlined, // 任务管理
  CalendarOutlined,  // 家庭日历
  MedicineBoxOutlined, // 健康管理
  BookOutlined,      // 灵感笔记
  RestOutlined,      // 我的菜谱 - 使用餐具图标替代重复的CoffeeOutlined
  HomeOutlined       // 顶部Logo
} from '@ant-design/icons'
import NotesPage from './pages/NotesPage'
import TodoPage from './pages/TodoPage'
import FamilyPage from './pages/FamilyPage'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

const { Header, Sider, Content } = Layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "todos", element: <TodoPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "family", element: <FamilyPage /> },
      { path: "medical", element: <MedicalPage /> },
      { path: "recipes", element: <RecipePage /> },
      { path: "work", element: <WorkPage /> },
      { path: "notes", element: <NotesPage /> },
    ]
  }
]);

// 设置 dayjs 的默认语言为中文
dayjs.locale('zh-cn');

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App 