import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Security: CSP delivered via HTTP headers in next.config.js & vercel.json */}
        {/* Removed duplicate CSP meta tag — HTTP headers take precedence and
            duplicate policies cause browser confusion (OWASP A05:2021) */}

        {/* Security headers via meta tags (fallback for non-header environments) */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Theme & PWA */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </Head>
      <body>
        {/* Accessibility: Skip to main content link (WCAG 2.1 — SC 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-sky focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:text-sm"
        >
          Skip to main content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
