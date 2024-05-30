import Image from "next/image";
import { CategoryCarousel } from "./CategoryCarousel";
import { Section } from "@/layout/Section";
import React, { useState } from "react";
import { Category } from "@/types/types";
import Link from "next/link";
import CelebritiesBanner1 from "@/public/assets/svgs/celebrities-banner1";
import CelebritiesBanner2 from "@/public/assets/svgs/celebrities-banner2";
import CelebritiesBanner3 from "@/public/assets/svgs/celebrities-banner3";

type ICategoryProps = {
  categories: Category[];
};

const Celebrities = ({ categories }: ICategoryProps) => {
  const [carouselVisible, setCarouselVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-start w-full mx-auto py-12">
      <div className={`relative sm:none  w-full ${carouselVisible ? "" : "h-[80vh]"}  bg-gradient-to-t from-transparent via-black to-transparent z-20`}>
        {carouselVisible && (
          <svg
            className="absolute right-[28%] left-[28%] -top-40"
            width="800"
            height="1051"
            viewBox="0 0 1048 1051"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_579_1168)">
              <path
                d="M56.0006 974.207C56.0006 974.207 240.626 36.6385 523.351 42.9224C822.133 49.5631 992.539 995.023 992.539 995.023L56.0006 974.207Z"
                fill="url(#paint0_linear_579_1168)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_579_1168"
                x="0.972176"
                y="-12.1377"
                width="1046.6"
                height="1062.19"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="27.5142"
                  result="effect1_foregroundBlur_579_1168"
                />
              </filter>
              <linearGradient
                id="paint0_linear_579_1168"
                x1="549.652"
                y1="-134.785"
                x2="519.978"
                y2="1197.56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A36169" stopOpacity="0.45" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}

        <div
          className={` ${carouselVisible ? "flex justify-center gap-10 transition-all duration-600" : "hidden"}`}
        >
          <div className="w-full relative py-[12rem]">
            <CategoryCarousel categories={categories} />
          </div>
        </div>
        {!carouselVisible && (
          <>
            <div className="cards bottom-[20rem] left-[35%] right-[35%] absolute gap-4 flex flex-row items-center justify-center transition-all duration-500 z-10">
              <div
                className={`relative rounded-lg overflow-hidden max-w-[300px] min-w-[300px] min-h-[400px]`}
              >
                <Image
                  width={800}
                  height={800}
                  className="hover:scale-105 transition-transform duration-300 rounded-xl object-cover min-w-[300px] min-h-[400px]"
                  src={
                    categories[0]?.category_banner_image
                      ? categories[0]?.category_banner_image
                      : ""
                  }
                  alt={categories[0]?.name ? categories[0]?.name : "categories"}
                />

                <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full py-[12rem]" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h2 className="text-[24px]  font-[300] mb-6 text-start">
                    {categories[0]?.name}
                  </h2>
                </div>
              </div>
              <CelebritiesBanner1
                id="123456"
                className="absolute -top-20 left-10"
                text="80+ bookings"
              />
            </div>
            <div className="cards bottom-[15rem] left-[30%] absolute gap-4 flex flex-row items-center justify-center transition-all duration-500 -rotate-6 z-0">
              <div
                className={`relative rounded-lg overflow-hidden min-w-[300px] min-h-[400px]`}
              >
                <Image
                  width={800}
                  height={800}
                  className="hover:scale-105 transition-transform duration-300 rounded-xl object-cover max-w-[300px] min-w-[300px] min-h-[400px]"
                  src={
                    categories[1]?.category_banner_image
                      ? categories[1]?.category_banner_image
                      : ""
                  }
                  alt={categories[1]?.name ? categories[1]?.name : "categories"}
                />

                <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full py-[12rem]" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h2 className="text-[24px]  font-[300] mb-6 text-start">
                    {categories[1]?.name}
                  </h2>
                </div>
              </div>
              <CelebritiesBanner2
                id="12345"
                className="absolute -top-16 -left-16"
                text="80+ bookings"
              />
            </div>
            <div className="cards bottom-[15rem] right-[30%] absolute gap-4 flex flex-row items-center justify-center transition-all duration-500 rotate-6 z-0">
              <div
                className={`relative rounded-lg overflow-hidden min-w-[300px] min-h-[400px]`}
              >
                <Image
                  width={800}
                  height={800}
                  className="hover:scale-105 transition-transform duration-300 rounded-xl object-cover max-w-[300px] min-w-[300px] min-h-[400px]"
                  src={
                    categories[2]?.category_banner_image
                      ? categories[2]?.category_banner_image
                      : ""
                  }
                  alt={categories[2]?.name ? categories[2]?.name : "categories"}
                />

                <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full py-[12rem]" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h2 className="text-[24px]  font-[300] mb-6 text-start">
                    {categories[2]?.name}
                  </h2>
                </div>
              </div>
              <CelebritiesBanner3
                id="1234"
                className="card3 absolute z-40 -top-14 -right-16"
                text="80+ bookings"
              />
            </div>
          </>
        )}
        <div
          className={`${!carouselVisible ? "grid lg:grid-cols-3 gap-96 overflow-hidden max-h-[545px] w-full my-10 justify-items-center duration-500 transition-all " : "hidden"}`}
        >
          <div className="hidden lg:block md:none sm:none inset-0 bg-gradient-to-b from-[#FF8761] to-[#080810]  rounded-tr-full w-[530px] h-[518.69px] ml-[-130px]"></div>
          <div className=" max-w-full mb-0"></div>
          <div className=" inset-0 bg-gradient-to-b from-[#FF81E3] to-[#080810]  rounded-t-[600px] w-[614px] h-[518px] mr-[-240px]"></div>
        </div>
        {!carouselVisible && (
          <>
            <div
              className={`${!carouselVisible ? "-bottom-[5rem] left-[35%] right-[35%] absolute gap-4 flex flex-col items-center justify-center transition-all duration-500 z-40" : "hidden"} `}
            >
              <h1 className="text-[80px] leading-[96.82px] text-center">
                Explore our <span className="text-red-500">top performing</span>{" "}
                categories
              </h1>
              <button
                onClick={() => setCarouselVisible(true)}
                className="py-4 px-8 rounded-full text-white bg-gradient-to-r from-pink-300 to-[#f16633]"
              >
                <p className="text-[24px]">
                  View our top performing categories
                </p>
              </button>
            </div>
          </>
        )}
      </div>

      <Section>
        <div className="mt-40 bg-[#080810]">
          <div className="grid grid-cols-3 grid-flow-row   gap-8 mb-2 justify-center">
            {/* First Row */}
            {categories?.map((categ, index) => {
              if (index < 5) {
                return (
                  <Link
                    className={`${index === 0 ? "row-span-2" : ""}  relative`}
                    href={`/${categ.slug}`}
                    key={categ.id}
                  >
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
                );
              } else if (index < 10) {
                return (
                  <Link
                    className={`${index === 7 ? "row-span-2" : ""}  relative`}
                    href={`/${categ.slug}`}
                    key={categ.id}
                  >
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
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-8 mb-2 justify-center mt-8">
            {categories?.map((categ, index) => {
              if (index > 9) {
                return (
                  <Link
                    className={`row-span-2 relative`}
                    href={`/${categ.slug}`}
                    key={categ.id}
                  >
                    <Image
                      width={800}
                      height={800}
                      src={categ.category_banner_image}
                      alt={categ.name}
                      className="w-full h-full max-h-[25rem] hover:scale-105 transition-transform duration-300 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 w-full text-start text-[20px] font-normal leading-[58.09px]   bg-opacity-50 py-2 px-4 text-white">
                      {categ.name}
                    </div>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Celebrities };
