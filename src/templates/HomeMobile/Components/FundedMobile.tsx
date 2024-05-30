import { Section3Heading } from "@/types/types";

import React from "react";
import { GoArrowRight } from "react-icons/go";
import ZeroEight from "../svg/ZeroEight";


type IFundedProps = {
  sectionSevenHeadings: Section3Heading[] | null;
};
const FundedMobile = ({ sectionSevenHeadings }: IFundedProps) => {
  console.log(sectionSevenHeadings);

  const heading =
    sectionSevenHeadings && sectionSevenHeadings[0]?.value.split(" ");
  console.log(heading);
  return (
    <div className=" relative w-full  ">
      <div className="px-16 flex justify-center mt-4">
        <div className="relative">
        
           <div className="">
           <svg width="343" height="453" viewBox="0 0 343 453" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_104_64)">
<path d="M0.174805 171.624C0.174805 77.1833 76.7341 0.624023 171.175 0.624023V0.624023C265.615 0.624023 342.175 77.1833 342.175 171.624V452.624H0.174805V171.624Z" fill="url(#paint0_linear_104_64)" fillOpacity="0.8"/>
</g>
<defs>
<filter id="filter0_i_104_64" x="0.174805" y="0.624023" width="342" height="471" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="19"/>
<feGaussianBlur stdDeviation="33"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_64"/>
</filter>
<linearGradient id="paint0_linear_104_64" x1="171.175" y1="-35.6249" x2="263.076" y2="425.469" gradientUnits="userSpaceOnUse">
<stop stopColor="#CC603E"/>
<stop offset="0.570833" stopColor="#B94D87"/>
<stop offset="0.994177" stopColor="#080810"/>
</linearGradient>
</defs>
</svg>

           </div>
          <p className="absolute top-28 mx-5  text-[32px] leading-[38px] text-center text-white">
            <span className="opacity-50">
              {heading?.[0]} {heading?.[1]}
            </span>{" "}
            {heading?.[2]} {heading?.[3]} {heading?.[4]} {heading?.[5]}{" "}
            <span className="opacity-50">
              {heading?.[6]} {heading?.[7]}
            </span>{" "}
            {heading?.[8]} {heading?.[9]}{" "}
          </p>
        </div>

        <div className="absolute top-64 left-32">
          <div className="max-w-[161px] max-h-[54px]  p-[0.7px]   rounded-full bg-gradient-to-r from-gray-500  via-black to-black">
            <div className="max-w-[160px] h-[53px]  rounded-full bg-black ">
              <div className="max-w-[160px] h-[53px] px-4  rounded-full bg-gradient-to-r flex items-center text-white from-white-0 via-white-10 text-[18px] to-white-0 gap-4 justify-center ">
                {sectionSevenHeadings && sectionSevenHeadings[1]?.value}{" "}
                <GoArrowRight />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 flex flex-col mb-40 justify-center items-center relative h-[427px]">

        <div className="absolute top-0 -mt-12">
          <ZeroEight/>
          </div>     
          <div>
          <svg width="391" height="332" viewBox="0 0 391 332" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_61_2769)">
<path fillRule="evenodd" clipRule="evenodd" d="M195.175 125.645C259.804 125.645 312.196 73.2527 312.196 8.62402C312.196 4.14397 315.714 0.343994 320.194 0.343994H371.175C381.668 0.343994 390.175 8.85058 390.175 19.344V312.443C390.175 322.937 381.668 331.443 371.175 331.443H19.1748C8.68141 331.443 0.174805 322.937 0.174805 312.443V19.344C0.174805 8.85056 8.68139 0.343994 19.1748 0.343994H70.1562C74.6363 0.343994 78.1545 4.14397 78.1545 8.62402C78.1545 73.2527 130.546 125.645 195.175 125.645Z" fill="#080810"/>
</g>
<defs>
<filter id="filter0_i_61_2769" x="0.174805" y="0.343994" width="390" height="346.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="15"/>
<feGaussianBlur stdDeviation="10.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_61_2769"/>
</filter>
</defs>
</svg>

          </div>
       

        <div className="text-white bottom-10 px-10  absolute">
          <div className="flex text-wrap gap-3 mb-7">
           
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1748 2.80322C6.6748 2.80322 2.1748 7.30322 2.1748 12.8032C2.1748 18.3032 6.6748 22.8032 12.1748 22.8032C17.6748 22.8032 22.1748 18.3032 22.1748 12.8032C22.1748 7.30322 17.6748 2.80322 12.1748 2.80322ZM10.1748 17.8032L5.1748 12.8032L6.5848 11.3932L10.1748 14.9732L17.7648 7.38322L19.1748 8.80322L10.1748 17.8032Z" fill="url(#paint0_linear_61_2774)" fillOpacity="0.8"/>
<defs>
<linearGradient id="paint0_linear_61_2774" x1="1.17223" y1="1.6214" x2="23.4562" y2="22.1663" gradientUnits="userSpaceOnUse">
<stop stopColor="#F16633"/>
<stop offset="1" stopColor="#FD2D7D"/>
</linearGradient>
</defs>
</svg>

            <p>Leveraging tech to give out the best price</p>
          </div>
          <div className="flex gap-3">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1748 2.80322C6.6748 2.80322 2.1748 7.30322 2.1748 12.8032C2.1748 18.3032 6.6748 22.8032 12.1748 22.8032C17.6748 22.8032 22.1748 18.3032 22.1748 12.8032C22.1748 7.30322 17.6748 2.80322 12.1748 2.80322ZM10.1748 17.8032L5.1748 12.8032L6.5848 11.3932L10.1748 14.9732L17.7648 7.38322L19.1748 8.80322L10.1748 17.8032Z" fill="url(#paint0_linear_61_2774)" fillOpacity="0.8"/>
<defs>
<linearGradient id="paint0_linear_61_2774" x1="1.17223" y1="1.6214" x2="23.4562" y2="22.1663" gradientUnits="userSpaceOnUse">
<stop stopColor="#F16633"/>
<stop offset="1" stopColor="#FD2D7D"/>
</linearGradient>
</defs>
</svg>

            <p>Reliable Booking and Hassle-free Refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundedMobile;
