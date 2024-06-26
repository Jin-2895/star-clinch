import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

type Props = {
  name?:string;
  bookingDate?:string;
  img?:string;
}

const CelebrityCardV4 = (props: Props) => {
  return (
    <div className="flex flex-col justify-start max-w-[539px] max-h-[797px] p-8 rounded-[32px] overflow-hidden shadow-lg bg-[#1a1628] ">
      <div className="flex flex-col justify-center">
        <div className="max-w-[491px] max-h-[491px] w-full overflow-hidden rounded-t-full rounded-br-full">
          <img src={props.img} className="w-full h-full" alt="Bharti Singh" />
        </div>
        <div className="pt-10">
          <div className="font-normal leading-[58.09px] text-[48px] mb-2 text-white">
            {props.name}
          </div>
          <p
            className=" font-normal text-[24px]"
            style={{
              background: 'linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Recently booked{' '}
            <span className="font-bold">{props.bookingDate}</span>
          </p>
        </div>
        <div className=" pt-4 pb-2">
          <button className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full">
            <h1 className="text-[24px] font-normal">See Price and Book</h1>
            <FaArrowRightLong className="text-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { CelebrityCardV4 }