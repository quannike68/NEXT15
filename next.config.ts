import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com'], // Thêm domain Google
  },
};

export default nextConfig;
