import React, { useRef } from "react";
import Head from "next/head";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Arfan Hidayat Priyantono — Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Arfan Hidayat Priyantono — Cyber Security Engineer who builds automation tools to streamline team workflows. Explore my experience and projects."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Arfan Hidayat, Yuukinaesa, Portfolio, Cyber Security, Automation Tools, Security Engineering"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Arfan Hidayat Priyantono — Portfolio"
        />
        <meta
          property="og:description"
          content="Personal portfolio of Arfan Hidayat Priyantono — Cyber Security Engineer who builds automation tools to streamline team workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://arfan.biz.id/" />
        <meta property="og:site_name" content="Arfan Hidayat Priyantono — Portfolio" />
        <meta property="og:image" content="https://arfan.biz.id/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Arfan Hidayat Priyantono — Cyber Security Engineer Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arfan Hidayat Priyantono — Portfolio"
        />
        <meta
          name="twitter:description"
          content="Personal portfolio of Arfan Hidayat Priyantono — Cyber Security Engineer who builds automation tools to streamline team workflows."
        />
        <meta name="twitter:image" content="https://arfan.biz.id/og-image.png" />
        <meta name="twitter:image:alt" content="Arfan Hidayat Priyantono — Cyber Security Engineer Portfolio" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://arfan.biz.id/" />
      </Head>

      <main
        id="main-content"
        className="bg-slate-900 px-2 md:px-10 font-body text-primary"
        role="main"
      >
        <Intro
          onExperienceClick={scrollToExperience}
          onProjectsClick={scrollToProjects}
        />
        <div className="w-full mx-auto p-4">
          <section
            ref={experienceRef}
            id="experience"
            aria-labelledby="experience-heading"
          >
            <Experience />
          </section>
          <section
            ref={projectsRef}
            id="projects"
            aria-labelledby="projects-heading"
          >
            <Projects />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
