import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Statik site için export kullanıyoruz
  images: {
    unoptimized: true, // Resim optimizasyonunu devre dışı bırakıyoruz
    domains: ['api.microlink.io', 'barancicek.space'], // Kendi domaininizin ekli olduğuna dikkat edin
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
