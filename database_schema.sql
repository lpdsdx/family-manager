CREATE DATABASE family_manager;

USE family_manager;

-- 用户表
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 任务表
CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 日程表
CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME,
  status ENUM('pending', 'in-progress', 'completed') DEFAULT 'pending',
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 家庭动态表
CREATE TABLE family_activities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  action VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 家庭成员表
CREATE TABLE family_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) CHECK(role IN ('parent', 'child')),
    health_conditions JSONB
);

-- 医疗记录表
CREATE TABLE medical_records (
    id UUID PRIMARY KEY,
    member_id INT REFERENCES family_members(id),
    visit_date DATE NOT NULL,
    diagnosis TEXT,
    prescriptions JSONB[]
);

-- 任务管理系统
CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    title VARCHAR(200),
    due_date TIMESTAMP,
    priority INT CHECK(priority BETWEEN 1-4),
    dependencies UUID[] -- 支持任务依赖关系
); 