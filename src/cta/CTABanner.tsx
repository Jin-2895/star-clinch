import type { ReactNode } from "react";

type ICTABannerProps = {
  title?: string;
  subtitle?: string;
  section?: ReactNode;
  style?: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col justify-between gap-14">
    <div className="text-2xl font-semibold flex flex-row justify-between w-full px-4">
      <div className="text-white w-[30rem] text-[50px] font-thin leading-tight">
        {props?.title}
      </div>
      <div className="text-white w-[30rem] text-[20px] font-thin leading-tight">
        {props?.subtitle}
      </div>
    </div>
    {props?.section && (
      <div className={`whitespace-no-wrap mt-3 sm:mt-0 ${props.style}`}>
        {props?.section}
      </div>
    )}
  </div>
);

export { CTABanner };
