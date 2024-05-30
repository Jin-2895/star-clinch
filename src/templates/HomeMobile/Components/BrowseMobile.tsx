import { FilterButton } from "@/templates/SingleArtist/Components/FilterButton";
import { Section10Image, Section3Heading } from "@/types/types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";
type IBrowsePerformer = {
  sectionTenHeadings: Section3Heading[] | null;
  sectionTenImages: Section10Image[] | null;
};

const BrowseMobile = ({
  sectionTenHeadings,
  sectionTenImages,
}: IBrowsePerformer) => {
  console.log(sectionTenHeadings, sectionTenImages);

  return (
    <div className="text-white flex relative flex-col gap-10 mt-5 w-full">
      <div className="absolute top-0 right-0">
        <svg
          width="237"
          height="254"
          viewBox="0 0 237 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_61_2786)">
            <path
              d="M0.979004 112.521C0.979004 34.6059 64.1416 -28.5566 142.056 -28.5566C219.971 -28.5566 283.134 34.6059 283.134 112.521C283.134 190.436 219.971 253.598 142.056 253.598H0.979004V112.521Z"
              fill="url(#paint0_linear_61_2786)"
              fillOpacity="0.25"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_61_2786"
              x="-131.488"
              y="-161.024"
              width="547.089"
              height="547.089"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="66.2335" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_61_2786"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_61_2786"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_61_2786"
              x1="234.136"
              y1="-6.93764"
              x2="44.8863"
              y2="316.391"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF81E3" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-9  mt-9">
        <p className="text-[32px] mb-10 leading-[38.73px]">
          {sectionTenHeadings && sectionTenHeadings[0]?.value}
        </p>
        <p className="text-[14px] leading-[16.94px] opacity-50">
          {sectionTenHeadings && sectionTenHeadings[1]?.value}
        </p>
      </div>
      <div className="flex overflow-x-scroll gap-5  items-center">
        <FilterButton num={1} filterName="Live Band" />
        <FilterButton num={2} filterName="Singer" />
        <FilterButton num={3} filterName="Celebrity" />
        <FilterButton num={4} filterName="Dancer" />
        <FilterButton num={5} filterName="Comedian" />
        <FilterButton num={5} filterName="Anchor" />
        <FilterButton num={5} filterName="Dj" />
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="BrowseSwiper flex justify-center"
      >
        {sectionTenImages &&
          sectionTenImages.map((item) => {
            return (
              //   <SwiperSlide className='w-[277px] relative h-[356px] backdrop-blur-sm bg-gradient-to-b from-white/30 via-[#CBD3F133] to-white/30'>
              // <div  >
              //   <img className=' w-full h-full' src={item?.image}alt="" />
              //   <p className='absolute bottom-0 text-center w-full'>{item?.name}</p>
              // </div>
              //   </SwiperSlide>\
              <SwiperSlide
                key={item?.name}
                className="w-[277px] h-[356px] p-[10px] relative backdrop-blur-sm bg-gradient-to-b from-white/50 via-[#CBD3F133] to-white/50"
              >
                <div className="relative w-full h-full">
                  <Image
                    width={800}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    src={item?.image}
                    alt={item?.name}
                  />
                  <p className="absolute  bottom-4 z-30 text-center w-full text-white">
                    {item?.name}
                  </p>
                  <div className="absolute z-20 h-full rounded-[30px] w-full bottom-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default BrowseMobile;
