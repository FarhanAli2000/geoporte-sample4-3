// Per-page metadata in the shape the original static pages used (canonical, Open Graph, Twitter card).
export function pageMeta({ title, description, path, image }) {
  const images = image ? [image] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'Geoporte', locale: 'en_AU', title, description, url: path, images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}
