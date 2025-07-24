import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getKeyById(req: Request, res: Response) {
	const { id } = req.params

	const key = await prisma.vpnKey.findUnique({
		where: { id: Number(id) },
		include: {
			server: true,
			subscription: true,
		},
	})

	if (!key) {
		return res.status(404).json({ error: 'VPN key not found' })
	}

	res.json(key)
}

export async function createKey(req: Request, res: Response) {
	const { subscriptionId, serverId, key, serverName, trafficLimit, expiresAt } =
		req.body

	try {
		const created = await prisma.vpnKey.create({
			data: {
				subscriptionId,
				serverId,
				key,
				serverName,
				trafficLimit,
				expiresAt: expiresAt ? new Date(expiresAt) : undefined,
			},
		})

		res.status(201).json(created)
	} catch (err) {
		res.status(400).json({ error: 'Failed to create key', details: err })
	}
}

export async function updateKey(req: Request, res: Response) {
	const { id } = req.params
	const data = req.body

	try {
		const updated = await prisma.vpnKey.update({
			where: { id: Number(id) },
			data,
		})

		res.json(updated)
	} catch {
		res.status(404).json({ error: 'VPN key not found' })
	}
}
