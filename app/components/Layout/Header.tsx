import { Fragment } from "react";
import AnimatedText from "../AnimatedText";

export default function Header() {
  const social = ["FB", "IN", "DR", "BE"];
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
        <img
          className="cursor-pointer"
          src="/images/search.png"
          alt="Search Icon"
        />
        <img src="/images/line.png" alt="Line" />
        <AnimatedText>
          <img
            className="cursor-pointer"
            src="/images/menu.png"
            alt="Menu Icon"
          />
        </AnimatedText>
      </div>
      <div className="lg:hidden">
        <AnimatedText>
          <img
            className="absolute right-[5.27%] cursor-pointer w-[28px]"
            src="/images/hamburg.png"
            alt="Menu Icon"
          />
        </AnimatedText>
      </div>
    </header>
  );
}
