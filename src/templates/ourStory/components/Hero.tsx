import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[800px] bg-gradient-to-t from-[#211125] via-transparent to-transparent ">
      <div className="w-full h-full relative">
        <div className="absolute top-0 right-0">
          <svg
            width="375"
            height="473"
            viewBox="0 0 375 473"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.61">
              <path
                d="M601.066 127.396L547.064 204.02C442.415 352.505 237.21 388.043 88.7244 283.394L0.0015476 220.865L243.487 -124.616L601.066 127.396Z"
                fill="url(#paint0_linear_43_845)"
                fillOpacity="0.29"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_43_845"
                x1="634.402"
                y1="124.969"
                x2="124.003"
                y2="66.5366"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F5FD96" />
                <stop offset="0.482292" stopColor="#608F43" />
                <stop offset="1" stopColor="#080810" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-[150px] top-0  z-20">
          <svg
            width="502"
            height="508"
            viewBox="0 0 502 508"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" filter="url(#filter0_bd_332_4695)">
              <path
                d="M59.4124 316.287C35.9887 210.545 102.721 105.836 208.463 82.4119C314.205 58.9882 418.914 125.72 442.338 231.462C465.762 337.204 399.029 441.914 293.287 465.337C187.546 488.761 82.8361 422.029 59.4124 316.287Z"
                fill="url(#paint0_linear_332_4695)"
                fillOpacity="0.99"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_332_4695"
                x="-79"
                y="-56.001"
                width="659.75"
                height="659.751"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="48" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_332_4695"
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
                  in2="effect1_backgroundBlur_332_4695"
                  result="effect2_dropShadow_332_4695"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_332_4695"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_332_4695"
                x1="81.613"
                y1="20.7269"
                x2="292.84"
                y2="465.55"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8A4A6C" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-center pt-36  ">
          <svg
            width="1738"
            height="700"
            viewBox="0 0 1738 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 448.803V785.384M0.5 448.803H1737.5M0.5 448.803L117.006 349.32M466.523 50.8711L350.017 150.354M648.835 50.8711L466.523 448.803V785.384M904.61 50.8711V448.803V785.384M1151.25 0.383789L1317.43 448.803V785.384M1737.5 448.803V785.384M1737.5 448.803L1668.14 349.32M1425.78 50.8711L1512.28 150.354M233.512 249.837H1598.78M233.512 249.837L117.006 349.32M233.512 249.837L350.017 150.354M1598.78 249.837L1668.14 349.32M1598.78 249.837L1512.28 150.354M117.006 349.32H1668.14M350.017 150.354H1512.28"
              stroke="url(#paint0_linear_43_860)"
              strokeOpacity="0.12"
            />
            <defs>
              <linearGradient
                id="paint0_linear_43_860"
                x1="866.362"
                y1="0.383789"
                x2="867.817"
                y2="743.885"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.619842" stopColor="white" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col absolute top-0 mt-36">
          <p className="text-[90px] leading-[108px] font-normal text-white   text-center  mx-32">
            The Avengers of Art:
          </p>
          <p className="text-[90px] leading-[108px] font-normal text-white   text-center mx-32">
            {" "}
            The epic journey of our Marvel-ous artist booking revolution
          </p>
        </div>
        <div className="absolute   bottom-24 ">
          <p className="text-white text-[24px] leading-[29px] mb-8  text-center opacity-50 mx-[470px] ">
            Explore the chapters of our extraordinary journey, where dreams met
            stardom and events became legendary stories.
          </p>
          <div className="flex justify-center w-full gap-3">
          <p className="text-[#D387A2] text-[24px] leading-[29px]  text-center  ">
            Join the journey
          </p>
          <motion.div
          animate={{
            y: [0, 5],
            transition: {
                ease: 'linear',
                duration: 2,
                repeat: Infinity,
            }
        }}
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3058 27.7871C14.9062 28.3309 14.0938 28.3309 13.6942 27.7871L3.54556 13.9759C3.06028 13.3155 3.53186 12.3838 4.3514 12.3838L24.6486 12.3838C25.4681 12.3838 25.9397 13.3155 25.4544 13.9759L15.3058 27.7871Z"
                fill="url(#paint0_linear_311_701)"
              />
              <path
                d="M15.3058 21.7871C14.9062 22.3309 14.0938 22.3309 13.6942 21.7871L3.54556 7.97592C3.06028 7.31551 3.53186 6.38379 4.3514 6.38379L24.6486 6.38379C25.4681 6.38379 25.9397 7.31551 25.4544 7.97593L15.3058 21.7871Z"
                fill="url(#paint1_linear_311_701)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_311_701"
                  x1="14.5"
                  y1="39.8838"
                  x2="14.5"
                  y2="6.88379"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C17C99" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_311_701"
                  x1="14.5"
                  y1="33.8838"
                  x2="14.5"
                  y2="0.883787"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C17C99" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
