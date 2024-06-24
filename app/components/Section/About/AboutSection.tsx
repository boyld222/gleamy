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
        <div className="pl-[67px]">
          <div className="flex flex-col gap-[34px]">
            <span className="uppercase text-[40px] leading-[1.9] tracking-[0.02em]">
              {title}
            </span>
            <span className="uppercase text-[32px] max-w-[55ch] leading-[1.9] tracking-[0.02em]">
              Gleamy is a leading design & software development agency based in
              berlin. We help startups & Fortune 500 companies delight humans on
              the other side of the screen.
              <span className="inline-block translate-x-3 translate-y-[-0.6rem]">
                <SkewedRectangle />
              </span>
            </span>
          </div>
          <div className="mt-[13px]">
            <IconButton text={"Contact Us"} />
          </div>
        </div>
      </Reveal>
    </ContentLayout>
  );
}
