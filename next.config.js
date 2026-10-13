/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Même principe que /landing → public/landing.html
    return [
      { source: '/iphone-15-pro', destination: '/iphone-15-pro.html' },
      { source: '/catalogue-3d', destination: '/catalogue-3d.html' },
    ]
  },
}
module.exports = nextConfig
