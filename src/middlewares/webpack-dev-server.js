import convert from 'koa-convert'


export default function configureWebpackServer(app){
	const webpack = require('webpack')
	const webpackKoa = require('koa-webpack-dev-middleware')
	const webpackConfig = require('../webpack.config')

	const compiler = webpack(webpackConfig)
	// app.use(ctx => {
	// 	console.log(ctx)
	// })
	app.use(webpackKoa(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath	
	}))
}

// export default configureWebpackServer