import { Section } from "@/layout/Section";
import { motion } from "framer-motion";
import React from 'react';


const text = "We are the only VC Funded Ent-Tech startup in Asia".split(" ")

const Funded = () => (
  <Section innerXPadding="10rem" yPadding="py-24">
    <div className="relative flex flex-col items-center justify-center font-bold text-white overflow-hidden">
      <div className=" relative flex w-[500px] flex-col items-center overflow-hidden mt-[15rem] z-10 gap-10">
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-center">
            {text.map((el: string, i: number) => (
                    <motion.span
                    className="text-white text-[40px]"
                      key={i}
                      whileInView="visible"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: i / 2,
                      }}
                    >
                      {el}{" "}
                    </motion.span>
                  ))}
          </h1>
          
          <button className="mt-10 text-[20px] px-10 py-6 border-[1px] rounded-full bg-gradient-to-br from-black via-gray-800 to-gray-900 border-gray-600 ">
            Read More
          </button>
        </div>
      </div>
      <div className="inner-shadow rounded-t-full top-0 absolute shadow-2xl w-[65%] h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl -z-20"></div>
      <div className="inner-shadow rounded-t-full top-[4rem] absolute shadow-2xl w-[60%] h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl -z-20"></div>
      <div className="inner-shadow rounded-t-full top-[8rem] absolute shadow-2xl w-[55%] h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl -z-20"></div>
      <div className="inner-shadow rounded-t-full top-[10rem] absolute shadow-2xl w-[45%] h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl bg-gradient-to-b from-[#BB423F] via-[#833254] to-transparent -z-20"></div>
      <div className="absolute flex -bottom-36 left-52 justify-center items-center -z-10">
        <div className="w-[15rem] h-[15rem] rotate-[55deg] bg-gradient-to-br from-[#6f771a67] via-[#00000000] to-transparent bg-opacity-100/50 backdrop-blur-xl"></div>
      </div>
      <div className="absolute flex -bottom-8 right-44 justify-center items-center -z-30">
        <div className="w-[15rem] h-[15rem] rounded-full bg-gradient-to-b from-[#6f771a67] via-[#00000000] via-80% to-transparent bg-opacity-100/50 backdrop-blur-xl"></div>
      </div>
    </div>
  </Section>
);

export { Funded };
