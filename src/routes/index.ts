import { Router } from 'express'

// Импорты роутов
import planRoutes from './plan'
import promoRoutes from './promos'
import serverRoutes from './servers'
import subscriptionRoutes from './subscriptions'
import transactionRoutes from './transactions'
import userRoutes from './user'
import keyRoutes from './vpnKeys' // важно: имя должно совпадать с файлом

const router = Router()

// Подключаем все роуты с префиксами
router.use('/users', userRoutes)
router.use('/plans', planRoutes)
router.use('/promos', promoRoutes)
router.use('/servers', serverRoutes)
router.use('/subscriptions', subscriptionRoutes)
router.use('/transactions', transactionRoutes)
router.use('/keys', keyRoutes)

export default router
