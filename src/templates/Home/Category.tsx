import { Section } from "@/layout/Section";
import { Section3Heading, Section8Image } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

type ICategoryProps = {
  sectionEightHeadings: Section3Heading[] | null;
  sectionEightImages: Section8Image[] | null;
};

SwiperCore.use([Mousewheel, Navigation, Keyboard]);

const Category = ({
  sectionEightHeadings,
  sectionEightImages,
}: ICategoryProps) => {
  console.log(sectionEightHeadings);
  return (
    <Section yPadding="py-24" screen="" xMargin="mx-auto">
      <div className="overflow-hidden relative h-full flex justify-center items-center">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          className="rounded-swiper max-h-[50rem]"
        >
          {sectionEightImages &&
            sectionEightImages?.map((list: Section8Image, index: number) => {
              if (index !== 0) {
                return (
                  <SwiperSlide
                    key={index}
                    className="overflow-hidden flex flex-row justify-between"
                  >
                    <div className="relative">
                      <h1 className="absolute left-0 top-[14rem] text-white capitalize text-[88px] font-normal">
                        {list.name}
                      </h1>
                      <Image
                        className="rounded-full ml-[10rem] w-full h-full min-w-[600px] min-h-[600px] max-w-[600px] max-h-[600px] p-3 object-cover"
                        width={500}
                        height={500}
                        src={list.value}
                        alt={list.name}
                      />
                      <svg
                        style={{ transform: "rotate3d(6, 2, 1, 41deg)" }}
                        className="absolute right-0 top-[12rem]"
                        width="236"
                        height="505"
                        viewBox="0 0 236 505"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.581781 495.314C0.231416 496.65 1.03004 498.016 2.36556 498.367L24.1291 504.076C25.4646 504.427 26.8313 503.628 27.1816 502.293C27.532 500.957 26.7334 499.59 25.3979 499.24L6.05251 494.165L11.1277 474.819C11.478 473.484 10.6794 472.117 9.3439 471.767C8.00838 471.417 6.6417 472.215 6.29133 473.551L0.581781 495.314ZM213.183 1.88556C234.239 53.9573 239.312 143.122 210.065 236.273C180.847 329.33 117.428 426.187 1.73863 493.79L4.26127 498.107C121.138 429.81 185.286 331.882 214.835 237.771C244.354 143.755 239.395 53.3699 217.818 0.0111487L213.183 1.88556Z"
                          fill="url(#paint0_linear_3576_484)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_3576_484"
                            x1="269.94"
                            y1="30.6834"
                            x2="297.508"
                            y2="48.2809"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#727272" stopOpacity="0" />
                            <stop offset="0.742053" stopColor="#FF8DB9" />
                            <stop offset="1" stopColor="#F86E42" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-10 pl-[10rem] pt-[6rem]">
                      <div className="max-w-[30rem]">
                        <h1 className="text-white text-[80px] font-normal leading-[88.9px]">
                          Choose from 100+ {list.name}
                        </h1>
                      </div>
                      <div className="flex items-center gap-6">
                        <Link
                          href={`book-${list.name}-online`}
                          className={` text-[30px] bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent`}
                        >
                          Explore all <span className="capitalize">{list.name}</span>
                        </Link>
                        <Link href={`book-${list.name}-online`}>
                          <svg
                            width="44"
                            height="16"
                            viewBox="0 0 44 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M44.7071 8.65535C45.0976 8.26482 45.0976 7.63166 44.7071 7.24114L38.3431 0.877174C37.9526 0.48665 37.3195 0.48665 36.9289 0.877174C36.5384 1.2677 36.5384 1.90086 36.9289 2.29139L42.5858 7.94824L36.9289 13.6051C36.5384 13.9956 36.5384 14.6288 36.9289 15.0193C37.3195 15.4098 37.9526 15.4098 38.3431 15.0193L44.7071 8.65535ZM0 8.94824H44V6.94824H0V8.94824Z"
                              fill="url(#paint0_linear_3576_481)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3576_481"
                                x1="-0.66653"
                                y1="7.9499"
                                x2="51.401"
                                y2="-2.68581"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#727272" stopOpacity="0" />
                                <stop offset="0.742053" stopColor="#FF8DB9" />
                                <stop offset="1" stopColor="#F86E42" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              } else {
                return;
              }
            })}
        </Swiper>
      </div>
    </Section>
  );
};

export { Category };
