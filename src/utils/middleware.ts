import * as Koa from 'koa';
import { HttpError, StatusCode } from './httperror';
import { logger } from './logger'

export const httpErrorMiddleware = async (ctx: Koa.ParameterizedContext<any, {}>, next: () => Promise<any>) => {
	try {
		await next()
	} catch (err) {
		ctx.status = 200
		if (err instanceof HttpError) {
			ctx.body = {
				code: err.code || err.statusCode,
				message: err.message
			}
		} else {
			ctx.body = {
				code: 500,
				message: err.toString()
			}
			logger.error("unexpected error: ", err)
		}
	}
}