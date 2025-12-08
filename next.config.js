/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages cannot run Next.js image optimization,
  // so disable it to avoid build errors.
  images: {
    unoptimized: true
  },

  // Optional: Ensure correct trailing slash behavior for GH Pages
  trailingSlash: true
}

module.exports = nextConfig
