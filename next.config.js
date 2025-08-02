/** @type {import('next').NextConfig} */
const nextConfig = {
  // PWA optimizations
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  
  // Performance optimizations for mobile
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for mobile
  images: {
    formats: ['image/webp', 'image/avif']
  },
  
  // Headers for PWA and mobile optimization
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/'
          }
        ]
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig