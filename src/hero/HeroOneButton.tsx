import type { ReactNode } from "react";

import CelebOne from "@/public/celebrities/CelebOne";
import CelebOneCopy from "@/public/celebrities/CelebOneCopy";
import Celebthree from "@/public/celebrities/Celebthree";
import CelebTwo from "@/public/celebrities/CelebTwo";
import CelebTwoCopy from "@/public/celebrities/CelebTwoCopy";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <div className="relative flex flex-col items-center justify-center font-bold text-white overflow-hidden">
    <div className=" relative flex w-[1000px] flex-col items-center overflow-hidden rounded-t-[580px] mt-[5rem] py-36 z-20">
      <div className="relative text-center">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
          <svg
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9431 31.4419L22.9596 22.4583M4.99243 14.972C4.99243 16.3484 5.26353 17.7113 5.79024 18.9829C6.31695 20.2545 7.08896 21.4099 8.06219 22.3831C9.03543 23.3563 10.1908 24.1283 11.4624 24.655C12.734 25.1818 14.0969 25.4529 15.4733 25.4529C16.8496 25.4529 18.2125 25.1818 19.4841 24.655C20.7557 24.1283 21.9111 23.3563 22.8843 22.3831C23.8575 21.4099 24.6296 20.2545 25.1563 18.9829C25.683 17.7113 25.9541 16.3484 25.9541 14.972C25.9541 13.5957 25.683 12.2328 25.1563 10.9612C24.6296 9.6896 23.8575 8.53421 22.8843 7.56097C21.9111 6.58774 20.7557 5.81573 19.4841 5.28902C18.2125 4.76231 16.8496 4.49121 15.4733 4.49121C14.0969 4.49121 12.734 4.76231 11.4624 5.28902C10.1908 5.81573 9.03543 6.58774 8.06219 7.56097C7.08896 8.53421 6.31695 9.6896 5.79024 10.9612C5.26353 12.2328 4.99243 13.5957 4.99243 14.972Z"
              stroke="white"
              strokeWidth="0.912393"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for an artist, category ...."
          className="bg-blur-md flex min-w-[32rem] rounded-full  border-[2px] bg-transparent py-4 pl-20 pr-1 text-[28px] font-light text-white opacity-35 outline-none"
        />
      </div>

      <div className="pt-5">
        <h1 className="my-8 text-center text-[5rem] font-normal leading-[125.86px] text-white">
          {props?.title}
        </h1>
        <p className="text-center text-[48px] font-normal leading-[58.09px] text-white">
          {props?.description}
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-center gap-4">
          <div className="flex justify-end items-end overflow-hidden ">
            <CelebOne />
          </div>
          <div className="flex items-end  gap-4">
            <div className="flex w-auto flex-col gap-2">
                <CelebTwo />
                <Celebthree />
            </div>
              <CelebOneCopy />
          </div>
          <div className="mt-20 flex flex-col items-end gap-4">
            <div className=" overflow-hidden rounded-l-[140px]">
              <CelebTwoCopy />
            </div>
            <div className="">
              <Celebthree />
            </div>
          </div>
        </div>
      </div>
      <div className="inner-shadow-2 rounded-t-full top-0 absolute shadow-2xl w-[90%] h-[90.6%] bottom-0 left-1/2 transform -translate-x-1/2 -z-10 bg-opacity-100/50 backdrop-blur-xl"></div>
    </div>
    <div className="inner-shadow rounded-t-full -top-28 absolute shadow-2xl w-full h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
    <div className="inner-shadow rounded-t-full -top-14 absolute shadow-2xl w-[90%] h-[95.6%] bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
    <div className="inner-shadow rounded-t-full -top-0 absolute shadow-2xl w-[80%] h-[91.3%] bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
  </div>
);

export { HeroOneButton };
