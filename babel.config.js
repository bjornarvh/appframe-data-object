module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: [
						'last 5 Chrome versions',
						'last 5 Firefox versions',
						'last 3 Safari versions',
						'IE 11',
						'last 3 Edge versions'
					]
				},
				useBuiltIns: false
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		'@babel/plugin-proposal-class-properties'
	],
	ignore: ['node_modules']
};
