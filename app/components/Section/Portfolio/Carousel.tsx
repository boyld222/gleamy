"use client";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ContentfulImage from "@/lib/contentful-image";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style.css"; //Need manual css because third-party

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

interface Props {
  data: {
    title: string;
    role: string;
    image: {
      url: string;
      description: string;
    };
  }[];
}

export default function Carousel({ data }: Props) {
  //Need to use side effect to add class to parent element
  useEffect(() => {
    const specialChild = document.querySelector(".portfolio-wrapper");
    if (specialChild && specialChild.parentElement) {
      specialChild.parentElement.classList.add("portfolio-wrapper-parent");
    }
  }, []);

  return (
    <Swiper
      watchSlidesProgress={true}
      spaceBetween={48}
      slidesPerView={1}
      className="mySwiper"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
    >
      <div className="phomi-text">Phomi</div>
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive, isNext }) => (
            <div
              className={clsx(
                `flex flex-col`,
                !isActive && !isNext ? "sm:mt-[100px]" : "mt-0"
              )}
            >
              <ContentfulImage
                alt={slide.image.description}
                className=" aspect-[4/3] w-[100%] sm:w-[400px]"
                height={300}
                width={400}
                src={slide.image.url}
              />
              <span className="text-[32px] mb-2 text-center mt-10">
                {slide.title}
              </span>
              <p
                className={`w-full whitespace-pre-line text-[16px] leading-[1.9] tracking-[0.02em] capitalize text-center ${openSans.className}`}
              >
                <span className="text-[#FF7E21] mr-2">●</span> {slide.role}
              </p>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
