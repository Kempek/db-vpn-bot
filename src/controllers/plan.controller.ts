import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getAllPlans(req: Request, res: Response) {
	const plans = await prisma.plan.findMany()
	res.json(plans)
}

export async function getPlanById(req: Request, res: Response) {
	const { id } = req.params
	const plan = await prisma.plan.findUnique({
		where: { id: Number(id) },
	})

	if (!plan) {
		return res.status(404).json({ error: 'Plan not found' })
	}

	res.json(plan)
}

export async function createPlan(req: Request, res: Response) {
	const data = req.body

	const plan = await prisma.plan.create({
		data,
	})

	res.status(201).json(plan)
}

export async function updatePlan(req: Request, res: Response) {
	const { id } = req.params
	const data = req.body

	try {
		const updated = await prisma.plan.update({
			where: { id: Number(id) },
			data,
		})

		res.json(updated)
	} catch {
		res.status(404).json({ error: 'Plan not found' })
	}
}

export async function deletePlan(req: Request, res: Response) {
	const { id } = req.params

	try {
		await prisma.plan.delete({
			where: { id: Number(id) },
		})

		res.status(204).end()
	} catch {
		res.status(404).json({ error: 'Plan not found' })
	}
}
