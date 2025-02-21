import { List, Avatar } from 'antd'

export default function FamilyFeed() {
  return (
    <List
      dataSource={[
        { title: '小明', desc: '完成了数学作业' },
        { title: '妈妈', desc: '更新了家庭购物清单' }
      ]}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title={item.title}
            description={item.desc}
          />
        </List.Item>
      )}
    />
  )
} 