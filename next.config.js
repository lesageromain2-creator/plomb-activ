/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/entretien", destination: "/chauffage", permanent: true },
      { source: "/pac-clim", destination: "/climatisation", permanent: true },
      { source: "/urgence-plomberie", destination: "/urgences", permanent: true },
      { source: "/plombier-urgence", destination: "/urgences", permanent: true },
    ];
  },
};

module.exports = nextConfig;
