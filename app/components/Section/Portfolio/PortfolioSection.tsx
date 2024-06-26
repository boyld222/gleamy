// Import Swiper styles
import "swiper/css";
import ContentLayout from "../../Layout/ContentLayout";
import Carousel from "./Carousel";
import "./style.css"; //Need manual css because third-party

interface Props {
  section: {
    title: string;
    role: string;
    image: {
      url: string;
      description: string;
    };
  }[];
}

export default function PortfolioSection({ section }: Props) {
  const newContentArray = Array(3).fill(section).flat(); // just triple the section for the carousel

  return (
    <ContentLayout
      id="portfolio"
      title="Portfolio"
      logoText="p"
      hasFooter
      hideLogoTextMobile
    >
      <div className="w-full portfolio-wrapper">
        <Carousel data={newContentArray} />
      </div>
    </ContentLayout>
  );
}
