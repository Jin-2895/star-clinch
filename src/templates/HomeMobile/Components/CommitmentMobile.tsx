import { Section3Heading, Section6Data } from "@/types/types";
import React from "react";

type ICommitmentProps = {
  sectionSixHeadings: Section3Heading[] | null;
  sectionSixData: Section6Data[] | null;
};
const CommitmentMobile = ({
  sectionSixHeadings,
  sectionSixData,
}: ICommitmentProps) => {
  console.log("sectionSixHeadings", sectionSixHeadings);
  console.log("sectionSixData", sectionSixData);
  const heading = sectionSixHeadings && sectionSixHeadings[0]?.value;
  const split = heading?.split(" ");
  console.log(split && split[1]);

  return (
    <div className="flex flex-col mt-6 h-[818px] w-full">
      <div className="text-white text-[32px] leading-[38.7px] text-center mx-10">
        <p>
          {split && split[0]}{" "}
          <span className="opacity-50"> {split && split[1]}</span>{" "}
          <span className="opacity-50">excellence </span>{" "}
          <span>Since 2015</span>{" "}
        </p>
      </div>
      <div className="relative  h-[273px] w-full">
     
        <div  className="absolute left-0 bottom-0">
        <svg width="123" height="269" viewBox="0 0 123 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1.81055 1.15234C65.4972 0.574425 120.53 54.6697 121.107 121.977L122.358 267.624L0.486419 268.67L-1.81055 1.15234Z" fill="url(#paint0_linear_61_2745)"/>
<defs>
<linearGradient id="paint0_linear_61_2745" x1="144.162" y1="-61.0756" x2="-89.8115" y2="357.6" gradientUnits="userSpaceOnUse">
<stop offset="0.419792" stopColor="#A35A8A"/>
<stop offset="1" stopColor="#FFEA29"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div     className="absolute right-5 bottom-0">
        <svg width="385" height="251" viewBox="0 0 385 251" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_bd_101_24)">
<path d="M21.1748 200.624C21.1748 90.1671 110.718 0.624023 221.175 0.624023H363.175V248.624H21.1748V200.624Z" fill="url(#paint0_linear_101_24)" fillOpacity="0.34" shapeRendering="crispEdges"/>
<path d="M221.175 1.12402H362.675V248.124H21.6748V200.624C21.6748 90.4432 110.994 1.12402 221.175 1.12402Z" stroke="url(#paint1_linear_101_24)" strokeOpacity="0.8" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_bd_101_24" x="-30.8252" y="-51.376" width="446" height="352" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="26"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_101_24"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-19"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>
<feBlend mode="normal" in2="effect1_backgroundBlur_101_24" result="effect2_dropShadow_101_24"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_101_24" result="shape"/>
</filter>
<linearGradient id="paint0_linear_101_24" x1="-52.3104" y1="148.896" x2="361.432" y2="279.13" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFE3E2"/>
<stop offset="0.236135" stopColor="#F16633"/>
<stop offset="0.670551" stopColor="#FF2277"/>
<stop offset="0.994177" stopColor="#080810" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_101_24" x1="110.464" y1="34.2848" x2="344.821" y2="247.681" gradientUnits="userSpaceOnUse">
<stop stopColor="#E5D8D8"/>
<stop offset="0.56108" stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>

        </div>
    
<div className="absolute text-center w-full mt-7 flex flex-col h-full items-center justify-center  z-20 text-white">

        <p className="text-[40px]">
          {sectionSixData && sectionSixData[4]?.value}
        </p>
         
          <p className="text-[18px]">Worth of booking</p>
</div>
        
      </div>

      <div className="flex flex-col  gap-3 mt-8 mx-4">
        <div className="h-[99px] border-t-1 border-b-1 border-white-10  w-full">
          <div className="flex px-8 items-center gap-3 text-[#f86e42] h-full">
            <p className="text-[48px]">
              {sectionSixData && sectionSixData[3]?.value}
            </p>
            <p className="text-[18px] leading-[21px] mt-5">
              {sectionSixData && sectionSixData[3]?.name}
            </p>
          </div>
        </div>

        <div className="h-[99px] bg-gradient-to-r from-white-0 via-white-10 to-white-0  w-full">
          <div className="flex px-8 items-center gap-3 text-[#eb8c9d] h-full">
            <p className="text-[48px]">
              {sectionSixData && sectionSixData[5]?.value}
            </p>
            <p className="text-[18px] leading-[21px] mt-5">
              {sectionSixData && sectionSixData[5]?.name}
            </p>
          </div>
        </div>

        <div className="h-[99px] border-t-1 border-b-1 border-white-10  w-full">
          <div className="flex px-8 items-center gap-3 text-[#f86e42] h-full">
            <p className="text-[48px]">
              {sectionSixData && sectionSixData[2]?.value}
            </p>
            <p className="text-[18px] leading-[21px] mt-5">
              {sectionSixData && sectionSixData[2]?.name}
            </p>
          </div>
        </div>

        <div className="h-[99px] bg-gradient-to-r from-white-0 via-white-10 to-white-0  w-full">
          <div className="flex px-8 items-center gap-3 text-[#ef7e2b] h-full">
            <p className="text-[48px]">
              {sectionSixData && sectionSixData[6]?.value}
            </p>
            <p className="text-[18px] leading-[21px] mt-5">
              {sectionSixData && sectionSixData[6]?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentMobile;
