import Image from "next/image";
import React from "react";
import Frame from "./frame.png";

const Founder = () => {
  return (
    <div className="h-[1046px] relative mt-24">
      <div className="w-full p-px bg-gradient-to-b from-gray-800 via-gray-900 to-transparent rounded-t-[200px]">
        <div className="w-full  z-20 bg-gradient-to-b from-black via-black  to-transparent rounded-t-[200px] shadow-inner">
          <h1 className="text-center text-white text-[48px] leading-[58px] font-[400] pt-12">
            Meet Our Founder
          </h1>
          <div className="grid gap-12 items-center  grid-cols-2 px-24 py-12">
            <div className=" relative max-w-[25rem]">
              <div className="z-10">
                <Image width={400} height={400} src={Frame} alt="Founder" />
                <div className="flex flex-col h-[18rem] justify-center text-center">
                  <h1 className="text-[62px] leading-[77px] font-[400] text-white text-center">Mr. XYZ</h1>
                  <p className="text-[14px] font-[300] text-white text-center">Designation</p>
                </div>
              </div>
              <svg
                className="absolute top-[22rem] z-10"
                width="824"
                height="534"
                viewBox="0 0 824 534"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_bd_282_1062)">
                  <path
                    d="M261.679 145.588C406.546 65.182 589.166 117.438 669.572 262.305L769.543 442.422L300.016 703.024L54.4576 260.602L261.679 145.588Z"
                    fill="url(#paint0_linear_282_1062)"
                    fillOpacity="0.99"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_bd_282_1062"
                    x="-41.543"
                    y="-96"
                    width="907.086"
                    height="895.024"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="48" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_282_1062"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-23" />
                    <feGaussianBlur stdDeviation="27" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_282_1062"
                      result="effect2_dropShadow_282_1062"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_282_1062"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_282_1062"
                    x1="682.517"
                    y1="38.311"
                    x2="188.614"
                    y2="494.141"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#718A4A" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="px-9 relative">
              <p className="text-[24px] leading-[32px] text-white/40 text-right py-10 px-24">
                His vision in his own words:
              </p>
              <p className="text-[24px] mb-14 leading-[29px] font-normal text-white px-24">
                I envision our platform as a dynamic hub where artists and
                clients connect worldwide, offering artists a stage to showcase
                their talents while empowering them to thrive professionally
                through their passion. Through cutting-edge technology, we
                streamline the booking process, ensuring efficiency and fairness
                for all, fostering a thriving global artistic community.
              </p>
              <div className="absolute top-20 right-32">
                <svg
                  width="96"
                  height="74"
                  viewBox="0 0 96 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.08">
                    <path
                      d="M20.184 0C31.4294 0 43.5398 8.06226 43.5398 29.9455V30.8093C43.5398 60.7549 22.2024 74 3.17178 74V59.8911C14.7055 59.8911 23.3558 52.9805 23.3558 41.1751H22.7791C10.092 41.1751 0 32.249 0 19.5798C0 7.77431 8.6503 0 20.184 0Z"
                      fill="white"
                    />
                    <path
                      d="M72.5315 0C83.7769 0 95.8873 8.06226 95.8873 29.9455V30.8093C95.8873 60.7549 74.5499 74 55.5192 74V59.8911C67.053 59.8911 75.7033 52.9805 75.7033 41.1751H75.1266C62.4395 41.1751 52.3475 32.249 52.3475 19.5798C52.3475 7.77431 60.9978 0 72.5315 0Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
