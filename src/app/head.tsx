export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1, maximum-scale=5" name="viewport" />
      <meta name="theme-color" content="#4A6CF7" />
      
      {/* Preconnect to improve performance */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Prefetch for faster navigation */}
      <link rel="prefetch" href="/sitemap.xml" />
      <link rel="prefetch" href="/robots.txt" />
      
      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/favicon.ico" />
      
      {/* Canonical - set in page metadata */}
      
      {/* SEO: robots meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </>
  );
}
