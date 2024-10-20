/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"], // This is only necessary if you're using images from this domain.
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/login", // The path you will use in your fetch calls
        destination: "https://dummyjson.com/auth/login", // The actual API endpoint
      },
    ];
  },
};

export default nextConfig;
