/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // This is important for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/utsc-data-challenge' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/utsc-data-challenge' : '',
}

module.exports = nextConfig
