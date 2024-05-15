import React from "react";
import { motion } from "framer-motion";
import HappySvg from "@/public/svgs/happySvg";
import { Section3Heading, Section4Image } from "@/types/types";
import ClientsLogo from "@/public/clients/Airbnb";

type Props = {
  xAxis?: string;
  initial?: string;
  sectionFourHeadings?: Section3Heading[] | null;
  sectionFourImages?: Section4Image[] | null;
};

const Clients = (props: Props) => {
  return (
    <div className="relative">
      {props.initial === "0%" && (
        <div className=" relative w-full flex flex-col justify-center items-center mt-20">
          <h1 className="text-[100px] text-white">Our Clients</h1>
          <div className="ml-72">
            <HappySvg />
          </div>
          <div className="absolute -top-2 right-0">
            <svg
              width="532"
              height="650"
              viewBox="0 0 532 650"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_0_1)">
                <path
                  d="M215.851 -261.496C335.004 -263.431 433.166 -168.407 435.101 -49.253L436.162 16.0384C438.097 135.172 343.088 233.318 223.954 235.253C104.82 237.188 6.67384 142.179 4.73906 23.0447L3.67755 -42.318C1.74309 -161.432 96.7362 -259.562 215.851 -261.496Z"
                  fill="url(#paint0_linear_0_1)"
                />
              </g>
              <g filter="url(#filter1_b_0_1)">
                <path
                  d="M163.319 207.055C191.792 2.43772 380.75 -140.355 585.367 -111.881C789.985 -83.4075 932.283 109.1 903.81 313.718C874.785 522.295 681.667 671.469 473.09 642.445L109.767 591.886L163.319 207.055Z"
                  fill="url(#paint1_linear_0_1)"
                  fillOpacity="0.93"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_0_1"
                  x="-336.347"
                  y="-601.521"
                  width="1112.53"
                  height="1176.8"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="168.261"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_0_1"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_0_1"
                  x="-13.3098"
                  y="-286.514"
                  width="1092.25"
                  height="1104.59"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="61.5385"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_0_1"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="405.208"
                  y1="146.023"
                  x2="-31.6335"
                  y2="-175.836"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#70771A" />
                  <stop offset="1" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="819.129"
                  y1="-20.3575"
                  x2="133.359"
                  y2="560.48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5B7F46" />
                  <stop offset="1" stopOpacity="0.02" />
                </linearGradient>
              </defs>
            </svg>
          </div>
         
        </div>
      )}

      <div className="relative w-full overflow-hidden z-10">
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [`${props.xAxis}`, `${props.initial}`],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {props?.sectionFourImages &&
            props?.sectionFourImages?.map(
              (image: { value: string; name: string }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `${100 / 8}%` }}
                >
                  <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
                    <ClientsLogo image={image} />
                  </div>
                </div>
              )
            )}
        </motion.div>
        
       
      </div>
      {props.initial === "-100%" && (
           <div className="absolute bottom-0 left-0 ">
           <svg
             width="150"
             height="200"
             viewBox="0 0 258 373"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <g filter="url(#filter0_b_3683_575)">
               <path
                 d="M-422 0C-46.4464 0 258 304.446 258 680V836H-422V0Z"
                 fill="url(#paint0_linear_3683_575)"
                 fillOpacity="0.55"
               />
             </g>
             <defs>
               <filter
                 id="filter0_b_3683_575"
                 x="-648.462"
                 y="-226.462"
                 width="1132.92"
                 height="1288.92"
                 filterUnits="userSpaceOnUse"
                 colorInterpolationFilters="sRGB"
               >
                 <feFlood floodOpacity="0" result="BackgroundImageFix" />
                 <feGaussianBlur
                   in="BackgroundImageFix"
                   stdDeviation="113.231"
                 />
                 <feComposite
                   in2="SourceAlpha"
                   operator="in"
                   result="effect1_backgroundBlur_3683_575"
                 />
                 <feBlend
                   mode="normal"
                   in="SourceGraphic"
                   in2="effect1_backgroundBlur_3683_575"
                   result="shape"
                 />
               </filter>
               <linearGradient
                 id="paint0_linear_3683_575"
                 x1="139.914"
                 y1="64.0552"
                 x2="-519.108"
                 y2="674.898"
                 gradientUnits="userSpaceOnUse"
               >
                 <stop stopColor="#26193C" />
                 <stop offset="1" stopOpacity="0.02" />
               </linearGradient>
             </defs>
           </svg>
         </div>
        )}
    </div>
  );
};

export { Clients };
