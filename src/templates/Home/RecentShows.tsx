import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/15475219/pexels-photo-15475219/free-photo-of-hill-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Big Buck Bunny",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "arijit Singh",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Elephant Dream",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Shreya Ghoshal",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image:
      "https://images.pexels.com/photos/22858523/pexels-photo-22858523/free-photo-of-s-curve-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Blazes",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "kishore kumar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.pexels.com/photos/20985362/pexels-photo-20985362/free-photo-of-cerro-2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Escape",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Sonu nigham",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    image:
      "https://images.pexels.com/photos/19501709/pexels-photo-19501709/free-photo-of-black-and-white-shot-of-a-young-woman-standing-outside-in-the-dark-and-looking-away.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Fun",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Udit narayan",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    image:
      "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-black-and-white-photo-of-a-village-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Joyrides",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Neha kakkar",
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    image:
      "https://images.pexels.com/photos/22741673/pexels-photo-22741673/free-photo-of-self.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "For Bigger Meltdowns",
    text: "Nora Fatehi for an event hosted by XYZ performed at Pune .",
    date: "14 March 2023",
    author: "Neha kakkar",
  },
];



const RecentShows = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <Section marque={true} screen="grid grid-cols-12">
      <CTABanner
        titleflex="flex justify-center items-center text-center"
        title="Recent shows made star-studded via StarClinch"
        style=""
        section={
          <div className="w-full">
              <Swiper
                navigation={{ prevEl, nextEl }}
                modules={[Navigation]}
                className="recentShows"
              >
                {data.map(
                  (
                    slide: { image: string; text: string; date: string },
                    index: number
                  ) => (
                    <SwiperSlide
                      key={`${index}-image`}
                      className="flex flex-row gap-10 px-24"
                    >
                      <Image
                        className="rounded-t-full max-w-[30rem] min-h-[30rem] max-h-[31rem]"
                        width={750}
                        height={550}
                        src={slide.image}
                        alt="slides"
                      />

                      <div className="flex flex-col gap-4">
                        <p className="text-white w-full flex justify-center items-center text-start  h-full text-[38px] leading-tight">
                          {slide.text}
                        </p>
                        <div className="flex flex-row justify-start items-center gap-2">
                          <svg
                            width="25"
                            height="26"
                            viewBox="0 0 25 26"
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.5552 18.1881V9.75062H3.43677V18.1881C3.43677 19.2053 3.83446 20.1808 4.54234 20.9C5.25023 21.6193 6.21033 22.0233 7.21144 22.0233H17.7805C18.7816 22.0233 19.7417 21.6193 20.4496 20.9C21.1575 20.1808 21.5552 19.2053 21.5552 18.1881ZM9.47171 13.1993C9.47171 13.5038 9.35264 13.7959 9.1407 14.0112C8.92876 14.2265 8.64131 14.3475 8.34158 14.3475C8.04184 14.3475 7.75439 14.2265 7.54245 14.0112C7.33051 13.7959 7.21144 13.5038 7.21144 13.1993C7.21144 12.8947 7.33051 12.6027 7.54245 12.3873C7.75439 12.172 8.04184 12.051 8.34158 12.051C8.64131 12.051 8.92876 12.172 9.1407 12.3873C9.35264 12.6027 9.47171 12.8947 9.47171 13.1993ZM9.47171 17.0345C9.47171 17.339 9.35264 17.6311 9.1407 17.8464C8.92876 18.0618 8.64131 18.1828 8.34158 18.1828C8.04184 18.1828 7.75439 18.0618 7.54245 17.8464C7.33051 17.6311 7.21144 17.339 7.21144 17.0345C7.21144 16.7299 7.33051 16.4379 7.54245 16.2225C7.75439 16.0072 8.04184 15.8862 8.34158 15.8862C8.64131 15.8862 8.92876 16.0072 9.1407 16.2225C9.35264 16.4379 9.47171 16.7299 9.47171 17.0345ZM13.6269 13.1993C13.6269 13.5038 13.5078 13.7959 13.2959 14.0112C13.0839 14.2265 12.7965 14.3475 12.4967 14.3475C12.197 14.3475 11.9095 14.2265 11.6976 14.0112C11.4857 13.7959 11.3666 13.5038 11.3666 13.1993C11.3666 12.8947 11.4857 12.6027 11.6976 12.3873C11.9095 12.172 12.197 12.051 12.4967 12.051C12.7965 12.051 13.0839 12.172 13.2959 12.3873C13.5078 12.6027 13.6269 12.8947 13.6269 13.1993ZM13.6269 17.0345C13.6269 17.339 13.5078 17.6311 13.2959 17.8464C13.0839 18.0618 12.7965 18.1828 12.4967 18.1828C12.197 18.1828 11.9095 18.0618 11.6976 17.8464C11.4857 17.6311 11.3666 17.339 11.3666 17.0345C11.3666 16.7299 11.4857 16.4379 11.6976 16.2225C11.9095 16.0072 12.197 15.8862 12.4967 15.8862C12.7965 15.8862 13.0839 16.0072 13.2959 16.2225C13.5078 16.4379 13.6269 16.7299 13.6269 17.0345ZM17.776 13.1993C17.776 13.5038 17.6569 13.7959 17.445 14.0112C17.233 14.2265 16.9456 14.3475 16.6459 14.3475C16.3461 14.3475 16.0587 14.2265 15.8467 14.0112C15.6348 13.7959 15.5157 13.5038 15.5157 13.1993C15.5157 12.8947 15.6348 12.6027 15.8467 12.3873C16.0587 12.172 16.3461 12.051 16.6459 12.051C16.9456 12.051 17.233 12.172 17.445 12.3873C17.6569 12.6027 17.776 12.8947 17.776 13.1993ZM21.5552 7.44949C21.5552 6.43232 21.1575 5.45681 20.4496 4.73757C19.7417 4.01833 18.7816 3.61426 17.7805 3.61426H7.21144C6.21033 3.61426 5.25023 4.01833 4.54234 4.73757C3.83446 5.45681 3.43677 6.43232 3.43677 7.44949V8.21653H21.5552V7.44949Z"
                              fill="white"
                            />
                          </svg>
                          <p className="text-gray-400 text-start w-full h-full text-[18px] leading-tight">
                            {slide.date}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <button
                className="text-white z-20 absolute top-[50%] left-0 cursor-pointer h-20 w-20"
                ref={(node) => setPrevEl(node)}
              >
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_bi_3474_812)">
                    <circle
                      cx="38"
                      cy="38"
                      r="38"
                      transform="matrix(-1 0 0 1 76.791 0.443359)"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <circle
                      cx="38"
                      cy="38"
                      r="37.6846"
                      transform="matrix(-1 0 0 1 76.791 0.443359)"
                      stroke="url(#paint0_linear_3474_812)"
                      strokeWidth="0.630745"
                    />
                  </g>
                  <path
                    d="M21.6136 35.834L47.1637 25.4674C47.7535 25.2281 48.3132 25.8688 47.9969 26.4211L41.7464 37.3347C41.6357 37.5279 41.6283 37.7636 41.7267 37.9634L47.9969 50.7028C48.2884 51.2952 47.6378 51.9075 47.0642 51.5807L21.5339 37.0368C21.0478 36.7599 21.0952 36.0444 21.6136 35.834Z"
                    fill="#DBDEE9"
                  />
                  <defs>
                    <filter
                      id="filter0_bi_3474_812"
                      x="-60.567"
                      y="-60.9147"
                      width="198.716"
                      height="198.716"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="30.679"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3474_812"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3474_812"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="13.8764" />
                      <feGaussianBlur stdDeviation="8.19968" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.9625 0 0 0 0 1 0 0 0 0 0.984043 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_3474_812"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3474_812"
                      x1="38"
                      y1="8.09861e-07"
                      x2="65.1744"
                      y2="69.814"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.619589" stopColor="#B8AEAE" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button
                className="text-white z-20 absolute top-[50%] right-0 cursor-pointer h-20 w-20"
                ref={(node) => setNextEl(node)}
              >
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_bi_3474_816)">
                    <circle
                      cx="38.0115"
                      cy="38.4434"
                      r="38"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <circle
                      cx="38.0115"
                      cy="38.4434"
                      r="37.6846"
                      stroke="url(#paint0_linear_3474_816)"
                      strokeWidth="0.630745"
                    />
                  </g>
                  <path
                    d="M55.1888 35.834L29.6387 25.4674C29.049 25.2281 28.4893 25.8688 28.8056 26.4211L35.0561 37.3347C35.1668 37.5279 35.1742 37.7636 35.0758 37.9634L28.8056 50.7028C28.5141 51.2952 29.1646 51.9075 29.7383 51.5807L55.2686 37.0368C55.7547 36.7599 55.7073 36.0444 55.1888 35.834Z"
                    fill="#DBDEE9"
                  />
                  <defs>
                    <filter
                      id="filter0_bi_3474_816"
                      x="-30.895"
                      y="-30.4631"
                      width="137.813"
                      height="137.813"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="15.4533"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3474_816"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3474_816"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="13.8764" />
                      <feGaussianBlur stdDeviation="8.19968" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.9625 0 0 0 0 1 0 0 0 0 0.984043 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_3474_816"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3474_816"
                      x1="38.0115"
                      y1="0.44336"
                      x2="65.1859"
                      y2="70.2573"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.619589" stopColor="#B8AEAE" />
                      <stop
                        offset="0.619689"
                        stopColor="#AFA6A6"
                        stopOpacity="0.952394"
                      />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
          </div>
        }
      />
    </Section>
  );
};

export { RecentShows };
