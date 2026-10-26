import './globals.css';

export const metadata = {
  metadataBase: new URL('https://geoporte.com.au'),
  robots: 'index, follow, max-image-preview:large',
  icons: { icon: { url: '/images/geoporte-logo.png', type: 'image/png' } },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
