
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
      <div className="shape ml-5 bg-[#080810] max-w-[285.5px] z-20 absolute pt-8 " style={{transform:" skew(-7deg)"}}>
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
              <div><svg width="33" height="12" viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.72 6.20738C33.004 5.92336 33.004 5.46287 32.72 5.17885L28.0916 0.55047C27.8076 0.266449 27.3471 0.266449 27.0631 0.55047C26.7791 0.83449 26.7791 1.29498 27.0631 1.579L31.1772 5.69312L27.0631 9.80723C26.7791 10.0913 26.7791 10.5517 27.0631 10.8358C27.3471 11.1198 27.8076 11.1198 28.0916 10.8358L32.72 6.20738ZM0.206055 6.4204H32.2057V4.96584H0.206055V6.4204Z" fill="url(#paint0_linear_4599_516)"/>
<defs>
<linearGradient id="paint0_linear_4599_516" x1="-0.278689" y1="5.69477" x2="38.3165" y2="-0.0387918" gradientUnits="userSpaceOnUse">
<stop stopColor="#727272" stopOpacity="0"/>
<stop offset="0.742053" stopColor="#FF8DB9"/>
<stop offset="1" stopColor="#F86E42"/>
</linearGradient>
</defs>
</svg>
</div>
          
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