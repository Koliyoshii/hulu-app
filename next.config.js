/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',
      },
      {
        protocol: 'http',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/original/**'
      },
    ],
  },
}

module.exports = nextConfig
