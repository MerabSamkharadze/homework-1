/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/login",
        destination: "https://dummyjson.com/auth/login",
      },
    ];
  },
};

export default nextConfig;
