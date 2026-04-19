import React from "react";
import { motion } from "motion/react";

const EXPERIENCES = [
  {
    id: "sdd",
    name: "PT. Swadharma Duta Data",
    url: "https://www.sdd.co.id/",
    position: "Vulnerability Management, OS Hardening & Patch Management — Full-Time",
    date: "Oct 2025 — Present",
    dateStart: "2025-10",
    dateEnd: "",
  },
  {
    id: "infodata",
    name: "PT Info Solusindo Data Utama (Info Data)",
    url: "https://idsolusi.com/en/",
    position: "Mobile Security Engineer — Full-Time",
    date: "Jan 2024 — Aug 2025",
    dateStart: "2024-01",
    dateEnd: "2025-08",
  },
  {
    id: "goto",
    name: "PT. GoTo Gojek Tokopedia Tbk",
    url: "https://www.gotocompany.com/",
    position: "Data Analyst — Internship",
    date: "Jul 2023 — Dec 2023",
    dateStart: "2023-07",
    dateEnd: "2023-12",
  },
  {
    id: "karoten",
    name: "PT. Karoten Asia Pasifik",
    url: "https://www.carrotacademy.com/",
    position: "Data Entry — Internship",
    date: "Dec 2022 — Jan 2023",
    dateStart: "2022-12",
    dateEnd: "2023-01",
  },
  {
    id: "kominfo",
    name: "Kementerian Komunikasi dan Informatika RI",
    url: "https://www.kominfo.go.id/",
    position: "Cyber Security Analyst — Internship",
    date: "Aug 2022 — Dec 2022",
    dateStart: "2022-08",
    dateEnd: "2022-12",
  },
  {
    id: "telkom",
    name: "PT. Telekomunikasi Indonesia Tbk",
    url: "https://www.telkom.co.id/",
    position: "Customer Service Representative — Internship",
    date: "Jan 2017 — Feb 2017",
    dateStart: "2017-01",
    dateEnd: "2017-02",
  },
];

const ExperienceItem = ({ id, name, url, position, date, dateStart, dateEnd }) => {
  return (
    <article
      id={`experience-${id}`}
      className="flex justify-between lg:px-10 mb-6"
    >
      <div className="flex flex-col">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium text-primary tracking-wide hover:text-sky focus:outline-none focus:ring-2 focus:ring-sky rounded"
          aria-label={`Visit ${name} website (opens in new tab)`}
        >
          {name}
        </a>
        <span className="text-base text-semidark">{position}</span>
      </div>
      <div className="flex flex-col text-right mt-1 flex-shrink-0 ml-4">
        {/* Machine-readable dates for SEO and structured data (Schema.org compliance) */}
        <time
          className="text-sm text-semidark whitespace-nowrap"
          dateTime={dateEnd ? `${dateStart}/${dateEnd}` : dateStart}
        >
          {date}
        </time>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h2
        id="experience-heading"
        className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider"
      >
        Experience
      </h2>
      <div className="grid grid-cols-1 lg:ml-96">
        {EXPERIENCES.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
