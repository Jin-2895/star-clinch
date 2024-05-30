import { Section } from "@/layout/Section";
import React from "react";
import BackgroundCircles from "./Components/BackgroundCircles";
import { motion } from "framer-motion";
import Founder from "./Components/Founder";
import Link from "next/link";
// import { Squad } from "./Components/Squad";
import SquadSlider from "./Components/SquadSlider";

const OurTeam = () => {
  return (
    <div>
      <Section>
      <div className="flex justify-center items-center">
        <BackgroundCircles />
        <div className="absolute">
          <h1 className="text-[127px] leading-[184px] font-[400] text-white text-center max-w-[80rem]">
            One Team,Infinite Possibilities
          </h1>
        </div>
        <div className="absolute bottom-0">
          <h1 className="text-[24px] font-[400] leading-[29.05px] text-white text-center px-[10rem] ">
            We&lsquo;re a supportive community where each member&lsquo;s talents are not
            just recognized but celebrated. Through collaboration and
            encouragement, we unlock the boundless potential within every team
            member, empowering them to explore new horizons and achieve
            remarkable success.
          </h1>
          <Link href={"#Founder"} className="flex flex-row gap-3 justify-center items-center py-4">
            <button className="text-[#EC2179] text-[24px] lieading-[29.05px] font-[400]">Get to know us</button>
            <motion.svg
            animate={{
              y: [0, 5],
              transition: {
                  ease: 'linear',
                  duration: 2,
                  repeat: Infinity,
              }
            }}
            className="cursor-pointer"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1222 27.0381C14.7226 27.5819 13.9102 27.5819 13.5106 27.0381L3.36197 13.2269C2.87669 12.5665 3.34827 11.6348 4.16781 11.6348L24.465 11.6348C25.2846 11.6348 25.7561 12.5665 25.2708 13.2269L15.1222 27.0381Z"
                fill="url(#paint0_linear_282_1262)"
              />
              <path
                d="M15.1222 21.0381C14.7226 21.5819 13.9102 21.5819 13.5106 21.0381L3.36197 7.2269C2.87669 6.56648 3.34827 5.63476 4.16781 5.63476L24.465 5.63477C25.2846 5.63477 25.7561 6.56649 25.2708 7.2269L15.1222 21.0381Z"
                fill="url(#paint1_linear_282_1262)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_282_1262"
                  x1="14.3164"
                  y1="39.1348"
                  x2="14.3164"
                  y2="6.13476"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9346A" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_282_1262"
                  x1="14.3164"
                  y1="33.1348"
                  x2="14.3164"
                  y2="0.134764"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C9346A" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>
          </Link>
        </div>
      </div>
    </Section>
    <div id="Founder">
      <Founder />
    </div>
    <div id="Squad">
      {/* <Squad />  */}
      <SquadSlider />
    </div>
    </div>
  );
};

export { OurTeam };
