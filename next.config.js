/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRss: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['example.com'],
    remotePatterns: [{ protocol: 'https', hostname: '*' }]
  }
};

module.exports = nextConfig;
