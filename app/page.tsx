import { draftMode } from "next/headers";

import {
  getAboutContent,
  getPortfolioContent,
  getServicesContent,
  getTitleHero,
} from "@/lib/api";
import Loader from "./components/Layout/Loader";
import HeroSection from "./components/Section/Hero/HeroSection";
import AboutSection from "./components/Section/About/AboutSection";
import ServicesSection from "./components/Section/Services/Services";
import PortfolioSection from "./components/Section/Portfolio/PortfolioSection";

export default async function Page() {
  //I call all content api in this place because some of my section will be use in client side rendering
  const [heroContent, aboutContent, servicesContent, portfolioContent] =
    await Promise.all([
      getTitleHero(),
      getAboutContent(),
      getServicesContent(),
      getPortfolioContent(),
    ]);

  return (
    <div className="w-full bg-black overflow-hidden">
      <Loader />
      <HeroSection title={heroContent.title} />
      <AboutSection section={aboutContent} />
      <ServicesSection section={servicesContent} />
      <PortfolioSection section={portfolioContent} />
    </div>
  );
}
