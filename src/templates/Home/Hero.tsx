
import { Section } from "@/layout/Section";
import React from "react";
import { Section1Item } from "@/types/types";
import Celebrity from "@/public/celebrities/CelebOne";
import SearchInput from "./Components/SearchInput";

type IHeroProps = {
  sectionOne: Section1Item[] | null;
};

const Hero = ({ sectionOne }: IHeroProps) => {

  return (
    <div className="relative">
      <div className="absolute inset-0 flex justify-center items-center z-30">
        <svg
          width="1914"
          height="1050"
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
          height="1050"
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
          height="1050"
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
      <Section>
        <div className="flex flex-col items-center justify-center font-bold text-white overflow-hidden z-40">
          <div className="flex flex-col items-center overflow-hidden z-30 ">
            <div className="text-center pt-16">
              <SearchInput />
            </div>

            <div className="">
              <h1 className="my-8 text-center text-[5rem] font-normal leading-[125.86px] text-white">
                Book a Celebrity
              </h1>
              <p className="text-center text-[48px] font-normal leading-[58.09px] text-white">
                for you Iconic Event
              </p>
            </div>
            <div className="mx-auto">
              <div className="flex flex-row gap-4 w-fit">
                <div className="relative max-w-[13rem] min-w-[13rem] min-h-[25rem] overflow-hidden rounded-t-full">
                  <Celebrity
                    celebProps={sectionOne}
                    style="celebrity-one object-cover"
                  />
                </div>
                <div className="flex flex-row items-end justify-between  gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden rounded-t-full rounded-bl-full">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-two object-cover"
                      />
                    </div>
                    <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden">
                      <Celebrity
                        celebProps={sectionOne}
                        style="celebrity-three object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative max-w-[13rem] min-w-[13rem] min-h-[26rem] overflow-hidden rounded-tl-full">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-four object-cover "
                    />
                  </div>
                </div>
                <div className="mt-20 flex flex-col items-end gap-4">
                  <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden rounded-l-full">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-five object-cover"
                    />
                  </div>
                  <div className="relative max-w-[13rem] min-w-[13rem] min-h-[13rem] overflow-hidden rounded-tl-[50%]">
                    <Celebrity
                      celebProps={sectionOne}
                      style="celebrity-six object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Hero };
