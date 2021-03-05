module.exports = {
	mount: {
		src: '/',
	},
	plugins: [],
	packageOptions: {},
	devOptions: {
		port: 1234,
	},
	buildOptions: {
		out: '.build/prod',
	},
	optimize: {
		bundle: true,
		minify: true,
		target: 'es2018',
	},
};
