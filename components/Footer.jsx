import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="text-center py-5">
      {/* Footer content */}
      <span className="block pt-1 text-xs md:text-sm text-slate-500">

        <a
          href="https://www.linkedin.com/in/yuukinaesa/"
          target="_blank"
          className="text-semidark hover:text-sky hover:underline hover:underline-offset-4 font-medium"
        >
          Arfan Hidayat Priyantono
        </a>
      </span>
    </div>
  );
};

export default Footer;
