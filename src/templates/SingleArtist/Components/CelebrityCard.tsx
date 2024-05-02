import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

type Props = {
  img?: string
}


const CelebrityCard = (props: Props) => {
  return (
    <div
    className="flex flex-col justify-start max-w-[469px] p-8 rounded-xl overflow-hidden shadow-lg "
    style={{
      background:
        'linear-gradient(to bottom, rgba(12, 10, 21, 1),rgba(12, 10, 21, 0.6), rgba(12, 10, 21, 0))',
    }}
  >
    <div className="max-w-[421px] max-h-[421px] w-full overflow-hidden rounded-t-full rounded-br-full">
      <Image
        width={1000}
        height={1000}
        src={props.img}
        className="w-full h-full"
        alt="Bharti Singh"
      />
    </div>
    <div className="pt-10">
      <div className="font-normal leading-[38.73px] text-[32px] mb-2 text-white">
        Bharti Singh
      </div>
      <p
        className=" font-normal text-lg"
        style={{
          background: 'linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Recently booked <span className="font-bold">12 March</span>
      </p>
      <p className=" text-lg  font-normal mt-4">
        Renowned for her super hits, comedian show...
      </p>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input
              aria-labelledby="label1"
              checked
              type="radio"
              name="radio"
              className="checkbox appearance-none focus:opacity-100  focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full absolute cursor-pointer w-full h-full checked:border-none"
            />
            <div className="check-icon hidden bg-indigo-700 rounded-full w-full h-full "></div>
          </div>
          <label
            id="label1"
            className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
          >
            60-90 min
          </label>
        </div>
        <div className="flex items-center">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input
              aria-labelledby="label1"
              checked
              type="radio"
              name="radio"
              className="checkbox appearance-none focus:opacity-100  focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full absolute cursor-pointer w-full h-full checked:border-none"
            />
            <div className="check-icon hidden bg-indigo-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label
            id="label1"
            className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
          >
            Hindi
          </label>
        </div>
      </div>
    </div>
    <div className=" pt-4 pb-2">
      <button className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full">
        <h1 className="text-[24px] font-normal">See Price and Book</h1>
        <FaArrowRightLong className="text-[22px]" />
      </button>
    </div>
  </div>
  )
}

export { CelebrityCard }
