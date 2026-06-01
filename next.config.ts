import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [],
  },
  async redirects() {
    return [
      {
        source: "/elity-dirigeant",
        destination: "/offres#pilotage",
        permanent: true,
      },
    ];
  },
};

export default config;
