#!/bin/bash

# 确保脚本在出错时停止执行
set -e

echo "启动家庭管理系统开发环境..."

# 启动后端服务
echo "1. 启动后端服务..."
cd server
npm run dev &
SERVER_PID=$!

# 等待后端服务启动
sleep 2

# 初始化数据库
echo "2. 初始化数据库..."
npm run seed

# 启动前端服务
echo "3. 启动前端服务..."
cd ../client
npm run dev &
CLIENT_PID=$!

# 捕获 CTRL+C 信号，清理进程
trap 'kill $SERVER_PID $CLIENT_PID; exit' SIGINT

# 等待任意子进程结束
wait 