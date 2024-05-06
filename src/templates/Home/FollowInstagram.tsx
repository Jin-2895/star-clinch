import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { TfiTwitterAlt } from 'react-icons/tfi'


const FollowInstagram = () => {
  return (
    <div className="footer mt-40 mb-20 ">
    <div className="bg-gradient-to-l from-[rgba(13,13,18,0)] via-[rgba(18,18,33,1)] to-[rgba(24,24,41,0)] p-10 mx-10 rounded-t-[160px] flex justify-between  relative ">
      <div className=" absolute z-10 max-w-[645px] max-h-[645px]  bottom-0  p-px bg-gradient-to-b from-[rgba(78,77,100,1)] to-[rgba(0,0,0,0)] rounded-tr-[400px] rounded-b-[400px] ">
        <div
          className=" relative w-auto h-auto  rounded-tr-[400px] rounded-b-[400px]  bg-[rgba(11,16,37,0.3)] backdrop-blur-3xl flex flex-col items-center overflow-hidden"
          style={{
            boxShadow:
              'inset 10px 55px 90px  rgba(0, 0, 0, 0.93), inset 74px 60px 79px rgba(0, 0, 0, 0.93)',
          }}
        >
          <div className="opacity-35 rounded-tl-full rounded-b-full w-[257px] h-[251px] bg-gradient-to-b from-[rgba(148,76,102,1)] to-[rgba(9,2,7,0)] absolute bottom-0 left-0"></div>
          <div className="flex flex-col gap-20 py-[163px] px-[124px] max-w[356px] absolute z-10">
            <h1 className="text-[48px] text-[rgba(255,255,255,0.9)] ">
              Your gateway to celebrity enchantment.
            </h1>
            <h1 className="text-[24px] leading-[29.05px]">
              India's Largest Marketplace for Professional Artists-
              Starclinch
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[371px] h-[362px] rounded-full bg-gradient-to-t from-[rgba(183,131,17,1)] to-[rgba(148,106,76,0)] absolute bottom-0 left-[26rem] opacity-20"></div>
      <div className="flex flex-col gap-12 ml-[50rem]">
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] font-normal leading-[38.73px] text-[rgba(255,255,255,0.9)] ">
            {' '}
            Follow us On
          </h1>
          <div className="flex gap-4 bg-[#141414] w-fit py-4 px-4 rounded-lg">
            <FaFacebook className="text-[24px]" />
            <TfiTwitterAlt className="text-[24px]" />
            <BsYoutube className="text-[24px]" />
            <IoLogoInstagram className="text-[24px]" />
          </div>
        </div>
        <div className="flex gap-[84px] w-fit">
          <div className="flex flex-col gap-4 text-[24px] leading-[29.05px] opacity-80">
            <p>For Buyers</p>
            <p>Our Buyers</p>
            <p>Browse</p>
            <p>
              Post your <br /> Requirement
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[24px] leading-[29.05px]">
            <p>For Buyers</p>
            <p>Our Buyers</p>
            <p>Browse</p>
            <p>Post your Requirement</p>
          </div>
          <div className="flex flex-col gap-4 text-[24px] leading-[29.05px]">
            <p>Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Disclaimer</p>
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
  )
}

export {FollowInstagram}