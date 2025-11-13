import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Para solucionar el error del import de Webflow
    config.externals.push({
      'https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a0432fd429f309141ad736_!!!!!./.webp': 'commonjs undefined'
    });
    
    return config;
  },
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;