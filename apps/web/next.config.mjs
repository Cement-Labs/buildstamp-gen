/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/buildstamp-gen",
  assetPrefix: "/buildstamp-gen/",
  transpilePackages: ["@workspace/ui"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
