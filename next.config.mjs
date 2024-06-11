/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "toppng.com",
      },
      {
        protocol: "https",
        hostname: "vipps.no",
      },
    ],
  },
};

export default nextConfig;
