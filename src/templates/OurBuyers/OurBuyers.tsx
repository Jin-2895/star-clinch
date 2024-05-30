import { Section } from "@/layout/Section";
import React, { useState } from "react";
import { BuyersSlider } from "./Components/BuyersSlider";

const OurBuyers = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  return (
    <div className="h-full">
      <div className="relative">
        <svg
          className="absolute"
          width="1494"
          height="625"
          viewBox="0 0 1494 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_42_587)">
            <path
              d="M1212 343L1212 -55.9999C1212 -221.685 1077.69 -356 912 -356L-186 -356L-186 343L1212 343Z"
              fill="url(#paint0_linear_42_587)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_42_587"
              x="-468"
              y="-638"
              width="1962"
              height="1263"
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
                stdDeviation="141"
                result="effect1_foregroundBlur_42_587"
              />
            </filter>
            <linearGradient
              id="paint0_linear_42_587"
              x1="1416"
              y1="511"
              x2="-7.99999"
              y2="-6.00009"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CC3775" />
              <stop offset="1" stopColor="#4F2A49" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-0"
          width="1598"
          height="997"
          viewBox="0 0 1598 997"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_42_588)">
            <path
              d="M1680 715L1680 316C1680 150.315 1545.69 16.0001 1380 16.0001L282 16L282 715L1680 715Z"
              fill="url(#paint0_linear_42_588)"
              fillOpacity="0.73"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_42_588"
              x="0"
              y="-266"
              width="1962"
              height="1263"
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
                stdDeviation="141"
                result="effect1_foregroundBlur_42_588"
              />
            </filter>
            <linearGradient
              id="paint0_linear_42_588"
              x1="1680"
              y1="365.5"
              x2="282"
              y2="365.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B44848" />
              <stop offset="1" stopColor="#4F2A49" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative py-[16rem]">
        <div className="absolute inset-0 top-[10%] flex justify-center items-center">
          <svg
            width="789"
            height="370"
            viewBox="0 0 789 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H175C274.964 0 356 82.549 356 182.513C356 280.819 276.307 362 178 362C79.6933 362 0 282.307 0 184V0Z"
              fill="url(#paint0_linear_0_1)"
              fillOpacity="0.11"
            />
            <path
              d="M374 370H549C648.964 370 730 287.451 730 187.487C730 89.1808 650.307 8 552 8C453.693 8 374 87.6933 374 186V370Z"
              fill="url(#paint1_linear_0_1)"
              fillOpacity="0.11"
            />
            <rect
              width="147"
              height="150"
              transform="matrix(1 0 0 -1 642 206)"
              fill="url(#paint2_linear_0_1)"
              fillOpacity="0.11"
            />
            <rect
              width="160"
              height="160"
              rx="80"
              transform="matrix(1 0 0 -1 241 325)"
              fill="url(#paint3_linear_0_1)"
              fillOpacity="0.11"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="178"
                y1="0"
                x2="178"
                y2="362"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="552"
                y1="370"
                x2="552"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_1"
                x1="73.5"
                y1="0"
                x2="73.5"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_1"
                x1="80"
                y1="0"
                x2="80"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex justify-center items-start">
          <h1 className="font-[400] text-[96px] leading-[116.18px] text-white">
            Our Buyers
          </h1>
        </div>
      </div>
      <Section>
        <div className="relative">
          <div className="absolute -top-6 z-10 inset-0">
            <div className="flex flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setActiveButton(1)}
                className={`px-14 py-4 backdrop-blur-xl text-white rounded-full transition-all duration-300 ${activeButton === 1 ? "bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC]" : "bg-gradient-to-br from-[#FFFFFF00] via-[#FFFFFF1A] to-[#FFFFFF00]"}`}
              >
                Government Entities
              </button>
              <button
                onClick={() => setActiveButton(2)}
                className={`px-14 py-4 backdrop-blur-xl text-white rounded-full transition-all duration-300 ${activeButton === 2 ? "bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC]" : "bg-gradient-to-br from-[#FFFFFF00] via-[#FFFFFF1A] to-[#FFFFFF00]"}`}
              >
                Corporate
              </button>
              <button
                onClick={() => setActiveButton(3)}
                className={`px-14 py-4 backdrop-blur-xl text-white rounded-full transition-all duration-300 ${activeButton === 3 ? "bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC]" : "bg-gradient-to-br from-[#FFFFFF00] via-[#FFFFFF1A] to-[#FFFFFF00]"}`}
              >
                Hotel & Restaurants
              </button>
              <button
                onClick={() => setActiveButton(4)}
                className={`px-14 py-4 backdrop-blur-xl text-white rounded-full transition-all duration-300 ${activeButton === 4 ? "bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC]" : "bg-gradient-to-br from-[#FFFFFF00] via-[#FFFFFF1A] to-[#FFFFFF00]"}`}
              >
                University Colleges
              </button>
            </div>
          </div>
          {activeButton === 1 && (
            <div className="relative rounded-full shadow-inner border-gray-800 border-[1px] py-16 overflow-auto">
              <BuyersSlider marqueeVariants={marqueeVariants1} />
              <BuyersSlider marqueeVariants={marqueeVariants2} />
              <BuyersSlider marqueeVariants={marqueeVariants3} />
              <BuyersSlider marqueeVariants={marqueeVariants4} />
            </div>
          )}
          {activeButton === 2 && (
            <div className="relative rounded-full shadow-inner border-gray-800 border-[1px] py-16 overflow-auto">
              <BuyersSlider marqueeVariants={marqueeVariants1} />
              <BuyersSlider marqueeVariants={marqueeVariants2} />
              <BuyersSlider marqueeVariants={marqueeVariants3} />
              <BuyersSlider marqueeVariants={marqueeVariants4} />
            </div>
          )}
          {activeButton === 3 && (
            <div className="relative rounded-full shadow-inner border-gray-800 border-[1px] py-16 overflow-auto">
              <BuyersSlider marqueeVariants={marqueeVariants1} />
              <BuyersSlider marqueeVariants={marqueeVariants2} />
              <BuyersSlider marqueeVariants={marqueeVariants3} />
              <BuyersSlider marqueeVariants={marqueeVariants4} />
            </div>
          )}
          {activeButton === 4 && (
            <div className="relative rounded-full shadow-inner border-gray-800 border-[1px] py-16 overflow-auto">
              <BuyersSlider marqueeVariants={marqueeVariants1} />
              <BuyersSlider marqueeVariants={marqueeVariants2} />
              <BuyersSlider marqueeVariants={marqueeVariants3} />
              <BuyersSlider marqueeVariants={marqueeVariants4} />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

const marqueeVariants1 = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const marqueeVariants2 = {
  animate: {
    x: [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const marqueeVariants3 = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const marqueeVariants4 = {
  animate: {
    x: [-1035, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export default OurBuyers;
