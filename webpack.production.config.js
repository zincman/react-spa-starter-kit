/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

const extractBundleCSS = new ExtractTextPlugin({
	filename: 'styles/[contenthash].bundle.css',
	allChunks: true,
})

const extractVendorCSS = new ExtractTextPlugin({
	filename: 'styles/[contenthash].vendor.css',
	allChunks: true,
})

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
			'react-router-dom',
			'material-ui/styles',
			'typeface-roboto',
			'classnames/bind',
		],
	},
	output: {
		filename: '[chunkhash].[name].js',  // For Production
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
				use: [{ loader: 'eslint-loader' }],
			},
			// Process JS with Babel.
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{ loader: 'babel-loader' }],
			},
			// This rule applies plugins to some third CSS, like normalizeCSS, from node_modules
			{
				test: /\.css$/,
				include: /node_modules/,        // for normalize.css etc.
				use: extractVendorCSS.extract({
					fallback: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: true,
							},
						},
					],
					use: [
						{
							loader: 'css-loader',   // There is no modules
							options: {
								sourceMap: true,
							},
						},
					],
				}),
			},
			// "postcss" loader applies plugins configured in postcss.config like autoprefixer and precss, for sass-like CSS, etc.
			// "css" loader resolves paths in CSS and adds assets as dependencies.
			// "style" loader turns CSS into JS modules that inject <style> tags.
			// In production, we use a plugin to extract that CSS to a file, but
			// in development "style" loader enables hot editing of CSS.
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: extractBundleCSS.extract({
					fallback: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: true,
							},
						},
					],
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				}),
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [{ loader: 'file-loader' }],
			},
			// "url" loader works like "file" loader except that it embeds assets
			// smaller than specified limit in bytes as data URLs to avoid requests.
			{
				test: [/\.(png|bmp|gif)$/, /\.jpe?g$/],
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,   // Byte limit to inline files as Data URL
						},
					},
				],
			},
		]
	},
	devtool: 'source-map',  // For Production
	plugins: [
		/* For Production */
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new StyleLintPlugin({
			files: '**/*.css',
		}),
		extractBundleCSS,
		extractVendorCSS,
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
		}),
		new WebpackMd5Hash(),
		new ManifestPlugin(),
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			title: 'Webpack React Demo',
			template: 'index.ejs',
			inject: 'body',
		}),
		new InlineManifestWebpackPlugin({
			name: 'webpackManifest',
		}),

		/* For Production */
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true,
			},
			sourceMap: true,
		})
	],
}
