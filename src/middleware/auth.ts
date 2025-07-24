import { NextFunction, Request, Response } from 'express'

export function apiAuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'No Bearer token provided' })
	}

	const token = authHeader.split(' ')[1]
	if (token !== process.env.API_SECRET) {
		return res.status(403).json({ error: 'Invalid token' })
	}

	next()
}
