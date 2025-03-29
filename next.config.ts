import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Разрешает все домены
        port: "",
        pathname: "**", // Разрешает все пути
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
    // Опционально: разрешить SVG
    dangerouslyAllowSVG: true,
    // Опционально: задать Content Security Policy
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
