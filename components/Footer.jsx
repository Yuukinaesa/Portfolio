import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-5" role="contentinfo">
      <p className="block pt-1 text-xs md:text-sm text-slate-500">
        &copy; {currentYear}{" "}
        <a
          href="https://www.linkedin.com/in/yuukinaesa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium focus:outline-none focus:ring-2 focus:ring-sky rounded"
          aria-label="Visit Arfan Hidayat Priyantono's LinkedIn profile (opens in new tab)"
        >
          Arfan Hidayat Priyantono
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
