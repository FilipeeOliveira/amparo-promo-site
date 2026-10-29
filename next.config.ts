import type { NextConfig } from 'next';

// Exportação estática: `npm run build` gera a pasta dist/ pronta para a Hostinger.
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
};

export default nextConfig;
