import { Section } from "@/layout/Section";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Section3Heading, Section3Image } from "@/types/types";
import SwiperCore from "swiper";
import Link from "next/link";

type ICategoryProps = {
  sectionNineHeadings: Section3Heading[] | null;
  sectionNineImages: Section3Image[] | null;
};

const CategoryList = ({
  sectionNineHeadings,
  sectionNineImages,
}: ICategoryProps) => {
  SwiperCore.use([Mousewheel]);

  console.log(sectionNineImages)

  return (
    <Section xMargin="mx-0 pt-[10rem]">
      <div className=" py-8 relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // mousewheel={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          centeredSlides={true}
          loop={false}
          spaceBetween={10}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          speed={1200}
          direction="vertical"
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="categoryListSwiper"
        >
          {sectionNineImages && (
            <>
              <SwiperSlide className="slide-1">
                <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
                  <Image
                    className="rounded-[2rem]"
                    width={600}
                    height={600}
                    src={sectionNineImages[0]?.value || ""}
                    alt={sectionNineImages[0]?.name || "artist images"}
                  />
                </div>
                <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">
                  {sectionNineImages[0]?.name}
                </p>
              </SwiperSlide>
              <SwiperSlide className="slide-2">
                <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
                  <Image
                   className="rounded-[2rem]"
                    width={600}
                    height={600}
                    src={sectionNineImages[1]?.value || ""}
                    alt={sectionNineImages[1]?.name || "artist images"}
                  />
                </div>
                <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">
                  {sectionNineImages[1]?.name}
                </p>
              </SwiperSlide>
              <SwiperSlide className="slide-3">
                <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
                  <Image
                   className="rounded-[2rem]"
                    width={600}
                    height={600}
                    src={sectionNineImages[2]?.value || ""}
                    alt={sectionNineImages[2]?.name || "artist images"}
                  />
                </div>
                <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">
                  {sectionNineImages[2]?.name}
                </p>
              </SwiperSlide>
              <SwiperSlide className="slide-4">
                <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
                  <Image
                   className="rounded-[2rem]"
                    width={600}
                    height={600}
                    src={sectionNineImages[3]?.value || ""}
                    alt={sectionNineImages[3]?.name || "artist images"}
                  />
                </div>
                <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">
                  {sectionNineImages[3]?.name}
                </p>
              </SwiperSlide>
              <SwiperSlide className="slide-5">
                <div className="bg-gradient-to-r from-[#F4F4F4] via-transparent to-[#F4F4F4] p-1 rounded-[2rem] ">
                  <Image
                   className="rounded-[2rem]"
                    width={600}
                    height={600}
                    src={sectionNineImages[4]?.value || ""}
                    alt={sectionNineImages[4]?.name || "artist images"}
                  />
                </div>
                <p className="absolute bottom-0 px-10 text-white text-[38px] capitalize">
                  {sectionNineImages[4]?.name}
                </p>
              </SwiperSlide>
            </>
          )}
        </Swiper>
        <div className=" absolute top-[20%] right-0 flex flex-col gap-10 ">
          <div className="max-w-[30rem]">
            <h1
              className={`${sectionNineHeadings && sectionNineHeadings[0]?.name} text-white text-[80px] font-normal leading-[88.9px]`}
            >
              {sectionNineHeadings && sectionNineHeadings[0]?.value}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/celebrities"
              className={`${"sub_heading"} text-[30px] bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent`}
            >
              {"Explore all categories"}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CategoryList };
