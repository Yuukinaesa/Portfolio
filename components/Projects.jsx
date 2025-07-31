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
} from "@/public/assets/";

const ProjectCard = ({ imageSrc, title, description, link, tags }) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
      <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
        <div className="md:flex md:items-center">
          <Image
            src={imageSrc}
            alt={title}
            className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
          />
          <a
            href={link}
            target="_blank"
            className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover-text-sky"
          >
            {title} <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
          </a>
        </div>
        <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">{description}</p>
        <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 ${
                index === tags.length - 1 ? 'last:mr-0 mr-0' : ''
              }`}
            >
              {tag}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      imageSrc: saham,
      title: "Saham IDX (under development)",
      description: "Stock analysis and portfolio management tool.",
      link: "https://sahamidx.streamlit.app/",
      tags: ["Screener", "Saham", "Calculator"],
    },
    {
      imageSrc: portsyncro,
      title: "PortSyncro",
      description: "Easy portfolio synchronization for cryptocurrencies and stocks. Track Indonesian stocks, crypto investments, calculate average prices, and manage your portfolio with beautiful UI.",
      link: "https://portsyncro.arfan.biz.id/",
      tags: ["Portfolio-Management", ,"Real-Time", "Stocks", "Crypto"],
    },
    {
      imageSrc: analisisjakarta,
      title: "Education Analysis Jakarta",
      description:
        "Analyzing Jakarta's Education with Google Looker Studio. Discover data-driven solutions and gain actionable insights to enhance education in Jakarta.",
      link: "https://lookerstudio.google.com/u/0/reporting/539d7ae5-8296-441f-a9fa-3ea7184f4f9c/page/jMLgD",
      tags: ["Analytics", "Visualization"],
    },
    {
      imageSrc: webanalisisjakarta,
      title: "Schools in DKI Jakarta",
      description:
        "This web application visualizes schools in Jakarta in more detail and displays school recommendations based on the average score of each school's national exam subjects.",
      link: "https://pendidikanjakarta.streamlit.app/",
      tags: ["Recommendation", "Streamlit", "Pydeck"],
    },
    {
      imageSrc: landmarkstreamlit,
      title: "Landmark Classification - Streamlit",
      description:
        "This web application was developed to promote Indonesian tourism, allowing tourists to discover the various landmarks in Indonesia.",
      link: "https://landmarkindonesia.streamlit.app/",
      tags: ["Probabilities", "Folium", "Geolocation"],
    },
    {
      imageSrc: rocus,
      title: "Root and Custom ROM (Rocus) - Android Application",
      description:
        "This application was built for users with low to medium-specification smartphones, aiming to enhance performance without buying a new smartphone and with free customization to enhance the visual.",
      link: "https://github.com/Yuukinaesa/RootandCustomRom-Rocus-AndroidApplication",
      tags: ["Java", "Video", "Quiz"],
    },
    {
      imageSrc: landmarkjupyter,
      title: "Landmark Classification - JupyterNotebook",
      description:
        "This application was developed to promote Indonesian tourism, and you can also add a new landmark by training the image.",
      link: "https://github.com/Yuukinaesa/LandmarkClassification-JupyterNotebook",
      tags: ["Custom Architecture Model", "Convolutional Neural Network"],
    },
    {
      imageSrc: cybersec,
      title: "Cyber Security Publications",
      description: "Exploring Digital Security: Forensics, Cryptography, Malware, and Beyond",
      link: "https://medium.com/@Kelashkelompok2magangmbkm",
      tags: ["Wireshark", "Cisco Packet Tracer", "Linux"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h3 className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider">
        Completed Projects
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
