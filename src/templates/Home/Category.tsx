"use client";
import { Section } from "@/layout/Section";
import { Section3Heading, Section8Image } from "@/types/types";
import React from "react";
import SwiperCore from "swiper";
import {Mousewheel } from "swiper/modules";
import "swiper/css";
// import Link from "next/link";
import ParallaxCategory from "./ParallaxCategory";
// import ParallaxCategory2 from "./ParallaxCategory2";

type ICategoryProps = {
  sectionEightHeadings: Section3Heading[] | null;
  sectionEightImages: Section8Image[] | null;
};

SwiperCore.use([Mousewheel]);

const Category = ({ sectionEightImages }: ICategoryProps) => {

  return (
    <Section screen="" xMargin="mx-auto">
      <div className="relative flex flex-col gap-10 justify-center items-center ">
        <ParallaxCategory sectionEightImages={sectionEightImages} />
      </div>
        {/* <ParallaxCategory2 sectionEightImages={sectionEightImages} /> */}
    </Section>
  );
};

export { Category };
