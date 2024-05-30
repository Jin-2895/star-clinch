import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 2, 1],
        opacity: 1,
        borderRadius: ["30%", "30%", "30%", "30%", "30%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center h-screen"
    >
      <div className="absolute border border-[#333333]/10 rounded-full h-[150px] w-[150px] animate-ping" />
      <div className="absolute border border-[#333333]/20 rounded-full h-[250px] w-[250px]" />
      <div className="absolute border border-[#333333]/30 rounded-full h-[450px] w-[450px]" />
      <div className="absolute border border-dashed border-gray-500 rounded-full h-[600px] w-[600px] animate-pulse opacity-10" />
      <div className="absolute border border-[#333333] rounded-full h-[850px] w-[850px] opacity-20" />
      <div className="absolute">
        <div className="relative h-[800px] w-[800px]">
          <div className="absolute bg-transparent border-gray-100/10 border-[1px] left-5 top-[120px] z-10 p-px rounded-full backdrop-blur-xl rotate-12">
            <h1 className="text-[20px] leading-[28px] font-[400] text-white px-10 py-2 rounded-full bg-[#ffffff09] backdrop-blur-xl">
              <span className="text-white">Dynamic</span>
            </h1>
          </div>
          <div className="absolute bg-transparent border-gray-100/10 border-[1px] right-5 top-[120px] z-10 p-px rounded-full backdrop-blur-xl -rotate-12">
            <h1 className="text-[20px] leading-[28px] font-[400] text-white px-10 py-2 rounded-full bg-[#ffffff09] backdrop-blur-xl">
              <span className="text-white">Impactful</span>
            </h1>
          </div>
          <div className="absolute bg-transparent border-gray-100/10 border-[1px] left-5 bottom-[120px] z-10 p-px rounded-full backdrop-blur-xl rotate-6">
            <h1 className="text-[20px] leading-[28px] font-[400] text-white px-10 py-2 rounded-full bg-[#ffffff09] backdrop-blur-xl">
              <span className="text-white">Innovative</span>
            </h1>
          </div>
          <div className="absolute bg-transparent border-gray-100/10 border-[1px] right-5 bottom-[120px] z-10 p-px rounded-full backdrop-blur-xl -rotate-6">
            <h1 className="text-[20px] leading-[28px] font-[400] text-white px-10 py-2 rounded-full bg-[#ffffff09] backdrop-blur-xl">
              <span className="text-white">Empowered</span>
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
