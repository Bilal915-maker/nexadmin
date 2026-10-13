/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Même principe que /landing → public/landing.html
    return [{ source: '/iphone-15-pro', destination: '/iphone-15-pro.html' }]
  },
}
module.exports = nextConfig
