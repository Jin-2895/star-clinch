import Image from "next/image";
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import { FilterButton } from "../SingleArtist/Components/FilterButton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCoverflow, Pagination } from "swiper/modules";
import React from "react";
import { Section10Image, Section3Heading } from "@/types/types";

SwiperCore.use([EffectCoverflow, Pagination]);

type IBrowsePerformer = {
  sectionTenHeadings: Section3Heading[] | null;
  sectionTenImages: Section10Image[] | null;
};

const BrowsePerformer = ({
  sectionTenHeadings,
  sectionTenImages,
}: IBrowsePerformer) => {
  return (
    <Section yPadding="py-24">
      <CTABanner
        title={sectionTenHeadings && sectionTenHeadings[0]?.value}
        name={sectionTenHeadings && sectionTenHeadings[0]?.name}
        subtitle={sectionTenHeadings && sectionTenHeadings[1]?.value}
        subtitleName={sectionTenHeadings && sectionTenHeadings[1]?.name}
        style=""
        titleStyles="text-start w-[35rem]"
        section={
          <div className="relative">
            <div className="absolute -top-24 right-0 -z-10">
              <div className="w-[25rem] h-[25rem] rounded-full bg-gradient-to-bl from-[#FF81E340] from-30% via-[#0B060A03] via-80%  to-transparent to-10% backdrop-blur-2xl"></div>
            </div>
            <div className="flex gap-8 justify-center items-center">
              <FilterButton num={1} filterName="Live Band" />
              <FilterButton num={2} filterName="Singer" />
              <FilterButton num={3} filterName="Celebrity" />
              <FilterButton num={4} filterName="Dancer" />
              <FilterButton num={5} filterName="Anchor" />
              <FilterButton num={5} filterName="Anchor" />
              <FilterButton num={5} filterName="Anchor" />
            </div>
            <div className="py-24">
              <Swiper
                className="mySwiper"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: -50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
              >
                {sectionTenImages &&
                  sectionTenImages?.map((item: Section10Image, i: number) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={700}
                        height={700}
                        src={item.image}
                        alt={item.name}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        }
      />
    </Section>
  );
};

export { BrowsePerformer };
