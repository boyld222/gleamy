"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

export default function Loader() {
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false); // We need to make a state to setup a step-by-step animation

  const handleLogoAnimationComplete = () => {
    setLogoAnimationComplete(true);
  };

  return (
    <>
      <motion.div
        className="preloader"
        initial={{ y: 0 }}
        animate={logoAnimationComplete ? { y: "-100%" } : {}} // To pull up the preloader container to the top, run after the logo animation was completed
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="logo-container"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.7, ease: "easeInOut" }}
          onAnimationComplete={handleLogoAnimationComplete} // when logo animation completed, make sure the whole preloader pull up
        >
          <img src="/logo.svg" alt="Logo" className="logo" />
        </motion.div>
      </motion.div>
    </>
  );
}
