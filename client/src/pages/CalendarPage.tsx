import React from 'react';
import { Calendar, Select, Row, Col } from 'antd';
import type { Locale } from 'antd/es/locale';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';

// 设置 dayjs 的默认语言为中文
dayjs.locale('zh-cn');

export default function CalendarPage() {
  return (
    <div style={{ 
      background: '#fff',
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <Calendar 
        locale={zhCN.Calendar}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i}>
                {months[i]}
              </Select.Option>
            );
          }

          const year = value.year();
          const month = value.month();

          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8}>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                  >
                    {Array.from({ length: 20 }, (_, i) => year - 10 + i).map(y => (
                      <Select.Option key={y} value={y}>
                        {y}年
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={month}
                    onChange={(selectedMonth) => {
                      const newValue = value.clone().month(selectedMonth);
                      onChange(newValue);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
      />
    </div>
  );
}
