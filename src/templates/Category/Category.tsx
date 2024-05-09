import Image from "next/image";
import { CategoryCarousel } from "./CategoryCarousel";
import { Section } from "@/layout/Section";
import React, { useState } from "react";

const Category = () => {
  const [carouselVisible, setCarouselVisible] = useState<boolean>(false);

  return (
    
    <div className="flex flex-col justify-start w-full mx-auto  ">
      <div className="gradient-class sm:none">
        {carouselVisible ? (
          <div className="grid grid-cols-1 gap-96 overflow-hidden max-h-[645px] justify-center">
            <div className="max-w-full">
              <CategoryCarousel />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-96 overflow-hidden max-h-[645px] my-10 justify-items-center">
            <div className="hidden lg:block md:none sm:none inset-0 bg-gradient-to-b from-[#FF8761] to-[#080810]  rounded-tr-full w-[530px] h-[473.69px] ml-[-130px] mt-[130px]  "></div>
            <div className=" max-w-full mb-0">
              {/* here will be static cards*/}
            </div>
            <div className=" inset-0 bg-gradient-to-b from-[#FF81E3] to-[#080810]  rounded-t-[600px] w-[614px] h-[614px] mr-[-240px] mt-10 "></div>
          </div>
        )}
      </div>
      {!carouselVisible && (
        <div className="my-0  gap-4 flex flex-col items-center justify-center ">
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
      <Section>
      <div className="mt-40 bg-[#080810]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-2 mx-2 justify-center">
          {/* First Row */}

          <div className="rounded-xl overflow-hidden relative">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist.png"
              alt="Comedian 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-10 left-2 w-full text-start text-[28px] leading-[58.09px] font-normal  bg-opacity-50 py-2 px-4 text-white">
              Comedians
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* 2nd Row */}

          <div className="grid grid-rows-2 gap-4">
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="lg:max-w-[538.67px] lg:max-h-[318px] xxl:max-w-[620px] xxl:max-h-[450px] rounded-xl overflow-hidden">
              <Image
                width={600}
                height={600}
                src="/celebrities/artist.png"
                alt="Artist 1"
                className=" w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist.png"
              alt="Comedian 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* 3rd Row */}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-4 mx-2 justify-center">
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden ">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist2.png"
              alt="Artist 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist2.png"
              alt="Artist 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden ">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist2.png"
              alt="Artist 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden">
            <Image
              width={600}
              height={600}
              src="/celebrities/artist2.png"
              alt="Artist 1"
              className=" w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      </Section>
     
    </div>
  );
};

export { Category };
