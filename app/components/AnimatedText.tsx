"use client";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";

export default function AnimatedText({ children }: { children: ReactElement }) {
  return (
    <div className="cursor-pointer overflow-hidden">
      <motion.div
        className="h-full w-full relative"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
      >
        <div className=" h-full w-full group">
          <div className="h-full w-full flex items-center  transition-all	ease-in-expo duration-[750ms] group-hover:rotate-x-90 transform-style-preserve-3d">
            <div className="group-hover:-translate-y-full transition-all ease-in-expo duration-[750ms] group-hover:opacity-0">
              {children}
            </div>
            <div className="absolute -rotate-x-90-translate-y-8 transition-all ease-in-expo duration-[750ms] opacity-0 group-hover:opacity-100 origin-bottom-center">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
