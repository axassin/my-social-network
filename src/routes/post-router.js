import Router from 'koa-router'
import { PostController } from '../controllers'


const router = new Router()

router
	.get('/posts', PostController.list)
	.post('/posts', PostController.create)

	
export default router.routes()