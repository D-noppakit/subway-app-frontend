import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'food-cms.grab.com',
        port: '',
        pathname: '/compressed_webp/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add more patterns if needed
    ]
  }
}
export default MillionLint.next({
  rsc: true
})(nextConfig);