var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: [ '', '.js', '.jsx' ]
	},
	module: {
		loaders: [ {
			test: /\.jsx?$/,
			loaders: [ 'react-hot', 'babel' ],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.less$/,
			loaders: [ 'style', 'css', 'less' ],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loaders: [ 'style', 'css' ]
		} ]

	}
};
