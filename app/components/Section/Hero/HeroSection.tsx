import Reveal from "../../Reveal";
import StrapLine from "./StrapLine";
import clsx from "clsx";

interface Props {
  title: string;
}

export default function HeroSection({ title }: Props) {
  const splitTitle = title.split(".");
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white pt-[120px] lg:pl-[200px] ">
      <StrapLine bgColor="white" />
      <StrapLine bgColor="black" />
      <Reveal className="h-full" classNameItem="h-full" isInitial>
        <div className="relative px-[4.76%] pt-[25.55%]  lg:pl-[91.42px] lg:pt-[4%] h-full">
          <div
            className={clsx(
              `absolute left-0 top-0 transparent-border-text text-[454px] text-[#363636] leading-none z-0`
            )}
          >
            g
          </div>
          <p className="capitalize text-[48px] z-10 relative lg:leading-[1.9] flex flex-wrap items-center md:text-[60px] lg:text-[72px] lg:max-w-[20ch] 2xl:text-[90px] ">
            {splitTitle.map((word, i) => (
              <span
                className={clsx({
                  "text-[#7E7E7E]": ["design", "product"].includes(word),
                })}
                key={i}
              >
                {word}.
              </span>
            ))}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
