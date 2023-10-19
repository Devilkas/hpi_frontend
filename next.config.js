/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
