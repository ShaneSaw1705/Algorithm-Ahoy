/* eslint-disable @typescript-eslint/no-explicit-any */

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
	webpack: (config: any) => {
		// Enable WebAssembly
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		};

		// Remove any existing wasm rules
		config.module.rules = config.module.rules.filter((rule: any) =>
			rule.test?.toString() !== '/\\.wasm$/'
		);

		// Add resource handling for wasm files
		config.module.rules.push({
			test: /\.wasm$/,
			type: 'asset/resource',
		});

		return config;
	},
}

module.exports = nextConfig
