import React, { useRef } from 'react';
import Head from "next/head";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* ... Head and other content ... */}
      <main className="bg-slate-900 px-2 md:px-10 font-body text-primary">
        <Intro onExperienceClick={scrollToExperience} onProjectsClick={scrollToProjects} />
        <div className="w-full mx-auto p-4">
          <div ref={experienceRef}><Experience /></div>
          <div ref={projectsRef}><Projects /></div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
