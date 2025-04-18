/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Already enabled by default, but be explicit
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    // Needed to include client-side chunks properly
    instrumentationHook: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Set meaningful filenames for analyzer
    if (!isServer) {
      config.output.filename = "static/js/[name].[contenthash].js";
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
