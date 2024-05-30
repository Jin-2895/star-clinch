import { Section } from "@/layout/Section";
import React from "react";
import { Section1Item } from "@/types/types";
import Celebrity from "@/public/celebrities/CelebOne";
import SearchInput from "./Components/SearchInput";
import { motion } from "framer-motion";

type IHeroProps = {
  sectionOne: Section1Item[] | null;
};

const Hero = ({ sectionOne }: IHeroProps) => {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 flex justify-center items-center z-30">
        <svg
          width="1914"
          height="1210"
          viewBox="0 0 1914 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3542_469)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1920 -233H0V1216H1920V-233ZM181.404 1216L110.172 567.194C99.674 471.577 120.446 375.133 169.375 292.315L222.175 202.946C327.948 23.9161 511.123 -95.5834 717.595 -120.255L877.157 -139.322C931.691 -145.838 986.791 -146.1 1041.38 -140.103L1214.95 -121.036C1441.37 -96.1626 1639.47 42.4706 1740.39 246.676L1761.67 289.735C1803.47 374.314 1817.31 469.991 1801.17 562.945L1687.84 1216H181.404Z"
              fill="#080810"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3542_469"
              x="-45"
              y="-233"
              width="2010"
              height="1602"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="108" />
              <feGaussianBlur stdDeviation="22.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3542_469"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3542_469"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <svg
          width="1901"
          height="1290"
          viewBox="0 0 1901 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3542_437)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1856 -158H45V1216H1856V-158ZM216.106 1216L149.674 607.699C139.279 512.513 159.868 416.514 208.382 333.963L245.338 271.078C350.897 91.4614 534.278 -28.5576 741.129 -53.406L867.271 -68.5592C922.089 -75.1442 977.482 -75.4091 1032.36 -69.3485L1169.71 -54.1798C1396.48 -29.1365 1594.74 110.006 1695.39 314.748L1703.61 331.467C1745.03 415.726 1758.74 510.928 1742.76 603.448L1637.02 1216H216.106Z"
              fill="#080810"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3542_437"
              x="-3.8147e-06"
              y="-158"
              width="1901"
              height="1527"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="108" />
              <feGaussianBlur stdDeviation="22.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3542_437"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3542_437"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <svg
          width="1775"
          height="1250"
          viewBox="0 0 1775 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3542_434)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1730 -72H45V1216L204.2 1216L143.278 653.966C133.026 559.387 153.359 464.012 201.292 381.837L220.177 349.461C325.43 169.02 509.096 48.269 716.478 23.1699L803.711 12.6123C858.931 5.92899 914.74 5.6602 970.022 11.8112L1076.04 23.6078C1296.56 48.1443 1489.18 183.864 1586.47 383.274C1626.16 464.6 1639.28 556.337 1624 645.527L1526.25 1216L1730 1216V-72Z"
              fill="#080810"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3542_434"
              x="-3.8147e-06"
              y="-72"
              width="1775"
              height="1441"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="108" />
              <feGaussianBlur stdDeviation="22.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3542_434"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3542_434"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-30 top-[14rem]">
        <svg
          width="1140"
          height="1257"
          viewBox="0 0 1140 1057"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1558_1292)">
            <path
              d="M-6.10352e-05 570C-6.10352e-05 255.198 255.198 -9.15527e-05 570 -9.15527e-05V-9.15527e-05C884.802 -9.15527e-05 1140 255.198 1140 570V1057H-6.10352e-05V570Z"
              fill="white"
              fillOpacity="0.01"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1558_1292"
              x="-6.10352e-05"
              y="-9.15527e-05"
              width="1140"
              height="1091.8"
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
              <feOffset dy="34.8026" />
              <feGaussianBlur stdDeviation="69.0528" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1558_1292"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <motion.div
              whileInView="visible"
              viewport={{ once: false }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeIn" }} 
              className="absolute inset-0 flex justify-center items-center z-0 top-[14.5rem]">
                <svg
                  width="906"
                  height="1057"
                  viewBox="0 0 906 1057"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.52" filter="url(#filter0_f_1558_1293)">
                    <path
                      d="M113 1044.77C113 1044.77 303.221 15 439.261 15C583.029 15 793 1057 793 1057L113 1044.77Z"
                      fill="url(#paint0_linear_1558_1293)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1558_1293"
                      x="0"
                      y="-98"
                      width="906"
                      height="1268"
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
                        stdDeviation="56.5"
                        result="effect1_foregroundBlur_1558_1293"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1558_1293"
                      x1="441.243"
                      y1="-350.299"
                      x2="449.285"
                      y2="1277.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.107292" stopColor="#FFC7DF" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
      </motion.div>

      <Section>
        <div className="flex flex-col items-center justify-center font-bold text-white overflow-hidden">
          <div className="relative flex flex-col items-center overflow-hidden z-30 ">
            <motion.div
            whileInView="visible"
            viewport={{ once: false }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeIn" }}
             className="text-center pt-[210px]">
              <SearchInput />
            </motion.div>

            <div className="relative ">
              
              <motion.h1
              whileInView="visible"
              viewport={{ once: false }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeIn" }}
               className="my-8 text-center text-[100px] leading-[125.86px] text-white font-[300] px-10">
                Book a Celebrity
              </motion.h1>
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0.1, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="absolute right-0 top-9"
              >
                <svg
                  width="292"
                  height="135"
                  viewBox="0 0 292 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.71289 1.7821H224.354C260.528 1.7821 289.854 31.1075 289.854 67.2821C289.854 103.457 260.528 132.782 224.354 132.782H1.71289V1.7821Z"
                    stroke="url(#paint0_linear_1558_1297)"
                    strokeOpacity="0.8"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1558_1297"
                      x1="438.21"
                      y1="54.3212"
                      x2="242.837"
                      y2="-130.777"
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
              </motion.div>
              <motion.p
              whileInView="visible"
              viewport={{ once: false }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeIn" }}
               className="text-center text-[48px] font-[300] leading-[58.09px] text-white px-10">
                <span className="text-white/40">for you</span> Iconic Event
              </motion.p>
            </div>
            <motion.div
            whileInView="visible"
            viewport={{ once: false }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, ease: "easeIn" }}
             className="mx-auto">
              <div className="flex flex-row gap-4 w-fit">
                <div className="relative max-w-[16rem] min-w-[16rem] min-h-[25rem] overflow-hidden rounded-t-full">
                  <Celebrity
                    celebProps={sectionOne}
                    style="celebrity-one object-cover"
                  />
                </div>
                <div className="flex flex-row items-end justify-between  gap-7">
                  <div className="flex flex-col gap-4">
                    <div className="relative max-w-[17rem] min-w-[17rem] min-h-[16rem] overflow-hidden rounded-t-full rounded-bl-full">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-two object-cover"
                      />
                    </div>
                    <div className="relative max-w-[17rem] min-w-[17rem] min-h-[8rem] overflow-hidden rounded-md">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-three object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative max-w-[17rem] min-w-[17rem] min-h-[22rem] overflow-hidden rounded-tl-[150px]">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-four object-cover "
                    />
                  </div>
                </div>
                <div className="mt-20 flex flex-col items-end gap-4">
                  <div className="relative max-w-[17rem] min-w-[17rem] min-h-[14rem] overflow-hidden rounded-l-full">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-five object-cover"
                    />
                  </div>
                  <div className="relative max-w-[17rem] min-w-[17rem] min-h-[14rem] overflow-hidden">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-six object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Hero };
