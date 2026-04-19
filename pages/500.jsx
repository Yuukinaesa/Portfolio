import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 — Server Error | Arfan Hidayat Priyantono</title>
        <meta
          name="description"
          content="An unexpected server error occurred."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main
        className="bg-slate-900 min-h-screen flex flex-col items-center justify-center font-body text-primary px-4"
        role="main"
      >
        <h1 className="text-6xl md:text-8xl font-title font-bold text-red-500 mb-4">
          500
        </h1>
        <p className="text-lg md:text-xl text-semidark mb-8 text-center max-w-md">
          Something went wrong on our end. Please try again later.
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
