
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

const Carousel = () => {
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
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        <div className="rounded-lg">
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[640.93px] w-[432.81px] overflow-hidden rounded-lg">
            <Image
              width={100}
              height={100}
              className="size-full object-cover"
              src="/celebrities/artist.png"
              alt="Background Image"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="mb-4">
                <h2 className="mb-2 text-[54px] font-normal leading-[65.35px]">
                  Comedians
                </h2>
                <p className="leading-[21.78px text-lg">
                  Zakir Khan being the most booked artist in the category
                </p>
              </div>
              <button className=" flex h-[50px]  w-[150px] items-center gap-4 rounded-full border-[1px] border-white bg-transparent px-8 text-start text-[22px]  text-white hover:bg-pink-700">
                <p>View</p>
                <FaArrowRightLong color="white" />
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export { Carousel };
