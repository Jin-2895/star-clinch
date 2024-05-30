import { Section } from "@/layout/Section";
import { Section3Heading } from "@/types/types";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type IFundedProps = {
  sectionSevenHeadings: Section3Heading[] | null;
};

const Funded = ({ sectionSevenHeadings }: IFundedProps) => {
  const [text, setText] = useState<string[] | null | undefined>(null)

  useEffect(()=>{
    if(sectionSevenHeadings){
      const newValue: string[] | undefined = sectionSevenHeadings[0]?.value?.split(" ")
      setText(newValue)
    }
  },[sectionSevenHeadings])

  return (
    <Section yPadding="py-[8rem]">
      <div className="relative flex flex-col items-center justify-center font-bold text-white overflow-hidden">
        <div className="absolute flex w-[780px] flex-col items-center overflow-hidden mt-[16rem] z-10 gap-10">
          <div className="flex flex-col items-center justify-center p-10">
            <h1
              className={`${sectionSevenHeadings && sectionSevenHeadings[0]?.name} text-center font-[400] text-white leading-[60px]`}
            >
              {text?.map((el: string, i: number) => (
                <motion.span
                  className={`${i < 2 ? "text-white/40" : "" } ${i > 5 && i < 8 ? "text-white/40" : "text-white"} text-[64px]`}
                  key={i}
                  whileInView="visible"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 2,
                  }}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h1>

            <button
              className={`${sectionSevenHeadings && sectionSevenHeadings[1]?.name} mt-10 text-[20px] px-10 py-6 border-[1px] rounded-full bg-gradient-to-br from-black via-gray-800 to-gray-900 border-gray-600`}
            >
              {sectionSevenHeadings && sectionSevenHeadings[1]?.value}
            </button>
          </div>
        </div>
        <svg
          width="1900"
          height="906"
          viewBox="0 0 1900 906"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_3580_1201)">
            <rect
              x="1154.48"
              y="557.867"
              width="395.899"
              height="385.424"
              rx="192.712"
              fill="url(#paint0_linear_3580_1201)"
              fillOpacity="0.22"
            />
          </g>
          <g filter="url(#filter1_i_3580_1201)">
            <path
              d="M397.946 448.18C432.847 191.617 651.946 0.304688 910.871 0.304688H941.564C1199.99 0.304688 1419.08 190.376 1455.54 446.221C1459.44 473.554 1459.59 501.291 1455.98 528.664L1391.99 1014.35H458.871L397.549 526.697C394.27 500.619 394.403 474.224 397.946 448.18Z"
              fill="#080810"
            />
          </g>
          <g filter="url(#filter2_i_3580_1201)">
            <path
              d="M429.564 476.663C462.487 231.248 671.903 48.0508 919.517 48.0508H932.957C1180.14 48.0508 1389.58 230.105 1423.98 474.883C1427.47 499.664 1427.6 524.801 1424.37 549.616L1363.99 1014.35H487.064L429.209 547.829C426.277 524.19 426.396 500.272 429.564 476.663Z"
              fill="#080810"
            />
          </g>
          <g filter="url(#filter3_i_3580_1201)">
            <path
              d="M450.322 504.018C481.857 271.388 680.479 97.875 915.237 97.875H937.299C1171.64 97.875 1370.28 270.293 1403.24 502.31C1406.61 526.069 1406.74 550.176 1403.62 573.969L1345.79 1014.35H505.379L449.978 572.255C447.138 549.59 447.254 526.653 450.322 504.018Z"
              fill="#080810"
            />
          </g>
          <g filter="url(#filter4_i_3580_1201)">
            <path
              d="M487.505 543.825C516.58 329.341 699.709 169.362 916.155 169.362H936.496C1152.56 169.362 1335.71 328.332 1366.09 542.251C1369.2 564.156 1369.32 586.383 1366.44 608.32L1313.13 1014.35H538.267L487.188 606.739C484.569 585.842 484.676 564.694 487.505 543.825Z"
              fill="url(#paint1_linear_3580_1201)"
            />
          </g>
          <g filter="url(#filter5_b_3580_1201)">
            <rect
              width="293.249"
              height="298.924"
              transform="translate(445.7 658.043) rotate(57.5295)"
              fill="url(#paint2_linear_3580_1201)"
              fillOpacity="0.6"
            />
          </g>
          <rect
            x="-11"
            y="664.942"
            width="1910.01"
            height="279.126"
            fill="url(#paint3_linear_3580_1201)"
          />
          <defs>
            <filter
              id="filter0_b_3580_1201"
              x="1074.48"
              y="477.867"
              width="555.899"
              height="545.424"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="40" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_3580_1201"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_3580_1201"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_3580_1201"
              x="395.186"
              y="0.304688"
              width="1063.39"
              height="1052.55"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="38.5016" />
              <feGaussianBlur stdDeviation="42.7795" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3580_1201"
              />
            </filter>
            <filter
              id="filter2_i_3580_1201"
              x="427.095"
              y="48.0508"
              width="999.601"
              height="1006.94"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="40.6375" />
              <feGaussianBlur stdDeviation="45.1527" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3580_1201"
              />
            </filter>
            <filter
              id="filter3_i_3580_1201"
              x="447.931"
              y="97.875"
              width="957.936"
              height="957.581"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="41.1066" />
              <feGaussianBlur stdDeviation="21.536" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3580_1201"
              />
            </filter>
            <filter
              id="filter4_i_3580_1201"
              x="485.3"
              y="169.362"
              width="883.214"
              height="882.888"
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
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="37.9002" />
              <feGaussianBlur stdDeviation="19.8561" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3580_1201"
              />
            </filter>
            <filter
              id="filter5_b_3580_1201"
              x="145.264"
              y="609.799"
              width="506.114"
              height="504.373"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="24.1218" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_3580_1201"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_3580_1201"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3580_1201"
              x1="1352.43"
              y1="557.867"
              x2="1352.43"
              y2="943.292"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B78311" />
              <stop offset="1" stopColor="#946A4C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3580_1201"
              x1="927.011"
              y1="169.362"
              x2="927.011"
              y2="848.261"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BB423F" />
              <stop offset="1" stopColor="#833254" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3580_1201"
              x1="242.324"
              y1="22.9038"
              x2="7.46263"
              y2="285.456"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B7F46" />
              <stop offset="1" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3580_1201"
              x1="944.006"
              y1="696.49"
              x2="944.006"
              y2="944.069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#080810" stopOpacity="0" />
              <stop stopColor="#080810" stopOpacity="0" />
              <stop offset="0.0001" stopColor="#080810" stopOpacity="0" />
              <stop offset="0.861779" stopColor="#080810" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
};

export { Funded };
