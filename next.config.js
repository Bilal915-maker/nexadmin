/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/iphone-15-pro', destination: '/iphone-15-pro/index.html', permanent: false }]
  },
}
module.exports = nextConfig
