import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permet tous les domaines HTTPS
      },
      {
        protocol: 'http',
        hostname: 'localhost', // Pour le développement local
      },
    ],
  },
};

export default nextConfig;
