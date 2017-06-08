/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		bundle: [
			'./index.js',
		],
		vendor: [
			'moment',
			'react',
			'react-dom',
			'prop-types',
			'react-css-modules',
			'react-router',
		],
	},
	output: {
		filename: '[name].js', // For Development
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',   // indicate the path prefix used for script tag src or link tag href
	},
	context: path.resolve(__dirname, 'src'),
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: ['eslint-loader'],
			},
			// Process JS with Babel.
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// This rule applies plugins to some third CSS, like normalizeCSS, from node_modules
			{
				test: /\.css$/,
				include: /node_modules/,        // for normalize.css
				use: [
					'style-loader?sourceMap',
					'css-loader',
				],
			},
			// "postcss" loader applies plugins configured in postcss.config
			// like autoprefixer and precss, for sass-like CSS, etc.
			// "css" loader resolves paths in CSS and adds assets as dependencies.
			// importLoaders (int): That many loaders after the css-loader are used to import resources.
			// If all you have is postcss, then 1 is fine.
			// But if you had more loaders than that, you'd want to bump the number up.
			// "style" loader turns CSS into JS modules that inject <style> tags.
			// In production, we use a plugin to extract that CSS to a file, but
			// in development "style" loader enables hot editing of CSS.
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader?sourceMap',
					'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					'postcss-loader',
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
			},
			// "url" loader works like "file" loader except that it embeds assets
			// smaller than specified limit in bytes as data URLs to avoid requests.
			{
				test: [/\.(png|bmp|gif)$/, /\.jpe?g$/],
				exclude: /node_modules/,
				use: [
					'url-loader?limit=10000',
				],
			},
		]
	},
	// fast generate source map for development
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// Used to avoid the 404 error when refresh spa with history api client router
		historyApiFallback: true,
		// Tell the dev-server we're using HMR
		// hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		// Enable HMR
		// new webpack.HotModuleReplacementPlugin(),
		// Show friendly module name instead of a number
		new webpack.NamedModulesPlugin(),
		new StyleLintPlugin({
			files: '**/*.css',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
		}),
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			title: 'Webpack React Demo',
			template: 'index.ejs',
			inject: 'body',
		}),
	],
	// Turn off performance hints during development because we don't do any
	// splitting or minification in interest of speed. These warnings become
	// cumbersome.
	performance: {
		hints: false,
	},
}
