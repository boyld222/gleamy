import ContentLayout from "../../Layout/ContentLayout";
import Reveal from "../../Reveal";
import Card from "./Card";

interface Props {
  section: {
    title: string;
    description: string;
    cardTitle: string;
  }[];
}

export default function ServicesSection({ section }: Props) {
  return (
    <ContentLayout title="Services" logoText="s" hasFooter>
      <div className="flex flex-col gap-12 lg:gap-8 lg:flex-row">
        {section?.map((item, i) => {
          return (
            <Reveal key={i} custom={i}>
              <Card
                index={i}
                cardTitle={item?.cardTitle}
                description={item?.description}
              />
            </Reveal>
          );
        })}
      </div>
    </ContentLayout>
  );
}
