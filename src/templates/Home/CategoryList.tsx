import { Section } from "@/layout/Section";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Section3Heading, Section3Image, Section9Image } from "@/types/types";
import SwiperCore from "swiper"
import Link from "next/link";

type ICategoryProps = {
  sectionNineHeadings: Section3Heading[] | null;
  sectionNineImages: Section3Image[] | null;
}

const CategoryList = ({sectionNineHeadings, sectionNineImages}: ICategoryProps) => {

  SwiperCore.use([Mousewheel])

  return (
    <Section xMargin="mx-0">
      <div className="px-4 py-8 mx-auto flex flex-row justify-between">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          mousewheel={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          direction='vertical'
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="categoryListSwiper"
        >
          {sectionNineImages && sectionNineImages.map((item: Section9Image, i: number) => (
            <SwiperSlide key={i}>
              <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
              <Image
                width={600}
                height={600}
                src={item.value}
                alt={item.name}
              />
              </div>
              <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col gap-10 pl-[10rem] pt-[6rem]">
          <div className="max-w-[30rem]">
            <h1 className={`${sectionNineHeadings && sectionNineHeadings[0]?.name} text-white text-[80px] font-normal leading-[88.9px]`}>
              {sectionNineHeadings && sectionNineHeadings[0]?.value}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/celebrities"
              className={`${ "sub_heading"} text-[30px] bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent`}
            >
              { "Explore all categories"}
            </Link>
            <Link href="#">
              <svg
                width="44"
                height="16"
                viewBox="0 0 44 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.7071 8.65535C45.0976 8.26482 45.0976 7.63166 44.7071 7.24114L38.3431 0.877174C37.9526 0.48665 37.3195 0.48665 36.9289 0.877174C36.5384 1.2677 36.5384 1.90086 36.9289 2.29139L42.5858 7.94824L36.9289 13.6051C36.5384 13.9956 36.5384 14.6288 36.9289 15.0193C37.3195 15.4098 37.9526 15.4098 38.3431 15.0193L44.7071 8.65535ZM0 8.94824H44V6.94824H0V8.94824Z"
                  fill="url(#paint0_linear_3576_481)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3576_481"
                    x1="-0.66653"
                    y1="7.9499"
                    x2="51.401"
                    y2="-2.68581"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#727272" stopOpacity="0" />
                    <stop offset="0.742053" stopColor="#FF8DB9" />
                    <stop offset="1" stopColor="#F86E42" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
    </Section>
  );
};

export { CategoryList };
