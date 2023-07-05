/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["sources.unsplash.com", "placekitten.com"],
  }
}

module.exports = nextConfig
