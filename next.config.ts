import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // This is crucial for Netlify
  trailingSlash: true,  // Recommended for Netlify
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;