import { Section } from "@/layout/Section";
import { motion } from "framer-motion";
import React from "react";

const Commitment = () => (
  <Section >
    <div className="flex xl:flex-row flex-col justify-between w-full border-gray-900 border-2 px-16 rounded-[5rem] p-16">
      <div>
        <h1 className="text-[48px] leading-[58.09px] text-white">
          Committed {""}
          <span className="opacity-40">
            to <br />
            excellence
          </span>
          {""} since <br />
          <span className="text-[180px] leading-[217.84px]">2015.</span>
        </h1>
      </div>
      <div className="flex gap-4 justify-end">
        <div className="flex flex-col gap-4 justify-end items-end">
          <div className="p-1 w-fit bg-gradient-to-l from-[rgba(255,253,253,0.36)] via-[rgba(150,253,191,0.8)] vi-[rgba(89,143,67,0.8)] to-[rgba(37,41,44,0.8)] rounded-[40px] overflow-hidden ">
            <div className="py-5 px-3 xl:px-6  xl:py-10 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-[80px] leading-[96.82px] text-white">
                  12k +
                </h1>
                <h1 className="text-[32px] leading-[38.73px] text-white">
                  Total Perfomances
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="p-1 bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
            <div className="px-10 py-2 xl:px-20 xl:py-4 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-[80px] leading-[96.82px] text-white">
                  12k +
                </h1>
                <h1 className="text-[32px] leading-[38.73px] text-white">
                  Total Perfomances
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-1 bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
            <div className="px-10 py-4 xl:px-20 xl:py-8 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-[80px] leading-[96.82px] text-white">
                  12k +
                </h1>
                <h1 className="text-[32px] leading-[38.73px] text-white">
                  Total Perfomances
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[rgba(98,204,147,1)] to-transparent absolute bottom-0 left-0 w-[124.5px] h-[305.79px] rounded-tr-[200px] opacity-90"></div>
            <div className="relative py-12 xl:py-24 rounded-tl-[200px] overflow-hidden bg-gradient-to-br  from-[rgba(255,227,226,0.34)] via-[rgba(241,102,51,0.34)] to-[rgba(21,18,18,0.34)] backdrop-filter backdrop-blur-[40px] opacity-90">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-[80px] leading-[96.82px] text-white">
                  19k +
                </h1>
                <h1 className="text-[32px] leading-[38.73px] text-white">
                  Total Performances
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="p-1 bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
            <div className="py-2 px-12 xl:px-20 xl:py-4 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
              <motion.div
                whileInView="visible"
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeIn" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-[80px] leading-[96.82px] text-white">
                  12k +
                </h1>
                <h1 className="text-[32px] leading-[38.73px] text-white">
                  Total Perfomances
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { Commitment };
