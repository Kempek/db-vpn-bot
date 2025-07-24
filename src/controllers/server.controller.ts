import { Request, Response } from 'express'
import { prisma } from '../prisma/client'

export async function getAllServers(req: Request, res: Response) {
	const servers = await prisma.server.findMany({
		include: { vpnKey: true },
	})

	res.json(servers)
}

export async function getServerById(req: Request, res: Response) {
	const { id } = req.params

	const server = await prisma.server.findUnique({
		where: { id: Number(id) },
		include: { vpnKey: true },
	})

	if (!server) {
		return res.status(404).json({ error: 'Server not found' })
	}

	res.json(server)
}

export async function createServer(req: Request, res: Response) {
	const { name, ip, port, password, country } = req.body

	const server = await prisma.server.create({
		data: {
			name,
			ip,
			port,
			password,
			country,
		},
	})

	res.status(201).json(server)
}

export async function updateServer(req: Request, res: Response) {
	const { id } = req.params
	const data = req.body

	try {
		const updated = await prisma.server.update({
			where: { id: Number(id) },
			data,
		})

		res.json(updated)
	} catch {
		res.status(404).json({ error: 'Server not found' })
	}
}
