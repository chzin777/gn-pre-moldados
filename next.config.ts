import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "www.tecnosilbr.com.br" },
      { protocol: "https", hostname: "cdn.oantagonista.com" },
      { protocol: "https", hostname: "estudeengenharia.com" },
      { protocol: "https", hostname: "www.cimentoitambe.com.br" },
      { protocol: "https", hostname: "wikihaus.com.br" },
    ],
  },
};

export default nextConfig;
