import { Section1Item } from "@/types/types";
import React from "react";
import SearchMobile from "./SearchMobile";
import Celebrity from "@/public/celebrities/CelebOne";
import Image from "next/image";
import Svg1 from "../svg/Svg1";

type IHeroProps = {
  sectionOne: Section1Item[] | null;
};

const MobileHero = ({ sectionOne }: IHeroProps) => {
  console.log("sectionOne", sectionOne);
  return (
    <div className="h-[880px]  w-full">
      <div className="bg-[#212132] h-full mx-3 mt-5 rounded-t-full">
        <div className="flex  flex-col items-center overflow-hidden  ">
          <div className="text-center pt-16">
            <SearchMobile />
          </div>
          <div className=" my-8">
            <h1 className="text-center mx-4 text-[48px] font-normal leading-[59px] text-white">
              Book a
            </h1>
            <div className="flex justify-center ">
              <h1 className="text-center   text-[48px] font-normal leading-[59px] text-white">
                Celebrity
              </h1>
              <div className="absolute ml-20">
                <svg
                  width="159"
                  height="63"
                  viewBox="0 0 159 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.39258 1.98584H127.393C143.961 1.98584 157.393 15.4173 157.393 31.9858C157.393 48.5544 143.961 61.9858 127.393 61.9858H1.39258V1.98584Z"
                    stroke="url(#paint0_linear_4570_238)"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4570_238"
                      x1="238.091"
                      y1="25.989"
                      x2="148.063"
                      y2="-74.0524"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.440625" stopColor="#F85694" />
                      <stop offset="0.836458" stopColor="#F16633" />
                      <stop
                        offset="0.994177"
                        stopColor="#151212"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="text-center text-[48px] font-normal leading-[59px] text-white opacity-50">
              for your
            </p>
            <p className="text-center text-[48px] font-normal leading-[59px] text-white">
              Iconic Event
            </p>
          </div>
          <div className="mx-auto">
            <div className="flex flex-row gap-1 w-fit">
              <div className="relative max-w-[13rem] min-w-[13rem] min-h-[25rem] overflow-hidden rounded-t-full">
                <Celebrity
                  celebProps={sectionOne}
                  style="celebrity-one object-cover"
                />

                <div className="absolute z-50 bottom-0">
                  <svg
                    width="80"
                    height="203"
                    viewBox="0 0 80 203"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_4570_243)">
                      <path
                        d="M-44.3252 0.37207C24.1581 0.37207 79.6748 55.8888 79.6748 124.372V211.372H-44.3252V0.37207Z"
                        fill="url(#paint0_linear_4570_243)"
                        fillOpacity="100"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_4570_243"
                        x="-176.792"
                        y="-132.095"
                        width="388.934"
                        height="475.934"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0.75"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="66.2335"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_4570_243"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_4570_243"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_4570_243"
                        x1="58.1414"
                        y1="16.5391"
                        x2="-96.1044"
                        y2="119.834"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C32B62" />
                        <stop offset="1" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-end justify-between  ">
                <div className="flex relative flex-col gap-2">
                  <div className="absolute z-50 w-full h-full flex justify-center items-center  right-[100px] ">
                    <Svg1 />
                  </div>

                  <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden rounded-t-full rounded-bl-full">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-two object-cover"
                    />
                    <Image
                      height={400}
                      width={400}
                      className="absolute z-50 right-2 top-20 "
                      src="/assets/anchormobile.png"
                      alt=""
                    />
                  </div>
                  <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-three object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
