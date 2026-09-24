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
      {
        source: "/",
        has: [{ type: "host", value: "www.plombactiv.com" }],
        destination: "https://plombactiv.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.plombactiv.com" }],
        destination: "https://plombactiv.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
