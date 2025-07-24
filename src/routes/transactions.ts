import { Router } from 'express'
import * as TransactionController from '../controllers/transaction.controller'

const router = Router()

router.get('/:id', TransactionController.getTransactionById)
router.post('/', TransactionController.createTransaction)
router.get('/user/:userId', TransactionController.getUserTransactions)

export default router
