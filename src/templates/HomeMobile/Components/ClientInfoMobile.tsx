import { Section5Data } from '@/types/types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

type Props = {
  sectionFiveData?: Section5Data[] | null;
}

const ClientInfoMobile = ({sectionFiveData}: Props) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper05"
      >
        {sectionFiveData &&
          sectionFiveData.map(
            (slide: Section5Data, index: number) => {
              return (
                <SwiperSlide key={index} className='w-full bg-transparent mt-32 text-white h-[300px]'>
                  <div className='flex flex-col h-full justify-between pb-5 px-6 pr-16 -mt-10'>
                    <div className='text-[24px] mb-5 leading-[29px] font-normal'>{slide?.value}</div>
                    <div className='text-[16px] leading-[19px]'>{slide?.name}</div>
                  </div>
                </SwiperSlide>
              )
            }
          )
        }
      </Swiper>
    </div>
  );
}

export default ClientInfoMobile;