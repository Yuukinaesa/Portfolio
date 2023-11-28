import Image from "next/image";
import {
  nextjs,
  reactjs,
  laravel,
  codeigniter,
  vuejs,
  nuxtjs,
  analisisjakarta,
  webanalisisjakarta,
  landmarkjupyter,
  landmarkstreamlit,
  rocus,
  cybersec,
} from "@/public/assets/";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
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
      {/* Projects content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
        {/* analisisjakarta */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={analisisjakarta}
                alt="analisisjakarta"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://lookerstudio.google.com/u/0/reporting/539d7ae5-8296-441f-a9fa-3ea7184f4f9c/page/jMLgD" 
                target="_blank"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                Education Analysis Jakarta{" "}
                <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
            Analyzing Jakarta's Education with Google Looker Studio. Discover data-driven solutions and gain actionable insights to enhance education in Jakarta.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Analytics
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Visualization
              </span>
            </ul>
          </div>
        </div>
        {/* Schools in DKI Jakarta */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full after:flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={webanalisisjakarta}
                alt="webanalisisjakarta"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://pendidikanjakarta.streamlit.app/" 
                target="_blank"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                Schools in DKI Jakarta{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
            This web application visualizes schools in Jakarta in more detail and displays school recommendations based on the average score of each school's national exam subjects.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Recommendation
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Streamlit
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Pydeck
              </span>
            </ul>
          </div>
        </div>
        {/* LandmarkClassification-Streamlit */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={landmarkstreamlit}
                alt="landmarkstreamlit"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://landmarkindonesia.streamlit.app/" 
                target="_blank"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                Landmark Classification - Streamlit{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
            This web application was developed to promote Indonesian tourism, allowing tourists to discover the various landmarks in Indonesia.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Probabilities
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Folium
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                Geolocation
              </span>
            </ul>
          </div>
        </div>
        {/* android */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={rocus}
                alt="rocus"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://github.com/Yuukinaesa/RootandCustomRom-Rocus-AndroidApplication" 
                target="_blank"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                Root and Custom ROM (Rocus) - Android Application{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
            This application was built for users with low to medium-specification smartphones, aiming to enhance performance without buying a new smartphone and with free customization to enhance the visual.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
              Java
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
              Quiz
              </span>
            </ul>
          </div>
        </div>

        {/* More Projects */}
        {viewMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
        {/* landmarkjupyter */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={landmarkjupyter}
                alt="landmarkjupyter"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://github.com/Yuukinaesa/LandmarkClassification-JupyterNotebook"target="_blank"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                Landmark Classification - JupyterNotebook{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
            This application was developed to promote Indonesian tourism, and you can also add a new landmark by training the image.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
              Custom Architecture Model
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
              Convolutional Neural Network
              </span>
            </ul>
          </div>
        </div>
         {/* CyberSec */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={cybersec}
                    alt="cybersec"
                    className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="https://medium.com/@Kelashkelompok2magangmbkm"target="_blank"
                    className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
                  >
                    Cyber Security Publications{" "}
                    <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
                  </a>
                </div>
                <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
                Exploring Digital Security: Forensics, Cryptography, Malware, and Beyond
                </p>
                <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                    Wireshark
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                    Cisco Packet Tracer
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 hover:bg-slate-700 last:mr-0 mr-0">
                    Linux
                  </span>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Button More Projects */}
      <div className="mt-6 flex items-center justify-center">
        {viewMore ? (
          <button
            onClick={() => setViewMore(false)}
            className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky"
          >
            Less Projects
          </button>
        ) : (
          <button
            onClick={() => setViewMore(true)}
            className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky "
          >
            More Projects
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
