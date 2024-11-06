/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
	webpack: (config: any) => {
		config.experiments = {
			...config.experiments,
			asyncWebAssembly: true,
		};

		// Important: This allows importing wasm files directly
		config.resolve.alias = {
			...config.resolve.alias,
			'@wasm': path.resolve(__dirname, '/wasm'),
		};

		return config;
	},
}

module.exports = nextConfig
