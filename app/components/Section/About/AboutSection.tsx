import ContentLayout from "../../Layout/ContentLayout";
import Reveal from "../../Reveal";
import clsx from "clsx";
import SkewedRectangle from "../../SkewedRectangle";
import IconButton from "../../IconButton";

interface Props {
  section: {
    title: string;
    button: string;
    content: string;
  };
}

export default function AboutSection({ section }: Props) {
  const { title, button, content } = section;
  return (
    <ContentLayout title="About us" logoText="g">
      <Reveal>
        <div className="pl-[3.4375%] lg:pl-[67px]">
          <div className="flex flex-col gap-[34px]">
            <span className="uppercase text-[32px] leading-normal tracking-[0.02em] lg:leading-[1.9] lg:text-[40px]">
              {title}
            </span>
            <span className="uppercase text-[24px] max-w-[55ch] leading-[1.9] tracking-[0.02em] lg:text-[32px]">
              {content}
              <span className="inline-block translate-x-3 translate-y-[-0.6rem]">
                <SkewedRectangle />
              </span>
            </span>
          </div>
          <div className="mt-[13px]">
            <IconButton text={button} />
          </div>
        </div>
      </Reveal>
    </ContentLayout>
  );
}
