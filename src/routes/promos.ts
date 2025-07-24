import { Router } from 'express'
import * as PromoController from '../controllers/promo.controller'

const router = Router()

router.get('/', PromoController.getAllPromos)
router.post('/', PromoController.createPromo)
router.post('/redeem', PromoController.redeemPromo)

export default router
