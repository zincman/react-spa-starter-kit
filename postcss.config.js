/* eslint-disable */
module.exports = {
	/* Plugin order is determined by declaration in the plugins section.
	 * Maybe from left to right
	 */
	plugins: [
		// Import styles in compile time and allow hmr for @import
		require('postcss-import'),
		// Allow to use Sass-like markup
		require('precss'),
		// The plugin to future CSS standard syntax
		require('postcss-cssnext'),
	]
}
