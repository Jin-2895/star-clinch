import React, { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerSlider from "./BannerSlider";
import { Section2Video } from "@/types/types";

type IBannerProps = {
  sectionTwoVideos: Section2Video[] | null;
};

const BannerMobile = ({ sectionTwoVideos }: IBannerProps) => {
  console.log(sectionTwoVideos);

  const [sideText, setSideText] = useState<string[] | undefined>(
    sectionTwoVideos ? sectionTwoVideos[0]?.name.split("  ") : undefined
  );
  console.log(sideText);

  return (
    <div className="flex flex-col gap-4 my-6 ">
      <div className="mx-8 mb-6 flex flex-col gap-4">
        <p className="font-normal text-[32px] leading-[38.73px] text-white">
          Look What Stars have to say
        </p>
        <p className="font-normal text-[16px] leading-[19.3px] opacity-50 text-white">
          Top celebrities share their thoughts on working with StarClinch.
        </p>
      </div>
      <div className="relative">
        <BannerSlider
          sectionTwoVideos={sectionTwoVideos}
          setSideText={setSideText}
        />
      </div>
      <div className="h-[294px] w-full relative">
        <div className="absolute bottom-0 left-0">
        <svg width="129" height="294" viewBox="0 0 129 294" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_61_2719)">
<path d="M-25 0C60.0518 0 129 68.9482 129 154V294H-25V0Z" fill="url(#paint0_linear_61_2719)" fillOpacity="0.72"/>
</g>
<defs>
<filter id="filter0_b_61_2719" x="-50" y="-25" width="204" height="344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_61_2719"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_61_2719" result="shape"/>
</filter>
<linearGradient id="paint0_linear_61_2719" x1="81.7477" y1="16.6865" x2="-63.9367" y2="128.718" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF774C"/>
<stop offset="0.549447" stopColor="#99386C"/>
<stop offset="1" stopColor="#080810"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className="absolute bottom-0 z-10  left-16 w-[200px]">
        <svg width="343" height="269" viewBox="0 0 343 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_61_2737)">
<g clipPath="url(#clip0_61_2737)">
<path d="M0.174805 158.421C0.174805 150.118 0.174805 145.966 0.340269 142.457C3.96201 65.6582 65.4048 4.21543 142.204 0.593687C145.712 0.428223 149.864 0.428223 158.168 0.428223H342.175V234.704C342.175 236.487 342.175 237.378 342.139 238.132C341.362 254.62 328.17 267.811 311.682 268.589C310.929 268.624 310.038 268.624 308.255 268.624H0.174805V158.421Z" fill="url(#paint0_linear_61_2737)" fillOpacity="0.1"/>
</g>
<path d="M0.674805 158.421C0.674805 150.112 0.674945 145.974 0.839714 142.481C4.4493 65.9394 65.686 4.70272 142.227 1.09313C145.721 0.928363 149.858 0.928223 158.168 0.928223H341.675V234.704C341.675 236.493 341.675 237.369 341.64 238.108C340.874 254.339 327.889 267.324 311.659 268.089C310.92 268.124 310.043 268.124 308.255 268.124H0.674805V158.421Z" stroke="url(#paint1_linear_61_2737)"/>
</g>
<defs>
<filter id="filter0_b_61_2737" x="-65.8252" y="-65.5718" width="474" height="400.196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="1" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="33"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_61_2737"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_61_2737" result="shape"/>
</filter>
<linearGradient id="paint0_linear_61_2737" x1="-16.9691" y1="-15.4197" x2="225.735" y2="346.672" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFFDFD" stopOpacity="1"/>
<stop stopColor="#FFE3E2"/>
<stop offset="0.414583" stopColor="#300F1B"/>
<stop offset="0.994177" stopColor="#151212"/>
</linearGradient>
<linearGradient id="paint1_linear_61_2737" x1="-70.2759" y1="-95.554" x2="363.865" y2="298.105" gradientUnits="userSpaceOnUse">
<stop stopColor="white" stopOpacity="1"/>
<stop offset="0.6125" stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
<clipPath id="clip0_61_2737">
<path d="M0.174805 158.421C0.174805 150.118 0.174805 145.966 0.340269 142.457C3.96201 65.6582 65.4048 4.21543 142.204 0.593687C145.712 0.428223 149.864 0.428223 158.168 0.428223H342.175V234.704C342.175 236.487 342.175 237.378 342.139 238.132C341.362 254.62 328.17 267.811 311.682 268.589C310.929 268.624 310.038 268.624 308.255 268.624H0.174805V158.421Z" fill="white"/>
</clipPath>
</defs>
</svg>



        </div>
    
        <p className="text-white z-20 absolute bottom-16 text-[18px] leading-[29px] px-24">
          Perfectly organized event
          <span className="opacity-50"> at Pune and a huge </span>
          shout out to StarClinch
          <span className="opacity-50"> for this wonderful opportunity</span>
        </p>
      </div>
    </div>
  );
};

export default BannerMobile;
