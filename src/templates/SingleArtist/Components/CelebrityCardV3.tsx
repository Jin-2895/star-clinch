/* eslint-disable react/prop-types */
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Props = {
  name?: string;
  bookingDate?: string;
  img?: string;

}

const CelebrityCardV3 = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center max-w-[539px] max-h-[810px] px-8 rounded-xl overflow-hidden shadow-lg bg-[#0c0a15] rounded-b-full relative">
      <div className="flex flex-col justify-center items-center">
        <div
          className="max-w-[423px] max-h-[426px] w-full overflow-hidden rounded-t-full rounded-br-full "
          style={{
            background:
              'linear-gradient(to top, rgba(255, 253, 253, 0.36) , rgba(150, 253, 191, 0.8), rgba(89, 143, 67, 0.8)), linear-gradient(to top, #FFFDFD5C 36%, #96FDBFCC 80%, #598F43CC 80% , #25292CCC 80%)',
          }}
        >
          <Image
            width={1000}
            height={1000}
            src={props.img ? props.img : ""}
            className="w-full h-full p-2 rounded-t-full rounded-br-full"
            alt="Bharti Singh"
          />
        </div>
        <div className="pt-14 max-w-[363.75px]">
          <div className="font-normal leading-[58.09px] text-[48px] mb-2 text-white">
            Did you Know?
          </div>
          <p className="text-center pt-6 font-normal text-[24px] leading-tight text-white">
            Ali ASGAR was the most booked artist of this month with 8+ bookings
          </p>
        </div>
        <div className="pt-4 pb-2">
          <Link href={"/artist-profile"} className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full">
            <h1 className="text-[24px] font-normal">See Price and Book</h1>
            <FaArrowRightLong className="text-[22px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export {CelebrityCardV3}