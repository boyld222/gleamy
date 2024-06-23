"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
interface Props {
  bgColor: string;
}

export default function StrapLine({ bgColor }: Props) {
  const arr = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 3 }}
      className={clsx(
        `absolute w-[200%] h-[104px] flex items-center justify-center origin-top-left-4/5-1 right-[-50%] gap-20`,
        bgColor === "white"
          ? "bottom-[-10%] bg-white rotate-[44.71deg]"
          : "bottom-[40%] bg-[#212121] rotate-[-12.95deg]"
      )}
    >
      {arr.map((item) => (
        <div
          key={item}
          className={clsx(
            `flex gap-20 items-center text-[32px] whitespace-nowrap animate-marquee`,
            bgColor === "white" ? "text-black" : "text-white"
          )}
        >
          <span>CREATIVE DESIGN</span>
          <span className="text-[#FF7E21]">●</span>
          <span>UI/UX</span>
          <span className="text-[#FF7E21]">●</span>
          <span>MARKETING</span>
          <span className="text-[#FF7E21]">●</span>
          <span>MOTION</span>
          <span className="text-[#FF7E21]">●</span>
          <span>ANIMATION</span>
          <span className="text-[#FF7E21]">●</span>
          <span>BRANDING</span>
          <span className="text-[#FF7E21]">●</span>
        </div>
      ))}
    </motion.div>
  );
}
