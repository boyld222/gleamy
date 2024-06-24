import ContentLayout from "../../Layout/ContentLayout";
import Reveal from "../../Reveal";
import clsx from "clsx";
import SkewedRectangle from "../../SkewedRectangle";
import IconButton from "../../IconButton";

interface Props {
  section: {
    title: string;
    description: string;
    cardTitle: string;
  }[];
}

export default function ServicesSection({ section }: Props) {
  console.log(section);
  return (
    <ContentLayout title="Services" logoText="s">
      <>hihi</>
      {/* <Reveal>
        <div>
          <div className="flex flex-col gap-[65px]">
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
      </Reveal> */}
    </ContentLayout>
  );
}
