/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },

  // ✅ Performance Headers & Security
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          // Performance
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          // Security
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=()' },
        ],
      },
      // Cache static assets longer
      {
        source: '/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // ✅ Redirects
  redirects: async () => {
    return [
      // Remove trailing slashes for performance
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },

  // ✅ Compression
  compress: true,

  // ✅ Production optimizations
  productionBrowserSourceMaps: false,

  // ✅ React optimizations
  reactStrictMode: false, // Performance improvement

  // ✅ Module resolution
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
