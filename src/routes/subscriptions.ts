import { Router } from 'express'
import * as SubscriptionController from '../controllers/subscription.controller'

const router = Router()

router.get('/:id', SubscriptionController.getSubscriptionById)
router.post('/', SubscriptionController.createSubscription)
router.patch('/:id', SubscriptionController.updateSubscription)

export default router
