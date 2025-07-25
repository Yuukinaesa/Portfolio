import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const Intro = ({ onExperienceClick, onProjectsClick }) => {
  return (
    <section className="lg:min-h-screen text-center">
      {/* Header start */}
      <nav className="py-5 mb-2 lg:mb-12 flex items-center justify-between p-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm md:text-base uppercase font-title font-semibold tracking-wider text-primary hover:text-sky"
          href=""
        >
          Yuukinaesa
        </motion.a>
        <ul className="">
          <li>
            <a
              href="https://drive.google.com/file/d/19y6p1kiMjtgmp2pVgic2VuMKLxdAgj7P/view?usp=sharing"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-transparent text-primary font-medium text-sm px-4 py-2.5 rounded-md hover:bg-sky hover:border-sky hover:text-white"
              >
                Resume
              </motion.button>
            </a>
          </li>
        </ul>
      </nav>
      {/* Header stop */}

      {/* About content */}
      <div className="py-24 p-4">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-5xl py-2 font-title font-bold text-primary"
        >
          Arfan Hidayat Priyantono
        </motion.h2>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-2xl py-2 font-title font-medium text-slate-300"
        >

        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-semidark leading-8 py-5 text-sm md:text-base tracking-wider"
        >
          A personal portfolio of my{' '}
          <span onClick={onExperienceClick} className="text-primary font-medium cursor-pointer">
              Experience
          </span>{" "}
          and{' '}
          <span onClick={onProjectsClick} className="text-primary font-medium cursor-pointer">
             Projects
          </span>.
        </motion.p>
        {/* Social Media */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-semidark">
            {/* Github */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              href="https://www.github.com/yuukinaesa/"
              title="GitHub"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiGithub />
              </span>
            </motion.a>
            {/* Linkedin */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="https://www.linkedin.com/in/yuukinaesa/"
              title="Linkedin"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiLinkedin />
              </span>
            </motion.a>
            {/* Facebook */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              href="https://www.facebook.com/yuukinaesa/"
              title="Facebook"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiFacebook />
              </span>
            </motion.a>
            {/* Instagram */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://www.instagram.com/yuukinaesa/"
              title="Instagram"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiInstagram />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
