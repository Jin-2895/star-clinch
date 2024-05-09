import { Background } from "../background/Background";
import { FaFacebook } from "react-icons/fa6";
import { TfiTwitterAlt } from 'react-icons/tfi';
import { BsYoutube } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io5';
import React from "react";

const Footer = () => (
  <Background color="bg-[#080810]">
      <div className="footer mt-40 ">
        <div className="bg-gradient-to-l from-[rgba(13,13,18,0)] via-[rgba(18,18,33,1)] to-[rgba(24,24,41,1)] p-16 rounded-t-[160px] flex justify-between  relative ">
          <div className="inner-shadow-3 absolute min-w-[620px] min-h-[580px] drop-shadow-2xl  bottom-16  p-px bg-gradient-to-b from-[rgba(24,24,41,1)] to-[#000000ED] rounded-tr-[400px] rounded-b-[400px]">
            <div
              className="relative bg-[rgba(11,16,37)] backdrop-blur-3xl flex flex-col items-center"
            >
              <div className="absolute flex flex-col gap-10 max-w-[356px] z-10 mt-24">
                <h1 className="text-[48px] text-[rgba(255,255,255,0.9)] leading-tight ">
                  Your gateway to celebrity enchantment.
                </h1>
                <h1 className="text-[24px] leading-tight text-white">
                  India&apos;s Largest Marketplace for Professional Artists-
                  Starclinch
                </h1>
              </div>
            </div> 
            
          </div>
          <div className="opacity-35 rounded-tl-full rounded-b-full w-[257px] h-[251px] bg-gradient-to-b from-[rgba(148,76,102,1)] to-[rgba(9,2,7,0)] absolute bottom-0 left-0"></div>
          <div className="w-[371px] h-[362px] rounded-full bg-gradient-to-t from-[rgba(183,131,17,1)] to-[rgba(148,106,76,0)] absolute bottom-0 left-[26rem] opacity-20"></div>
          <div className="flex flex-col gap-12 ml-[50rem]">
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] font-normal leading-[38.73px] text-[rgba(255,255,255,0.9)] ">
                Follow us On
              </h1>
              <div className="flex gap-4 bg-[#141414] w-fit py-4 px-4 rounded-lg">
                <FaFacebook className="text-[24px] text-white" />
                <TfiTwitterAlt className="text-[24px] text-white" />
                <BsYoutube className="text-[24px] text-white" />
                <IoLogoInstagram className="text-[24px] text-white" />
              </div>
            </div>
            <div className="flex gap-[84px] w-fit">
              <div className="flex flex-col gap-4 text-[24px] leading-[29.05px] opacity-80">
                <p className="text-white text-xl ">For Buyers</p>
                <p className="text-white text-xl ">Our Buyers</p>
                <p className="text-white text-xl ">Browse</p>
                <p className="text-white text-xl ">
                  Post your <br /> Requirement
                </p>
              </div>
              <div className="flex flex-col gap-4 text-[24px] leading-[29.05px]">
                <p className="text-white text-xl ">For Buyers</p>
                <p className="text-white text-xl ">Our Buyers</p>
                <p className="text-white text-xl ">Browse</p>
                <p className="text-white text-xl ">Post your Requirement</p>
              </div>
              <div className="flex flex-col gap-4 text-[24px] leading-[29.05px]">
                <p className="text-white text-xl ">Policy</p>
                <p className="text-white text-xl ">Privacy Policy</p>
                <p className="text-white text-xl ">Terms of Use</p>
                <p className="text-white text-xl ">Disclaimer</p>
              </div>
            </div>
            <div>
              <p className="text-[16px] leading-[19.36px] text-[rgba(255,255,255,0.24)]">
                © Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
  </Background>
);

export { Footer };
