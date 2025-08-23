/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["fakeimg.pl"], // keep your external domains here
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
