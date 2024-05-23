import ClientsLogo from '@/public/clients/Airbnb';
import { Section3Heading, Section4Image } from '@/types/types';
import React from 'react'
import { motion } from "framer-motion";



type Props = {

  sectionFourHeadings?: Section3Heading[] | null;
  sectionFourImages?: Section4Image[] | null;
};
const ClientMobile = (props: Props) => {
  return (
    <div className='relative h-[392px] my-11' >
<img className='absolute bottom-0 left-16' src="assets/clientcircle2.png" alt="" />
<img className='absolute bottom-0 left-0' src="assets/clientcircle.png" alt="" />
<img className='absolute top-0 right-20' src="assets/clientcircle4.png" alt="" />
<img className='absolute top-0 right-0' src="assets/clientcircle3.png" alt="" />
 
   
<div className='w-full relative flex justify-center top-16'>
<p className='text-[32px] text-white  mx-auto '>Our Clients</p>
</div>
      <div className="relative w-full top-28 overflow-hidden z-10">
  
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex gap-2"
          animate={{
            x: [`-100%`, `0%`],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {props?.sectionFourImages &&
            props?.sectionFourImages?.map(
              (image: { value: string; name: string }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width:"110px" }}
                >
                  <div className="flex flex-col items-center justify-center   ">
                    <ClientsLogo image={image} />
                  </div>
                </div>
              )
            )}
        </motion.div>
        <motion.div
          className="flex gap-8"
          animate={{
            x: [`0%`, `-100%`],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {props?.sectionFourImages &&
            props?.sectionFourImages?.map(
              (image: { value: string; name: string }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: "110px" }}
                >
                  <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
                    <ClientsLogo image={image} />
                  </div>
                </div>
              )
            )}
        </motion.div>
        <motion.div
          className="flex gap-8"
          animate={{
            x: [`-100%`, `0%`],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {props?.sectionFourImages &&
            props?.sectionFourImages?.map(
              (image: { value: string; name: string }, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: "110px" }}
                >
                  <div className="flex flex-col items-center justify-center max-w-[12rem] max-h-[12rem]">
                    <ClientsLogo image={image} />
                  </div>
                </div>
              )
            )}
        </motion.div>
        
       
      </div>
    </div>
  )
}

export default ClientMobile