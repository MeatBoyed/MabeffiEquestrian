/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "nd-sites.s3.af-south-1.amazonaws.com" }],
  },
};

export default nextConfig;
