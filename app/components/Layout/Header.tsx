"use client";
import { Fragment, useState } from "react";
import AnimatedText from "../AnimatedText";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

const variant = {
  open: {
    width: 400,
    height: 600,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 0,
    height: 0,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const routes = [
  {
    title: "services",
    href: "#services",
  },
  {
    title: "about",
    href: "#about",
  },
  {
    title: "portfolio",
    href: "#portfolio",
  },
];
export default function Header() {
  const social = ["FB", "IN", "DR", "BE"];
  const [isActive, setIsActive] = useState(false);
  const handleClickOutside = () => {
    setIsActive(false);
  };
  const ref = useOutsideClick(handleClickOutside); //As its name, click outside trigger ref
  const handleClickMenu = () => setIsActive((oldStatus) => !oldStatus);
  return (
    <header className="fixed top-0 w-full h-[120px] bg-transparent flex  items-center justify-center lg:justify-between lg:px-[101.12px] z-[9998]">
      <div className="text-white  gap-4 text-sm hidden lg:flex">
        {social.map((item, i) => (
          <Fragment key={item}>
            <AnimatedText>
              <span className="cursor-pointer">{item}</span>
            </AnimatedText>{" "}
            {i !== social.length - 1 && (
              <span className="text-[#FF7E21]">●</span>
            )}
          </Fragment>
        ))}
      </div>
      <img
        src="/logo-header.png"
        alt="Header Logo"
        className="w-[150px] cursor-pointer lg:w-[205.75px]"
      />
      <div className="hidden justify-between items-center gap-10 lg:flex">
        <AnimatedText>
          <img
            className="cursor-pointer"
            src="/images/search.png"
            alt="Search Icon"
          />
        </AnimatedText>
        <img src="/images/line.png" alt="Line" />
        <div onClick={handleClickMenu}>
          <AnimatedText>
            <img
              className="cursor-pointer"
              src="/images/menu.png"
              alt="Menu Icon"
            />
          </AnimatedText>
        </div>
      </div>
      <div className="block lg:hidden" onClick={handleClickMenu}>
        <img
          className="absolute right-[5.27%] cursor-pointer w-[28px]"
          src="/images/hamburg.png"
          alt="Menu Icon"
        />
      </div>
      <div className="absolute top-0 right-0" ref={ref}>
        <motion.div
          variants={variant}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className="bg-black h-[600px] w-[450px] rounded-[25px] relative"
        >
          {/* Make sure it still animated out when it unmout */}
          <AnimatePresence>
            {isActive && (
              <Menu routes={routes} handleClickMenu={handleClickMenu} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
