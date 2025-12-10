import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Leere Turbopack-Konfiguration, um Fehler zu vermeiden
  turbopack: {},
  // Verwende Webpack anstelle von Turbopack für den Build
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
