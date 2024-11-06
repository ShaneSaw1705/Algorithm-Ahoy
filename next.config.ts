import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Other Next.js configurations
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
		}
		return config;
	},
	async headers() {
		return [
			{
				source: "/wasm/:path*",
				headers: [
					{
						key: "Content-Type",
						value: "application/wasm",
					},
				],
			},
		];
	},
};

export default nextConfig;

