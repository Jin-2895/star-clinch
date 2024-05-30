import { Section } from "@/layout/Section";
import { Section3Heading, Section6Data } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";

type ICommitmentProps = {
  sectionSixHeadings: Section3Heading[] | null;
  sectionSixData: Section6Data[] | null;
};

const Commitment = ({
  sectionSixHeadings,
  sectionSixData,
}: ICommitmentProps) => {
  return (
    <Section>
      <div className="flex xl:flex-row flex-col justify-between w-full border-gray-900 border-2 p-10 rounded-[5rem] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] px-12">
        <h1
          className={`${sectionSixHeadings ? sectionSixHeadings[0]?.value : "main_heading"} text-[48px] leading-[58.09px] text-white max-w-[35rem]`}
        >
          {sectionSixHeadings && sectionSixHeadings[0]?.value}{" "}
          <span className="opacity-40">excellence</span>
          {""} since <br />
          <span className="text-[180px] leading-[217.84px]">2015.</span>
        </h1>
        <div className="flex gap-4 justify-end">
          <div className="flex flex-col gap-4 justify-end items-end">
            <div className="relative">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, ease: "easeIn" }}
                className="absolute top-12 left-14 text-green-300 flex justify-center text-center flex-col"
              >
                <h1 className="text-[60px] leading-normal">
                  {sectionSixData && sectionSixData[1]?.value}
                </h1>
                <h1 className="text-[22px] leading-normal">
                  {sectionSixData && sectionSixData[1]?.name}
                </h1>
              </motion.div>
              <svg
                width="300"
                height="252"
                viewBox="0 0 300 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3559_270)">
                  <rect
                    y="0.448242"
                    width="300"
                    height="251"
                    rx="40"
                    fill="url(#paint0_linear_3559_270)"
                    fillOpacity="0.1"
                  />
                </g>
                <rect
                  x="0.5"
                  y="0.948242"
                  width="299"
                  height="250"
                  rx="39.5"
                  stroke="url(#paint1_linear_3559_270)"
                  strokeOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3559_270"
                    x1="-7.68845"
                    y1="-26.8985"
                    x2="326.801"
                    y2="59.0883"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.586175" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3559_270"
                    x1="-15.0386"
                    y1="-14.3836"
                    x2="188.423"
                    y2="298.683"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFFDFD" stopOpacity="0.45" />
                    <stop stopColor="#96FDBF" />
                    <stop offset="0.482292" stopColor="#598F43" />
                    <stop offset="0.994177" stopColor="#25292C" />
                  </linearGradient>
                  <clipPath id="clip0_3559_270">
                    <rect
                      y="0.448242"
                      width="300"
                      height="251"
                      rx="40"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="relative">
                <motion.div
                  whileInView="visible"
                  viewport={{ once: false }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4, ease: "easeIn" }}
                  className="absolute left-[9.5rem] text-red-300 flex justify-center text-center flex-col"
                >
                  <h1 className="text-[60px] leading-normal">
                    {sectionSixData && sectionSixData[2]?.value}
                  </h1>
                  <h1 className="text-[22px] leading-normal">
                    {sectionSixData && sectionSixData[2]?.name}
                  </h1>
                </motion.div>
                <svg
                  width="471"
                  height="153"
                  viewBox="0 0 471 153"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3559_274)"></g>
                  <rect
                    x="0.5"
                    y="0.948242"
                    width="470"
                    height="151"
                    rx="39.5"
                    stroke="url(#paint0_linear_3559_274)"
                    strokeOpacity="0.8"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3559_274"
                      x1="-12.0709"
                      y1="-16.1123"
                      x2="375.591"
                      y2="242.251"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.586175" stopColor="#BB615B" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_3559_274">
                      <rect
                        y="0.448242"
                        width="471"
                        height="152"
                        rx="40"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <div className="flex justify-end">
              <div className="relative">
                <motion.div
                  whileInView="visible"
                  viewport={{ once: false }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4, ease: "easeIn" }}
                  className="absolute top-4 left-[9.5rem] text-pink-300 flex justify-center text-center flex-col"
                >
                  <h1 className="text-[60px] leading-normal">
                    {sectionSixData && sectionSixData[3]?.value}
                  </h1>
                  <h1 className="text-[22px] leading-normal">
                    {sectionSixData && sectionSixData[3]?.name}
                  </h1>
                </motion.div>
                <svg
                  width="488"
                  height="188"
                  viewBox="0 0 488 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3559_282)">
                    <rect
                      y="0.448242"
                      width="488"
                      height="187"
                      rx="40"
                      fill="url(#paint0_linear_3559_282)"
                      fillOpacity="0.1"
                    />
                  </g>
                  <rect
                    x="1"
                    y="1.44824"
                    width="486"
                    height="185"
                    rx="39"
                    stroke="url(#paint1_linear_3559_282)"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3559_282"
                      x1="-12.5065"
                      y1="-19.9256"
                      x2="428.592"
                      y2="227.654"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.586175" stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3559_282"
                      x1="-12.5065"
                      y1="-19.9256"
                      x2="428.592"
                      y2="227.654"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EEC0C8" stopOpacity="0" />
                      <stop offset="0.64375" stopColor="#DE8595" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_3559_282">
                      <rect
                        y="0.448242"
                        width="488"
                        height="187"
                        rx="40"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="relative ">
                <motion.div
                  whileInView="visible"
                  viewport={{ once: false }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4, ease: "easeIn" }}
                  className=" py-[7.2rem] px-[9rem] z-30 flex justify-center text-center flex-col"
                >
                  <h1 className="text-[60px] leading-normal text-white">
                    {sectionSixData && sectionSixData[4]?.value}
                  </h1>
                  <h1 className="text-[22px] leading-normal text-white">
                    {sectionSixData && sectionSixData[4]?.name}
                  </h1>
                </motion.div>
                <svg
                className="absolute top-4 left-0 z-10"
                  width="148"
                  height="327"
                  viewBox="0 0 128 307"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.83">
                    <path
                      d="M0.0120239 2.49316C67.3198 1.91525 122.352 56.0105 122.93 123.318L124.497 305.828L2.62551 306.875L0.0120239 2.49316Z"
                      fill="url(#paint0_linear_3749_279)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_3749_279"
                      x1="243.367"
                      y1="1.63447"
                      x2="-49.1208"
                      y2="305.099"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#62CC93" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                className="absolute -top-4 -left-2 z-20"
                  width="520"
                  height="400"
                  viewBox="0 0 540 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_bdi_3798_1249)">
                    <g clipPath="url(#clip0_3798_1249)">
                      <path
                        d="M21 240C21 129.543 110.543 40 221 40H509V368H21V240Z"
                        fill="url(#paint0_linear_3798_1249)"
                        fillOpacity="0.34"
                        shapeRendering="crispEdges"
                      />
                    </g>
                    <path
                      d="M221 40.5H508.5V367.5H21.5V240C21.5 129.819 110.819 40.5 221 40.5Z"
                      stroke="url(#paint1_linear_3798_1249)"
                      strokeOpacity="0.8"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_bdi_3798_1249"
                      x="0"
                      y="0"
                      width="530"
                      height="394"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3798_1249"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-19" />
                      <feGaussianBlur stdDeviation="10.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_backgroundBlur_3798_1249"
                        result="effect2_dropShadow_3798_1249"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_3798_1249"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="26" />
                      <feGaussianBlur stdDeviation="28" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.521667 0 0 0 0 0.172585 0 0 0 0 0.319199 0 0 0 0.59 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect3_innerShadow_3798_1249"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3798_1249"
                      x1="-3.46272"
                      y1="20.6182"
                      x2="307.504"
                      y2="518.729"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0916665" stopColor="#FFE3E2" />
                      <stop offset="0.406386" stopColor="#F16633" />
                      <stop offset="0.808759" stopColor="#8F4561" />
                      <stop offset="0.994177" stopColor="#151212" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3798_1249"
                      x1="148.408"
                      y1="84.5191"
                      x2="459.675"
                      y2="390.303"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E5D8D8" />
                      <stop
                        offset="0.56108"
                        stopColor="white"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_3798_1249">
                      <path
                        d="M21 240C21 129.543 110.543 40 221 40H509V368H21V240Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative">
                <motion.div
                  whileInView="visible"
                  viewport={{ once: false }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 4, ease: "easeIn" }}
                  className="absolute left-[9.5rem] text-purple-300 flex justify-center text-center flex-col"
                >
                  <h1 className="text-[60px] leading-normal">
                    {sectionSixData && sectionSixData[4]?.value}
                  </h1>
                  <h1 className="text-[32px] leading-normal">
                    {sectionSixData && sectionSixData[4]?.name}
                  </h1>
                </motion.div>
                <svg
                  width="488"
                  height="150"
                  viewBox="0 0 488 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3559_293)">
                    <rect
                      y="0.448242"
                      width="488"
                      height="149"
                      rx="40"
                      fill="url(#paint0_linear_3559_293)"
                      fillOpacity="0.1"
                    />
                  </g>
                  <rect
                    x="0.5"
                    y="0.948242"
                    width="487"
                    height="148"
                    rx="39.5"
                    stroke="url(#paint1_linear_3559_293)"
                    strokeOpacity="0.8"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3559_293"
                      x1="-12.5065"
                      y1="-15.7855"
                      x2="375.178"
                      y2="257.309"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.586175" stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3559_293"
                      x1="-12.5065"
                      y1="-15.7855"
                      x2="375.178"
                      y2="257.309"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="0.586175" stopColor="#FF81E3" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_3559_293">
                      <rect
                        y="0.448242"
                        width="488"
                        height="149"
                        rx="40"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Commitment };
