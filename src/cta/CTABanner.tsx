import type { ReactNode } from "react";
import React  from "react";

type ICTABannerProps = {
  title?: string | null;
  name?: string | null;
  titleStyles?: string;
  subtitle?: string | null;
  subtitleName?: string | null;
  section?: ReactNode;
  style?: string;
  titleflex?: string;
};



const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col justify-between gap-14 col-span-1 md:col-span-8 relative">
    <div className="text-2xl font-semibold flex flex-row justify-between w-full px-4 md:px-0">
    {props?.title && (
      <div className={`${props.name ? props?.name : ""} text-white text-[64px] font-[300] leading-tight  ${props?.titleStyles ? props?.titleStyles : "text-center w-[35rem]"}`}>
        {props?.title}
      </div>
    ) }
      {props?.subtitle && (
        <div className={`${props.subtitleName ? props.subtitleName : ""} text-white w-[35rem] text-[24px] font-[300] leading-tight flex justify-center items-center`}>
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
