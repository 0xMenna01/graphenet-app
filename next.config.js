/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'graphenet-test.infura-ipfs.io',
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig
