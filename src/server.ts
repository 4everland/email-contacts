import * as Koa from 'koa';
import * as bodyParser from "koa-bodyparser";
import * as cors from 'koa-cors'
import router from './controllers/router';
import { logger } from './utils/logger'
import { httpErrorMiddleware } from './utils/middleware';
const convert = require('koa-convert');

const app = new Koa();
app.use(convert(bodyParser()))
	.use(convert(cors({
		origin: process.env.CORS || "*"
	})))
	.use(httpErrorMiddleware)
	.use(router.routes())
	.use(router.allowedMethods());

const port = process.env.PORT || 3000

logger.info("Server running on port " + port)
app.listen(port);