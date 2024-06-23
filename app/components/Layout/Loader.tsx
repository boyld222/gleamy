"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Loader() {
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false); // We need to make a state to setup a step-by-step animation
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const handleLogoAnimationComplete = () => {
    setLogoAnimationComplete(true);
  };
  const handleCompleted = () => {
    setAnimationCompleted(true);
  };
  return (
    <>
      {!animationCompleted ? (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black z-[9999]"
          initial={{ opacity: 1 }}
          animate={logoAnimationComplete ? { opacity: 0 } : {}} // To fade the preloader container to 0, run after the logo animation was completed
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={handleCompleted} // We need to remove entire screen in order to interact with content
        >
          <motion.div
            className="w-fit h-fit"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            onAnimationComplete={handleLogoAnimationComplete} // when logo animation completed, make sure the whole preloader fade
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-full w-full translate-y-[-6rem]"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}
