import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.plantstore.ie",
        port: "",
        pathname: "/cdn/shop/products/**",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        port: "",
        pathname: "/vader-prod.s3.amazonaws.com/**",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        port: "",
        pathname: "/hmg-prod/images/**", // covers all images under this directory
      },
      {
        protocol: "https",
        hostname: "fyf.tac-cdn.net",
        port: "",
        pathname: "/images/products/small/**", // covers all images under this directory
      },
      {
        protocol: "https",
        hostname: "succulentsbox.com",
        port: "",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "www.marthastewart.com",
        port: "",
        pathname: "/thmb/**",
      },
      {
        protocol: "https",
        hostname: "abeautifulmess.com",
        port: "",
        pathname: "/wp-content/uploads/2023/**",
      },
      {
        protocol: "https",
        hostname: "mobileimages.lowes.com",
        port: "",
        pathname: "/marketingimages/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        port: "",
        pathname: "/hmg-prod/images/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "planaplant.com",
        port: "",
        pathname: "/cdn/shop/products/**",
      },
    ],
  },
};

export default nextConfig;
