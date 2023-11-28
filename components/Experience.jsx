import React from "react";
import { motion } from "framer-motion";

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
        {/* GoTo Impact Foundation */}
        <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="https://www.goto-impact.org/" target="_blank"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              GoTo Impact Foundation
            </a>
            <span className="text-base text-semidark">Data Analyst</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Jul 2023 - Dec 2023</span>
          </div>
        </div>
        {/* Carrot Academy */}
        <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="https://www.carrotacademy.com/"
              target="_blank"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Carrot Academy
            </a>
            <span className="text-base text-semidark">Data Entry</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Dec 2022 - Jan 2023</span>
          </div>
        </div>
        {/* Ministry of Communication and Informatics */}
        <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="https://www.kominfo.go.id/"
              target="_blank"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Ministry of Communication and Informatics
            </a>
            <span className="text-base text-semidark">Cyber Security Analyst</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Aug 2022 - Dec 2022</span>
          </div>
        </div>
        {/* Telkom Indonesia */}
         <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="https://www.telkom.co.id/
              "target="_blank"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Telkom Indonesia
            </a>
            <span className="text-base text-semidark">Customer Service Representative</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Jan 2017 - Feb 2017</span>
          </div>
        </div>
        {/* Xiaomi Technology */}
        <div className="flex justify-between lg:px-10">
          <div className="flex flex-col">
            <a
              href="http://en.miui.com/forum.php"
              target="_blank"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Xiaomi Technology
            </a>
            <span className="text-base text-semidark">MIUI Beta Team</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Jan 2016 - Dec 2016</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
