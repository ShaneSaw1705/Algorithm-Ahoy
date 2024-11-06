/* eslint-disable @typescript-eslint/no-explicit-any */
const nextConfig = {
	webpack: (config: any) => {
		config.experiments = {
			...config.experiments,
			asyncWebAssembly: true,
			layers: true,
		};

		config.output = {
			...config.output,
			webassemblyModuleFilename: 'static/wasm/[modulehash].wasm'
		};

		return config;
	},
}

module.exports = nextConfig
