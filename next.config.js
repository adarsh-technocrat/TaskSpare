/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://localhost:3000"]
    }
  },
  images: {
    domains: ["unsplash.com", "cdn.pixabay.com", "images.pexel.com", "files.edgestore.dev"],
  },
};

module.exports = nextConfig;
