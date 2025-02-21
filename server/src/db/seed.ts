import db from './index';

// 插入一些示例数据
const seedData = () => {
  try {
    // 插入任务
    db.prepare(`
      INSERT INTO tasks (title, completed) VALUES
      ('完成项目报告', 0),
      ('购买家庭日用品', 1),
      ('预约体检', 0)
    `).run();

    // 插入日程
    db.prepare(`
      INSERT INTO events (title, start_time, end_time, status) VALUES
      ('晨会', datetime('now', 'start of day', '+9 hours'), datetime('now', 'start of day', '+10 hours'), 'completed'),
      ('项目评审', datetime('now', 'start of day', '+11 hours'), datetime('now', 'start of day', '+12 hours'), 'in-progress'),
      ('客户会议', datetime('now', 'start of day', '+15 hours'), datetime('now', 'start of day', '+16 hours'), 'pending')
    `).run();

    // 插入家庭动态
    db.prepare(`
      INSERT INTO family_activities (user, action, time) VALUES
      ('小明', '完成了作业', '10分钟前'),
      ('妈妈', '添加了购物清单', '30分钟前')
    `).run();

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData(); 