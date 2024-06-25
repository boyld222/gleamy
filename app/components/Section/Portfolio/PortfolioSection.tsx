"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ContentLayout from "../../Layout/ContentLayout";
import { Autoplay } from "swiper/modules";
import "./style.css"; //Need manual css because third-party
import clsx from "clsx";
import ContentfulImage from "@/lib/contentful-image";

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

  //Need to use side effect to add class to parent element
  useEffect(() => {
    const specialChild = document.querySelector(".portfolio-wrapper");
    if (specialChild && specialChild.parentElement) {
      specialChild.parentElement.classList.add("portfolio-wrapper-parent");
    }
  }, []);

  return (
    <ContentLayout title="Portfolio" logoText="p" hasFooter hideLogoTextMobile>
      <div className="w-full portfolio-wrapper">
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
          {newContentArray.reverse().map((slide, index) => (
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
                  <p className="w-full whitespace-pre-line text-[16px] leading-[1.9] tracking-[0.02em]  capitalize text-center">
                    <span className="text-[#FF7E21]">●</span> {slide.role}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContentLayout>
  );
}
