import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 中间件
app.use(cors())
app.use(express.json())

// 基础路由
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 启动服务
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 