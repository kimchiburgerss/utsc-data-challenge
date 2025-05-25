import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/utsc-data-challenge' : '',
  assetPrefix: isGithubPages ? '/utsc-data-challenge' : '',
}

export default nextConfig