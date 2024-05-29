import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";


const InstagramMobile = () => {
  return (
    <div className='mt-56 flex flex-col justify-center relative'>
      <img className='' src="assets/1.svg" alt="" />
      <img className='w-full p-16 absolute top-0 flex ' src="assets/2.svg" alt="" />
      <img className='w-[70px] absolute -top-3 left-5' src="assets/3.svg" alt="" />
      <img className='w-[70px] absolute right-5 top-0' src="assets/4.svg" alt="" />
      <img className='w-[40px] absolute right-16 -top-10 opacity-50' src="assets/5.svg" alt="" />
      <div>

      </div>
      <div className='text-white p-10'>
        <p className='text-[32px] leading-[38.73px] mb-5'>Closest sneak peak to what stars have to say about us</p>
        <p className='text-[14px] leading-[16.94px] opacity-50'>From Mohit Chauhan to Zakir khan have shared their words for us. Take a quick glimpse of StarClinch world.</p>
        <div className='px-14 py-3 mt-10 text-center bg-gradient-to-r flex items-center justify-center gap-2 from-[#F16633CC] to-[#FD2D7DCC] rounded-[400px]'><img src="assets/insta.png" alt="" /> Take me to Gram  <HiArrowLongRight  size={25}/>
</div>
      </div>
    </div>
  )
}

export default InstagramMobile