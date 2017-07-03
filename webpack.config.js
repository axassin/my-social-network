module.exports = {
	entry: [
		'./views/app.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [{
			loaders: ['babel-loader'],
			exclude: /node_modules/,
			include: __dirname
		}]
	},
	resolve: {
		extensions: ['.js','.jsx','.json']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
}