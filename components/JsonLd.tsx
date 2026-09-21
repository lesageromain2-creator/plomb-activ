import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const blocks = [localBusinessJsonLd(), websiteJsonLd()];
  return (
    <>
      {blocks.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
