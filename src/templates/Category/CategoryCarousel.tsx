
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import type { Settings } from 'react-slick';

const CategoryCarousel = () => {
  
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
  };

  return (
      <Slider {...settings}>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
              width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden px-3">
            <Image
            width={1000}
              height={1000}
              className="hover:scale-105 transition-transform duration-300 rounded-xl w-[420px] h-[500px] object-cover"
              src="/celebrities/zakirKhan.jpeg"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="text-[54px] leading-[65.35px] font-normal mb-2">
                  Comedians
                </h2>
                <p className="text-lg leading-[21.78px">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex gap-4  h-[50px] items-center border-[1px] w-[150px] text-[22px] rounded-full border-white bg-transparent text-white px-8  hover:bg-pink-700 text-start">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
      </Slider>
  );
}

export { CategoryCarousel }