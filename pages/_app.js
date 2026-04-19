import "@/styles/globals.css";
import Head from "next/head";
import { Inter, Poppins } from "next/font/google";
import React from "react";

// next/font: Self-hosted, zero layout shift, no render-blocking external CSS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * Global Error Boundary for graceful degradation.
 * Catches render errors in child components and displays a fallback UI.
 * ISO 25010: Reliability — Fault Tolerance
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Production: errors logged silently (no console in prod)
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("ErrorBoundary caught:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          className="bg-slate-900 min-h-screen flex flex-col items-center justify-center font-body text-primary px-4"
          role="main"
        >
          <h1 className="text-4xl md:text-6xl font-title font-bold text-red-500 mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-semidark mb-8 text-center max-w-md">
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-transparent border border-sky text-sky font-medium text-sm px-6 py-3 rounded-md hover:bg-sky hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-slate-900"
            type="button"
          >
            Try Again
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default title — overridden by per-page Head tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${inter.variable} ${poppins.variable}`}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </div>
    </>
  );
}
