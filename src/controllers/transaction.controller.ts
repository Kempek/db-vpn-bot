import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getTransactionById(req: Request, res: Response) {
	const { id } = req.params

	const transaction = await prisma.transaction.findUnique({
		where: { id: Number(id) },
		include: {
			user: true,
			subscription: true,
		},
	})

	if (!transaction) {
		return res.status(404).json({ error: 'Transaction not found' })
	}

	res.json(transaction)
}

export async function createTransaction(req: Request, res: Response) {
	const { userId, subcriptionId, amount, type, description, status } = req.body

	try {
		const created = await prisma.transaction.create({
			data: {
				userId,
				subcriptionId,
				amount,
				type,
				description,
				status,
			},
		})

		res.status(201).json(created)
	} catch (err) {
		res
			.status(400)
			.json({ error: 'Failed to create transaction', details: err })
	}
}

export async function getUserTransactions(req: Request, res: Response) {
	const { userId } = req.params

	const transactions = await prisma.transaction.findMany({
		where: { userId },
		orderBy: { createdAt: 'desc' },
	})

	res.json(transactions)
}
