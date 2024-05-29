import { Section3Heading, Section5Data } from '@/types/types';
import React from 'react'
import ClientInfoMobile from './ClientInfoMobile';



type IProfileClientProps = {
  sectionFiveHeadings: Section3Heading[] | null;
  sectionFiveData: Section5Data[] | null
  value:string
}
const ProfileClientMobile = ({ sectionFiveData}: IProfileClientProps) => {
  return (
    <div>
      <p className='text-white text-center mx-8 text-[32px] leading-[38px] my-8'>
      High Profile Clients Trust Us
      </p>
      
      <div className='h-[442px] p-[0.9px] rounded-t-xl bg-gradient-to-t mx-6 from-[#00000000] via-[#00000000] to-[#847878]'>
      <div className='h-full rounded-t-xl  w-full  bg-[#080810]'>
      <div className=' w-full relative h-full rounded-t-xl bg-gradient-to-r from-white-0 via-white-10 to-white-0'>
        <img className='absolute top-5  right-5' src="assets/comma.png" alt="" />
<div className='h-full w-full '>
<ClientInfoMobile sectionFiveData={sectionFiveData}/>
  </div>        
      </div>
      </div>
      </div>

      
    </div>
  )
}

export default ProfileClientMobile