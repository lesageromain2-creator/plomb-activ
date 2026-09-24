export function pageMeta(path: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" as const } },
  };
}
