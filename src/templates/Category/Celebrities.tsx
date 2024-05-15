import Image from "next/image";
import { CategoryCarousel } from "./CategoryCarousel";
import { Section } from "@/layout/Section";
import React, { useState } from "react";
import { Category } from "@/types/types";
import Link from "next/link";

type ICategoryProps = {
  categories: Category[];
};

const Celebrities = ({ categories }: ICategoryProps) => {
  const [carouselVisible, setCarouselVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-start w-full mx-auto  ">
      <div className="relative gradient-class sm:none  w-full">

          <div className={` ${carouselVisible ? "flex justify-center gap-10 transition-all duration-600" : "hidden"}`}>
            <div className="max-w-5xl">
              <CategoryCarousel categories={categories} />
            </div>
          </div>
          <div className={`${!carouselVisible ? "grid lg:grid-cols-3 gap-96 overflow-hidden max-h-[645px] my-10 justify-items-center duration-500 transition-all" : "hidden"}`}>
            <div className="hidden lg:block md:none sm:none inset-0 bg-gradient-to-b from-[#FF8761] to-[#080810]  rounded-tr-full w-[530px] h-[473.69px] ml-[-130px] mt-[130px]  "></div>
            <div className=" max-w-full mb-0">

            </div>
            <div className=" inset-0 bg-gradient-to-b from-[#FF81E3] to-[#080810]  rounded-t-[600px] w-[614px] h-[614px] mr-[-240px] mt-10 "></div>
          </div>
        {!carouselVisible && (
          <div className={`${!carouselVisible ? "bottom-[10rem] left-[35%] right-[35%] absolute gap-4 flex flex-col items-center justify-center transition-all duration-500" : "hidden"} `}>
            <h1 className="text-[80px] leading-[96.82px] text-center">
              Explore our{" "}
              <span className="text-red-500">
                top <br />
              </span>{" "}
              <span className="text-red-500">performing</span> categories
            </h1>
            <button
              onClick={() => setCarouselVisible(true)}
              className="py-4 px-8 rounded-full text-white bg-gradient-to-r from-pink-300 to-[#f16633]"
            >
              <p className="text-[24px]">View our top performing categories</p>
            </button>
          </div>
        )}
      </div>

      <Section>
        <div className="mt-40 bg-[#080810]">
          <div className="grid grid-rows-4 grid-flow-col  gap-4 mb-2 justify-center">
            {/* First Row */}
            {categories?.map((categ, index) => (
              <Link className={`${index === 0 || index + 1 === categories?.length ? "row-span-2" : ""}  relative`} href={`/${categ.slug}`} key={categ.id}>
                  <Image
                    width={800}
                    height={800}
                    src={categ.category_banner_image}
                    alt={categ.name}
                    className="w-full h-full hover:scale-105 transition-transform duration-300 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 w-full text-start text-[20px] font-normal leading-[58.09px]   bg-opacity-50 py-2 px-4 text-white">
                    {categ.name}
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Celebrities };
