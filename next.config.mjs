/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: config => {
		config.module.rules.push({
			test: /\.(png|jpg|gif)$/i,
			use: [
				{
					loader: "url-loader",
					options: {
						limit: 8192,
					},
				},
			],
		})

		return config
	},

	env: {
		NEXT_PUBLIC_APP_API_KEY: process.env.NEXT_PUBLIC_APP_API_KEY,
		NEXT_PUBLIC_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
	},
}

export default nextConfig
