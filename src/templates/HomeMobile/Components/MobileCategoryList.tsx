
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

const MobileCategoryList = ({sectionNineHeadings, sectionNineImages}: ICategoryProps) => {

  
  SwiperCore.use([Mousewheel])

  console.log(sectionNineHeadings, sectionNineImages)
  const heading = sectionNineHeadings&&sectionNineHeadings[0]?.value.split(" ")
  console.log(heading)

  return (
 <div className=" relative flex flex-row ">
      <div className="shape ml-5 bg-[#080810] max-w-[282.5px] z-20 absolute pt-8 ">
          <div className="w-full ">
            <h1 className={` text-white text-[32px] font-normal leading-[38px]`}>
              <span className="opacity-50" > {heading?.[0]} {heading?.[1]} </span> {heading?.[2]} {heading?.[3]}
              
            </h1>
          </div>
          <div className="flex items-center  gap-2 bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent">
            <Link
              href="/celebrities"
              className={`${ "sub_heading"} text-[16px] `}
            >
              { "Explore all categories"}
            </Link>
              <Image width={400} height={400} className="mt-1" src="/assets/categoryarr.png" alt="" />
          
        </div>
    </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          mousewheel={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          direction='vertical'
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="categoryListSwiperMobile"
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
              <p className="absolute bottom-0 left-6 font-normal text-white text-[32px] capitalize">{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
  )
}

export default MobileCategoryList