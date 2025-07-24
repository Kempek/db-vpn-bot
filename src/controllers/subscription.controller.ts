import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getSubscriptionById(req: Request, res: Response) {
	const { id } = req.params

	const subscription = await prisma.subscription.findUnique({
		where: { id: Number(id) },
		include: {
			plan: true,
			user: true,
			vpnKey: true,
		},
	})

	if (!subscription) {
		return res.status(404).json({ error: 'Subscription not found' })
	}

	res.json(subscription)
}

export async function createSubscription(req: Request, res: Response) {
	const { userId, planId, expiresAt } = req.body

	try {
		const subscription = await prisma.subscription.create({
			data: {
				userId,
				planId,
				expiresAt: new Date(expiresAt),
			},
		})

		res.status(201).json(subscription)
	} catch (err) {
		res.status(400).json({ error: 'Invalid data', details: err })
	}
}

export async function updateSubscription(req: Request, res: Response) {
	const { id } = req.params
	const data = req.body

	try {
		const updated = await prisma.subscription.update({
			where: { id: Number(id) },
			data,
		})

		res.json(updated)
	} catch {
		res.status(404).json({ error: 'Subscription not found' })
	}
}
