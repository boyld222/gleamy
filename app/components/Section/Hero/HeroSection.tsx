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
        <div className="px-[4.76%] pt-[25.55%]  lg:pl-[91.42px] lg:pt-[135.6px] h-full">
          <p className="capitalize text-[48px] flex flex-wrap items-center lg:text-[90px] lg:max-w-[20ch]">
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
