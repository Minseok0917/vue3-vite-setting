module.exports = {
	plugins: [
		require('precss'),
		require('cssnano',{ preset: 'default' })
	]
}