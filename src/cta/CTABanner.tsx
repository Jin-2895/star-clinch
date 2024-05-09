import type { ReactNode } from "react";
import React  from "react";

type ICTABannerProps = {
  title?: string;
  subtitle?: string;
  section?: ReactNode;
  style?: string;
  titleflex?: string;
};



const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col justify-between gap-14 col-span-6 relative">
    <div className="text-2xl font-semibold flex flex-row justify-between w-full px-4">
    {props?.title && (
      <div className={`text-white text-[64px] font-light leading-tight  ${props?.subtitle ? "text-center w-[35rem]" : props.titleflex ? props.titleflex : "text-start"}`}>
        {props?.title}
      </div>
    ) }
      {props?.subtitle && (
        <div className="text-white w-[30rem] text-[24px] font-light leading-tight flex justify-center items-center">
        {props?.subtitle}
      </div>
      )}
      
    </div>
    {props?.section && (
      <div className={`whitespace-no-wrap mt-3 sm:mt-0 ${props.style}`}>
        {props?.section}
      </div>
    )}
    

  </div>
);

export { CTABanner };
