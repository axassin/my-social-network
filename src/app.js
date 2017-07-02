import Koa from 'koa'
import http from 'http'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'

const app = new Koa()

mongoose.Promise = Promise
mongoose.connect(config.database)
const db = mongoose.connection

db.on('open',() => {
	console.log('connected to database')
})

app.use(bodyParser())
app.use(routes.routes())
const server  = http.createServer(app.callback())
server.listen(config.port)