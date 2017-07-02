import Router from 'koa-router'
import post from './post-router'

const router = new Router()
const api = new Router()

api.use(post)

router.use('/api', api.routes())

export default router

