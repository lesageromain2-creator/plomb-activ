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
      { source: "/plombier-rillieux-la-pape", destination: "/plombier/rillieux-la-pape", permanent: true },
      { source: "/plombier-villeurbanne", destination: "/plombier/villeurbanne", permanent: true },
      { source: "/plombier-sathonay", destination: "/plombier/sathonay-camp", permanent: true },
      { source: "/plombier-sathonay-camp", destination: "/plombier/sathonay-camp", permanent: true },
      { source: "/plombier-fontaines-sur-saone", destination: "/plombier/fontaines-sur-saone", permanent: true },
      { source: "/plombier-collonges", destination: "/plombier/collonges-au-mont-d-or", permanent: true },
      { source: "/plombier-cuire", destination: "/plombier/cuire", permanent: true },
      { source: "/plombier-saint-clair", destination: "/plombier/saint-clair", permanent: true },
      { source: "/plombier-croix-rousse", destination: "/plombier/croix-rousse", permanent: true },
      { source: "/debouchage-caluire", destination: "/debouchage", permanent: true },
      { source: "/debouchage-caluire-et-cuire", destination: "/debouchage", permanent: true },
      { source: "/fuite-caluire", destination: "/fuite-eau", permanent: true },
      { source: "/fuite-eau-caluire", destination: "/fuite-eau", permanent: true },
      { source: "/chauffe-eau-caluire", destination: "/chauffe-eau", permanent: true },
      { source: "/depannage-plomberie-caluire-et-cuire", destination: "/urgences", permanent: true },
      { source: "/plombier-urgence-caluire", destination: "/urgences", permanent: true },
      { source: "/debouchage-rillieux", destination: "/canalisation", permanent: true },
      { source: "/plombier-montessuy", destination: "/plombier/montessuy", permanent: true },
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
