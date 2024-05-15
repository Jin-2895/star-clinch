import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { Category } from "@/types/types";
import Link from "next/link";

type ICategoryCarouselProps = {
  categories: Category[];
};

const CategoryCarousel = ({ categories }: ICategoryCarouselProps) => {

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={20}
      className="celebritiesSwiper"
    >
      {categories?.map((categ) => (
        <SwiperSlide key={categ.id}>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              width={800}
              height={800}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[350px] min-h-[600px] object-cover"
              src={categ.category_banner_image}
              alt={categ.name}
            />
            <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full py-[12rem]"/>
            <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-[24px]  font-[300] mb-6 text-start">
                  {categ.name}
                </h2>
              <Link href={categ.slug} className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 transition-all duration-400 text-start"> 
                View
                <FaArrowRightLong color="white" />
                </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { CategoryCarousel };
