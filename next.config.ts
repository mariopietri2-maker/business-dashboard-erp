import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves under /business-dashboard-erp
  basePath: isGithubPages ? "/business-dashboard-erp" : "",
  assetPrefix: isGithubPages ? "/business-dashboard-erp" : "",
  trailingSlash: true,
};

export default nextConfig;
