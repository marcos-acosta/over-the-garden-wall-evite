import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "64.media.tumblr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
