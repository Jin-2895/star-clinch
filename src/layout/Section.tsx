import { motion } from "framer-motion";
import type { ReactNode } from "react";
import React from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  innerYPadding?: string;
  innerXPadding?: string;
  screen?: string;
  xMargin?: string;
  children: ReactNode;
  titleflex?: string
  marque?:boolean;
};

const marqueeVariants = {
  animate: {
    x: [-1000, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        // ease: "linear",
      },
    },
  },
};

const marqueeVariants2 = {
  animate: {
    x: [-900, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        // ease: "linear",
      },
    },
  },
};



const Section = (props: ISectionProps) => (
  <div
    className={`${props.xMargin ? props.xMargin : "mx-auto"} ${props.screen ? props.screen : "max-w-screen-xl"} relative ${
      props.yPadding
    }`}
  >
    
    {(props.title || props.description) && (
      <div
        className={`mb-12 ${props.titleflex? props.titleflex : "text-center"} ${props?.innerYPadding ? props?.innerYPadding : ""} ${props?.innerXPadding ? props?.innerXPadding : ""}`}
      >
        {props.title && (
          <h2 className={`text-4xl font-bold text-gray-900 ${props?.titleflex ? props?.titleflex : ""}`}>{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}
    {props.marque && (
      <div className="relative w-full overflow-hidden col-span-3">
        <div className="absolute left-0 top-[15%] w-full rotate-[-35deg]">
      {/* 3. Using framer motion */}

      <motion.div
        className=" flex flex-row gap-4 bg-gradient-to-b from-transparent via-[#FFFFFF20] to-transparent border-2 border-black py-2 w-full min-w-[200rem]"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
          HEADLIGHTS OF TODAY
        </h1>
        <div className="min-w-[4rem]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </motion.div>
    </div>
        </div>
    )}
    {props.children}
    {props.marque && (
      <div className="relative w-full overflow-hidden col-span-3">
         <div className="rotate-[-35deg] w-full absolute right-0 bottom-[5%]">
       {/* 3. Using framer motion */}
       <motion.div
         className=" flex flex-row gap-4 bg-gradient-to-b from-transparent via-[#FFFFFF20] to-transparent border-2 border-black py-2 w-full min-w-[200rem]"
         variants={marqueeVariants2}
         animate="animate"
       >
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
         <h1 className="text-white w-full text-center min-w-[20rem] flex justify-center items-center font-500 text-[25px]">
           HEADLIGHTS OF TODAY
         </h1>
         <div className="min-w-[4rem]">
           <svg
             width="36"
             height="36"
             viewBox="0 0 36 36"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M17.6701 0.429685L22.3925 13.1931L35.1546 17.9159L22.3925 22.6388L17.6701 35.4022L12.9477 22.6388L0.185544 17.9159L12.9477 13.1931L17.6701 0.429685Z"
               fill="white"
               fillOpacity="0.8"
             />
           </svg>
         </div>
       </motion.div>
     </div>
        </div>
    )}
  </div>
);

export { Section };
