var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'build.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'webpack is awesome'
		})
	]
}