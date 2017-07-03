import Koa from 'koa'
import http from 'http'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'
import html from './html'
import webpack from 'webpack'
import webpackKoa from 'koa-webpack-dev-middleware'
import webpackConfig from '../webpack.config'


const app = new Koa()


const compiler = webpack(webpackConfig)
app.use(webpackKoa(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath	
}))


mongoose.Promise = Promise

mongoose.connect(config.database)

const db = mongoose.connection

db.on('open',() => {
	console.log('connected to database')
})

app.use(bodyParser())

app.use(routes.routes())

app.use(ctx => {
	if(ctx.method === 'GET') {
		ctx.response.set('content-type','text/html')
		ctx.body = html
		return
	}
})
const server  = http.createServer(app.callback())
server.listen(config.port)