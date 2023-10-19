/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'http',
	// 			hostname: 'dev.sspu.sumy.ua',
	// 			// port: '1337',
	// 			pathname: '/uploads/**',
	// 		},
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'images.pexels.com',
	// 		}
	// 	],
	// },
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `https://dev.sspu.sumy.ua/uploads/:path*`,
			},
			{
				source: '/kafedry/:path*',
				destination: '/chairs/:path*',
			},
			{
				source: '/istoriya-universytetu',
				destination: '/history-of-the-institute',
			},
			{
				source: '/storinka-speczialnostej',
				destination: '/specialties',
			},
			{
				source: '/contacts',
				destination: '/contact',
			},
			{
				source: '/studentu',
				destination: '/students',
			},
			{
				source: '/abituriyentu',
				destination: '/applicant',
			}
		]
	},
	env: {
		API_URL: process.env.API_URL
	},
}

module.exports = nextConfig
