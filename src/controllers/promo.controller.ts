import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getAllPromos(req: Request, res: Response) {
	const promos = await prisma.promoCode.findMany({
		where: { isActive: true },
	})

	res.json(promos)
}

export async function createPromo(req: Request, res: Response) {
	const data = req.body

	try {
		const promo = await prisma.promoCode.create({ data })
		res.status(201).json(promo)
	} catch (err) {
		res.status(400).json({ error: 'Failed to create promo', details: err })
	}
}

export async function redeemPromo(req: Request, res: Response) {
	const { userId, code } = req.body

	const promo = await prisma.promoCode.findUnique({
		where: { code },
	})

	if (
		!promo ||
		!promo.isActive ||
		(promo.expiresAt && promo.expiresAt < new Date())
	) {
		return res.status(400).json({ error: 'Invalid or expired promo code' })
	}

	const alreadyUsed = await prisma.redemptionPromo.findUnique({
		where: {
			userId_promoCodeId: {
				userId,
				promoCodeId: promo.id,
			},
		},
	})

	if (alreadyUsed) {
		return res.status(400).json({ error: 'Promo already used by this user' })
	}

	try {
		await prisma.redemptionPromo.create({
			data: {
				userId,
				promoCodeId: promo.id,
			},
		})

		// Можно также начислить value в balance
		await prisma.user.update({
			where: { id: userId },
			data: {
				balance: { increment: promo.value },
			},
		})

		// обновить счётчик использования
		await prisma.promoCode.update({
			where: { id: promo.id },
			data: { usedCount: { increment: 1 } },
		})

		res.status(200).json({ success: true })
	} catch (err) {
		res.status(500).json({ error: 'Failed to redeem promo', details: err })
	}
}
