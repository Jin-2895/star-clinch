import { Section } from "@/layout/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <Section yPadding="py-24" screen="" xMargin="mx-auto">
      <div>
        <div className="flex justify-center items-center gap-44">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#c94650] p-3 overflow-hidden relative">
              <div className="rounded-full  overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src="/celebrities/arijitSingh.png"
                  alt="artist"
                />
              </div>
            </div>
            <h1 className="absolute text-[104px] leading-[125.86px] left-0 text-white">
              Singers
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="text-[64px] leading-[77.45px] text-white">
              <span className="opacity-50">
                Choose <br /> from
              </span>{" "}
              100+ <br />
              Categories
            </h1>
            <div className="bg-transparent outline-none focus:outline-none hover:outline-none p-0 text-white flex flex-row gap-3 justify-center items-center">
              <Link
                href="/various-artists"
                className="capitalize text-[32px] leading-[38.73px] font-semibold bg-gradient-to-r from-[#727272] via-[#FF8DB9] to-[#F86E42] bg-clip-text text-transparent inline-block"
              >
                Explore All Categories
              </Link>
              <svg
                width="44"
                height="16"
                viewBox="0 0 44 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.7071 8.65535C45.0976 8.26482 45.0976 7.63166 44.7071 7.24114L38.3431 0.877174C37.9526 0.48665 37.3195 0.48665 36.9289 0.877174C36.5384 1.2677 36.5384 1.90086 36.9289 2.29139L42.5858 7.94824L36.9289 13.6051C36.5384 13.9956 36.5384 14.6288 36.9289 15.0193C37.3195 15.4098 37.9526 15.4098 38.3431 15.0193L44.7071 8.65535ZM0 8.94824H44V6.94824H0V8.94824Z"
                  fill="url(#paint0_linear_3434_481)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3434_481"
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Category };
