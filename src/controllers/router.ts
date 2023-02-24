import * as Router from 'koa-router';
import service from './service'
const router = new Router();

router.post("/contacts/email", async (ctx) => {
	const email = ctx.request.body.email
	const res = await service.createContract(email)
	ctx.body = {
		code: 200,
		msg: res
	}
});

export default router;