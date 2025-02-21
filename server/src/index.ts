import express from 'express';
import cors from 'cors';
import db from './db';
import { Task, Event, FamilyActivity, TaskCount } from './types';

const app = express();

app.use(cors());
app.use(express.json());

// 获取仪表盘数据
app.get('/api/dashboard', (req, res) => {
  try {
    const pendingTasks = db.prepare('SELECT COUNT(*) as count FROM tasks WHERE completed = 0').get() as TaskCount;
    const todayEvents = db.prepare(`
      SELECT * FROM events 
      WHERE DATE(start_time) = DATE('now')
    `).all() as Event[];
    const activities = db.prepare(`
      SELECT * FROM family_activities 
      ORDER BY created_at DESC LIMIT 5
    `).all() as FamilyActivity[];

    const completedTasks = db.prepare('SELECT COUNT(*) as count FROM tasks WHERE completed = 1').get() as TaskCount;
    const todoList = db.prepare('SELECT * FROM tasks ORDER BY created_at DESC').all() as Task[];

    res.json({
      pendingTasks: pendingTasks.count,
      completedTasks: completedTasks.count,
      todayEvents: todayEvents.length,
      familyReminders: 2,
      todoList,
      schedule: todayEvents,
      familyActivities: activities
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// 添加任务
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  try {
    const result = db.prepare('INSERT INTO tasks (title) VALUES (?)').run(title);
    res.json({ id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// 更新任务状态
app.patch('/api/tasks/:id/complete', (req, res) => {
  const { id } = req.params;
  try {
    const task = db.prepare('SELECT completed FROM tasks WHERE id = ?').get(id) as Task;
    db.prepare('UPDATE tasks SET completed = ? WHERE id = ?')
      .run(!task.completed, id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// 删除任务
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  try {
    db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
}); 