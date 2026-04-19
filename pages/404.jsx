import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Arfan Hidayat Priyantono</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main
        className="bg-slate-900 min-h-screen flex flex-col items-center justify-center font-body text-primary px-4"
        role="main"
      >
        <h1 className="text-6xl md:text-8xl font-title font-bold text-sky mb-4">
          404
        </h1>
        <p className="text-lg md:text-xl text-semidark mb-8 text-center max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-transparent border border-sky text-sky font-medium text-sm px-6 py-3 rounded-md hover:bg-sky hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Return to homepage"
        >
          Go Home
        </Link>
      </main>
    </>
  );
}
