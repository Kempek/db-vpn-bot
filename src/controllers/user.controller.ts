import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getUserById(req: Request, res: Response) {
	const { id } = req.params
	const user = await prisma.user.findUnique({
		where: { id },
	})

	if (!user) {
		return res.status(404).json({ error: 'User not found' })
	}

	res.json(user)
}

export async function createUser(req: Request, res: Response) {
	const { id, username } = req.body

	const user = await prisma.user.create({
		data: {
			id,
			username,
		},
	})

	res.status(201).json(user)
}

export async function updateUser(req: Request, res: Response) {
	const { id } = req.params
	const data = req.body

	try {
		const updated = await prisma.user.update({
			where: { id },
			data,
		})
		res.json(updated)
	} catch (err) {
		res.status(404).json({ error: 'User not found' })
	}
}

export async function getUserSubscriptions(req: Request, res: Response) {
	const { id } = req.params
	const subscriptions = await prisma.subscription.findMany({
		where: { userId: id },
		include: {
			plan: true,
			vpnKey: true,
		},
	})
	res.json(subscriptions)
}

export async function getUserTransactions(req: Request, res: Response) {
	const { id } = req.params
	const transactions = await prisma.transaction.findMany({
		where: { userId: id },
	})
	res.json(transactions)
}
