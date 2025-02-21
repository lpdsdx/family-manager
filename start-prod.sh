#!/bin/bash

# 确保脚本在出错时停止执行
set -e

echo "启动家庭管理系统生产环境..."

# 构建前端
echo "1. 构建前端..."
cd client
npm run build

# 构建后端
echo "2. 构建后端..."
cd ../server
npm run build

# 初始化数据库
echo "3. 初始化数据库..."
npm run seed

# 启动后端服务
echo "4. 启动服务..."
npm run start 