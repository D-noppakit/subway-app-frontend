import MillionLint from "@million/lint";

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
  },
  env: {
    GoogleMapKey: process.env.GOOGLE_KEY,
    ENDPOINT_UAT : ""
  },
}
export default MillionLint.next({ rsc: true })(nextConfig);

