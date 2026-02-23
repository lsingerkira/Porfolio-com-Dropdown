const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
	output: 'export',
	basePath: '/Porfolio-com-Dropdown',
	images: {
		loader: 'custom',
		loaderFile: './src/lib/image.loader.js',
	},
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
