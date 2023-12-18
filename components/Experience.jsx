import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ name, url, position, date }) => (
  <div className="flex justify-between lg:px-10 mb-6">
    <div className="flex flex-col">
      <a href={url} target="_blank" className="text-base font-medium text-primary tracking-wide hover:text-sky">
        {name}
      </a>
      <span className="text-base text-semidark">{position}</span>
    </div>
    <div className="flex flex-col text-right mt-1">
      <span className="text-sm text-semidark">{date}</span>
    </div>
  </div>
);

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h3 className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider">
        Experience
      </h3>
      <div className="grid grid-cols-1 lg:ml-96">
        <ExperienceItem
          name="GoTo Impact Foundation"
          url="https://www.goto-impact.org/"
          position="Data Analyst"
          date="Jul 2023 - Dec 2023"
        />
        <ExperienceItem
          name="Carrot Academy"
          url="https://www.carrotacademy.com/"
          position="Data Entry"
          date="Dec 2022 - Jan 2023"
        />
        <ExperienceItem
          name="Ministry of Communication and Informatics"
          url="https://www.kominfo.go.id/"
          position="Cyber Security Analyst"
          date="Aug 2022 - Dec 2022"
        />
        <ExperienceItem
          name="Telkom Indonesia"
          url="https://www.telkom.co.id/"
          position="Customer Service Representative"
          date="Jan 2017 - Feb 2017"
        />
        <ExperienceItem
          name="Xiaomi Technology"
          url="http://en.miui.com/forum.php"
          position="MIUI Beta Team"
          date="Jan 2016 - Dec 2016"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
