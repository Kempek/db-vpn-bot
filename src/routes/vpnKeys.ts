import { Router } from 'express'
import * as VpnKeyController from '../controllers/vpnKey.controller'

const router = Router()

router.get('/:id', VpnKeyController.getKeyById)
router.post('/', VpnKeyController.createKey)
router.patch('/:id', VpnKeyController.updateKey)

export default router
