import { Router } from 'express'
import * as PlanController from '../controllers/plan.controller'

const router = Router()

router.get('/', PlanController.getAllPlans)
router.get('/:id', PlanController.getPlanById)
router.post('/', PlanController.createPlan)
router.patch('/:id', PlanController.updatePlan)
router.delete('/:id', PlanController.deletePlan)

export default router
