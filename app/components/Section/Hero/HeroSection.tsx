import Reveal from "../../Reveal";
import StrapLine from "./StrapLine";
import clsx from "clsx";

interface Props {
  title: string;
}

export default function HeroSection({ title }: Props) {
  const splitTitle = title.split(".");
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white pl-[200px] pt-[120px]">
      <StrapLine bgColor="white" />
      <StrapLine bgColor="black" />
      <Reveal isInitial>
        <div className="pl-[91.42px] pt-[135.6px]">
          <p className=" capitalize text-[90px] max-w-[20ch]">
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
