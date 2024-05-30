"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { Category } from "@/types/types";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import CelebritiesBanner from "@/public/assets/svgs/celebrities-banner";


type ICategoryCarouselProps = {
  categories: Category[];
};

const CategoryCarousel = ({ categories }: ICategoryCarouselProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={130}
        className="celebritiesSwiper"
      >
        {categories?.map((categ) => (
          <SwiperSlide key={categ.id} className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width={800}
                height={800}
                className="hover:scale-105 transition-transform duration-300 rounded-xl object-cover"
                src={categ.category_banner_image}
                alt={categ.name}
              />

              <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full py-[12rem]" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-[24px]  font-[300] mb-6 text-start">
                  {categ.name}
                </h2>
                <Link
                  href={categ.slug}
                  className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 transition-all duration-400 text-start"
                >
                  View
                  <FaArrowRightLong color="white" />
                </Link>
              </div>
            </div>
            <CelebritiesBanner id={`${categ.id}`} className="absolute" text="80+ bookings" />
          </SwiperSlide>
        ))}
      </Swiper>
      <svg
      className="absolute bottom-0 left-[27%] cursor-pointer"
        width="795"
        height="247"
        viewBox="0 0 795 247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M0.0745449 5C0.0745449 7.72025 2.27975 9.92546 5 9.92546C7.72025 9.92546 9.92546 7.72025 9.92546 5C9.92546 2.27975 7.72025 0.0745449 5 0.0745449C2.27975 0.0745449 0.0745449 2.27975 0.0745449 5ZM784.67 5C784.67 7.72025 786.875 9.92546 789.596 9.92546C792.316 9.92546 794.521 7.72025 794.521 5C794.521 2.27975 792.316 0.0745449 789.596 0.0745449C786.875 0.0745449 784.67 2.27975 784.67 5ZM4.16847 5.40181C38.2539 75.9392 161.998 217.765 384.545 221.695L384.578 219.848C162.862 215.933 39.6771 74.6393 5.83153 4.59819L4.16847 5.40181ZM384.545 221.695C607.109 225.626 747.825 79.218 790.396 5.46166L788.796 4.53834C746.454 77.8991 606.279 223.764 384.578 219.848L384.545 221.695Z"
          fill="url(#paint0_linear_3950_1248)"
        />
        <circle cx="397.233" cy="219.631" r="27.2332" fill="white" />
        <defs>
          <linearGradient
            id="paint0_linear_3950_1248"
            x1="396.77"
            y1="221.714"
            x2="396.77"
            y2="84.5098"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <button
        type="button"
        ref={(node) => {
          setPrevEl(node);
        }}
        className="text-white z-30 absolute bottom-2 left-[46.8%] cursor-pointer w-10 h-10"
      >
        <svg
          width="14"
          height="25"
          viewBox="0 0 14 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6211 1.0918L2.24023 12.6709L12.6211 24.2498"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button
        type="button"
        ref={(node) => {
          setNextEl(node);
        }}
        className="text-white z-30 absolute bottom-2 right-[49.6%] cursor-pointer w-10 h-10"
      >
        <svg
          width="13"
          height="26"
          viewBox="0 0 13 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.792969 1.33496L11.1738 12.9141L0.792969 24.493"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </button>
    </>
  );
};

export { CategoryCarousel };
