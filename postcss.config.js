module.exports = {
	plugins: {
		"postcss-flexbugs-fixes": {},
		"postcss-preset-env": {
			autoprefixer: {grid: false},
			stage: 0,
			features: {
				clamp: false,
				"logical-properties-and-values": false,
				"media-query-ranges": {
					preserve: true,
				},
				"custom-properties": false,
			},
		},
	}
}