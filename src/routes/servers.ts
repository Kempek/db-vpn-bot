import { Router } from 'express'
import * as ServerController from '../controllers/server.controller'

const router = Router()

router.get('/', ServerController.getAllServers)
router.get('/:id', ServerController.getServerById)
router.post('/', ServerController.createServer)
router.patch('/:id', ServerController.updateServer)

export default router
