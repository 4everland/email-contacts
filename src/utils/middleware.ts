import * as Koa from 'koa';
import { HttpError, HttpStatusCode } from './httperror';
import { logger } from './logger'

export const httpErrorMiddleware = async (ctx: Koa.ParameterizedContext<any, {}>, next: () => Promise<any>) => {
	try {
		await next()
	} catch (err) {
		if (err instanceof HttpError) {
			ctx.status = err.statusCode
			ctx.body = {
				code: err.code,
				message: err.message
			}
		} else {
			ctx.status = HttpStatusCode.InternalError
			ctx.body = {
				code: 500,
				message: err.toString()
			}
			logger.error("unexpected error: ", err)
		}
	}
}