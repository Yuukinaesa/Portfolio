import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  analisisjakarta,
  webanalisisjakarta,
  landmarkjupyter,
  landmarkstreamlit,
  rocus,
  cybersec,
  saham,
  portsyncro,
  botpam,
  ansible,
  mytools,
} from "@/public/assets/";

const PROJECTS = [
  {
    id: "ansible-log-parser",
    imageSrc: ansible,
    title: "Ansible Log Parser",
    description:
      "Developed a tool to parse Ansible logs and extract IP, credentials, and port status automatically.",
    link: "https://logparser.arfan-hidayat-priyantono.workers.dev/",
    tags: ["Python", "Ansible", "Automation", "Log Parser"],
  },
  {
    id: "mytools",
    imageSrc: mytools,
    title: "MyTools",
    description:
      "Built an internal tool for command management, quick status checks, and IP/hostname utilities.",
    link: "https://mytools.arfan-hidayat-priyantono.workers.dev/",
    tags: ["Python", "CLI", "Utilities", "Network"],
  },
  {
    id: "botpam",
    imageSrc: botpam,
    title: "PAM Automation Bot",
    description:
      "Built a Python-based automation bot to streamline PAM request workflows.",
    link: "https://drive.google.com/file/d/1Y0ANwOAubTnPBDLHk0uCBoGNGclsg3m5/view?usp=drive_link",
    tags: ["Python", "Bot", "PAM", "Automation"],
  },
  {
    id: "saham-idx",
    imageSrc: saham,
    title: "Saham IDX (Under Development)",
    description:
      "A stock screening and analysis dashboard for the Indonesian Stock Exchange (IDX) with built-in calculators.",
    link: "https://sahamidx.streamlit.app/",
    tags: ["Screener", "Stocks", "Calculator"],
  },
  {
    id: "portsyncro",
    imageSrc: portsyncro,
    title: "PortSyncro",
    description:
      "Easy portfolio synchronization for cryptocurrencies and stocks. Track Indonesian stocks, crypto investments, calculate average prices, and manage your portfolio with beautiful UI.",
    link: "https://portsyncro.arfan.biz.id/",
    tags: ["Portfolio-Management", "Real-Time", "Stocks", "Crypto"],
  },
  {
    id: "education-analysis",
    imageSrc: analisisjakarta,
    title: "Education Analysis Jakarta",
    description:
      "Analyzed Jakarta's education landscape using Google Looker Studio. Provides data-driven solutions and actionable insights to enhance education in Jakarta.",
    link: "https://lookerstudio.google.com/u/0/reporting/539d7ae5-8296-441f-a9fa-3ea7184f4f9c/page/jMLgD",
    tags: ["Analytics", "Looker Studio", "Visualization"],
  },
  {
    id: "schools-jakarta",
    imageSrc: webanalisisjakarta,
    title: "Schools in DKI Jakarta",
    description:
      "A web application that provides detailed visualizations of schools in Jakarta and displays recommendations based on average national exam scores.",
    link: "https://pendidikanjakarta.streamlit.app/",
    tags: ["Recommendation", "Streamlit", "Pydeck"],
  },
  {
    id: "landmark-streamlit",
    imageSrc: landmarkstreamlit,
    title: "Landmark Classification — Streamlit",
    description:
      "A web application developed to promote Indonesian tourism, allowing tourists to discover various landmarks across Indonesia.",
    link: "https://landmarkindonesia.streamlit.app/",
    tags: ["Image Classification", "Folium", "Geolocation"],
  },
  {
    id: "rocus-android",
    imageSrc: rocus,
    title: "Root and Custom ROM (Rocus) — Android Application",
    description:
      "An Android application built for users with low to mid-range smartphones, aiming to enhance performance without purchasing a new device, with free customization to improve the visual experience.",
    link: "https://github.com/Yuukinaesa/RootandCustomRom-Rocus-AndroidApplication",
    tags: ["Java", "Android", "Video", "Quiz"],
  },
  {
    id: "landmark-jupyter",
    imageSrc: landmarkjupyter,
    title: "Landmark Classification — Jupyter Notebook",
    description:
      "An application developed to promote Indonesian tourism. Supports adding new landmarks by training the model on custom images.",
    link: "https://github.com/Yuukinaesa/LandmarkClassification-JupyterNotebook",
    tags: ["Custom Architecture Model", "Convolutional Neural Network"],
  },
  {
    id: "cybersec-publications",
    imageSrc: cybersec,
    title: "Cyber Security Publications",
    description:
      "Exploring Digital Security: Forensics, Cryptography, Malware, and Beyond.",
    link: "https://medium.com/@Kelashkelompok2magangmbkm",
    tags: ["Forensics", "Cryptography", "Malware", "Network Security"],
  },
];

const ProjectCard = ({ id, imageSrc, title, description, link, tags }) => {
  return (
    <article
      id={`project-${id}`}
      className="flex flex-col items-center rounded-lg shadow md:flex-row"
    >
      <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
        <div className="md:flex md:items-center">
          <Image
            src={imageSrc}
            alt={`Screenshot of ${title} project`}
            className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
            width={176}
            height={128}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 667px) 100vw, (max-width: 960px) 176px, 128px"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky rounded"
            aria-label={`View ${title} project (opens in new tab)`}
          >
            {title}{" "}
            <FiArrowUpRight
              className="inline-flex transition group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
        <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
          {description}
        </p>
        <ul
          className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap list-none p-0 m-0"
          aria-label={`Technologies used in ${title}`}
        >
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h2
        id="projects-heading"
        className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider"
      >
        Completed Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
