const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		rules: [
			{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
			},
			{
			test: /(\.scss|\.css)$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
        }]
	},
	resolve: {
		// modulesDirectories: ['./src/views', 'node_modules'],
		extensions: ['.js','.jsx','.json']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
}