// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['api.microlink.io'],
//   },
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
