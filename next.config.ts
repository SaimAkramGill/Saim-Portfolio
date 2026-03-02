import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimal Docker image size
  output: "standalone",
};

export default nextConfig;
