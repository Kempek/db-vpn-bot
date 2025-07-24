import { Router } from 'express'
import * as UserController from '../controllers/user.controller'

const router = Router()

router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.patch('/:id', UserController.updateUser)
router.get('/:id/subscriptions', UserController.getUserSubscriptions)
router.get('/:id/transactions', UserController.getUserTransactions)

export default router
