import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { apiAuthMiddleware } from './middleware/auth'
import routes from './routes' // Подключаем централизованные маршруты

// Загрузка переменных окружения из `.env`
dotenv.config()

const app = express()

app.use(cors()) // при необходимости
app.use(express.json()) // для парсинга JSON

// Все маршруты идут с префиксом /api
app.use('/api', apiAuthMiddleware, routes)

export default app
