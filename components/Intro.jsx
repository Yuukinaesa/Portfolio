import { motion } from "motion/react";
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const SOCIAL_LINKS = [
  {
    href: "https://www.github.com/yuukinaesa/",
    title: "GitHub",
    icon: FiGithub,
    delay: 0.7,
    ariaLabel: "Visit Arfan's GitHub profile (opens in new tab)",
  },
  {
    href: "https://www.linkedin.com/in/yuukinaesa/",
    title: "LinkedIn",
    icon: FiLinkedin,
    delay: 0.8,
    ariaLabel: "Visit Arfan's LinkedIn profile (opens in new tab)",
  },
  {
    href: "https://www.facebook.com/yuukinaesa/",
    title: "Facebook",
    icon: FiFacebook,
    delay: 0.9,
    ariaLabel: "Visit Arfan's Facebook profile (opens in new tab)",
  },
  {
    href: "https://www.instagram.com/yuukinaesa/",
    title: "Instagram",
    icon: FiInstagram,
    delay: 1,
    ariaLabel: "Visit Arfan's Instagram profile (opens in new tab)",
  },
];

const Intro = ({ onExperienceClick, onProjectsClick }) => {
  return (
    <section className="lg:min-h-screen text-center" aria-label="Introduction">
      {/* Header start */}
      <nav
        className="py-5 mb-2 lg:mb-12 flex items-center justify-between p-4"
        aria-label="Main navigation"
      >
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm md:text-base uppercase font-title font-semibold tracking-wider text-primary hover:text-sky"
          href="/"
          aria-label="Yuukinaesa — Home"
        >
          Yuukinaesa
        </motion.a>
        <ul className="list-none m-0 p-0">
          <li>
            {/* Fixed: Replaced invalid <a><button> nesting with a single <a> element.
                Per HTML spec, interactive content cannot nest inside interactive content.
                This also fixes double-tab-stop keyboard navigation issues (WCAG 2.1 SC 2.1.1) */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="https://drive.google.com/file/d/17H2dDozpDSjqQbGKWo8s-1VxH7Ou0EP0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-primary font-medium text-sm px-4 py-2.5 rounded-md hover:bg-sky hover:border-sky hover:text-white focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-slate-900 inline-block transition-colors duration-200"
              aria-label="View Arfan's Resume (opens in new tab)"
            >
              Resume
            </motion.a>
          </li>
        </ul>
      </nav>
      {/* Header stop */}

      {/* About content */}
      <div className="py-24 p-4">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-5xl py-2 font-title font-bold text-primary"
        >
          Arfan Hidayat Priyantono
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-2xl py-2 font-title font-medium text-slate-300"
        >
          Cyber Security Engineer — Building Automation Tools for Teams
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-semidark leading-8 py-5 text-sm md:text-base tracking-wider"
        >
          A personal portfolio of my{" "}
          <button
            onClick={onExperienceClick}
            className="text-primary font-medium cursor-pointer bg-transparent border-none p-0 inline underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-sky rounded"
            type="button"
            aria-label="Scroll to Experience section"
          >
            Experience
          </button>{" "}
          and{" "}
          <button
            onClick={onProjectsClick}
            className="text-primary font-medium cursor-pointer bg-transparent border-none p-0 inline underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-sky rounded"
            type="button"
            aria-label="Scroll to Projects section"
          >
            Projects
          </button>
          .
        </motion.p>

        {/* Social Media */}
        <nav className="flex justify-center" aria-label="Social media links">
          <div className="flex items-center gap-2 text-semidark">
            {SOCIAL_LINKS.map(
              ({ href, title, icon: Icon, delay, ariaLabel }) => (
                <motion.a
                  key={title}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay }}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <Icon aria-hidden="true" />
                  </span>
                </motion.a>
              )
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Intro;
