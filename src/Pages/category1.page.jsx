import Carousel from '../components/category1.page/carousel';
import Navbar from '../components/homepage/Navbar';
import artistImage from '../assets/celebrities/artist.png';
import artistImage1 from '../assets/celebrities/artist2.png';
import { useState } from 'react';

export default function Category1page() {
  const [carouselVisible, setCarouselVisible] = useState(false);

  return (
    <div className="flex flex-col justify-start w-full mx-auto  ">
      <Navbar />
      <div className="gradient-class sm:none  max-h-[800px]">
        {carouselVisible ? (
          <div className="grid grid-cols-1 gap-96 overflow-hidden max-h-[645px] mt-40 justify-items-center">
            <div className=" max-w-full mb-40">
              <Carousel />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-96 overflow-hidden max-h-[645px] mt-40 justify-items-center">
            <div className="hidden lg:block md:none sm:none inset-0 bg-gradient-to-b from-[#FF8761] to-[#080810]  rounded-tr-full w-[530px] h-[473.69px] ml-[-130px] mt-[130px]  "></div>
            <div className=" max-w-full mb-0">
              {/* here will be static cards*/}
            </div>
            <div className=" inset-0 bg-gradient-to-b from-[#FF81E3] to-[#080810]  rounded-t-[600px] w-[614px] h-[614px] mr-[-240px] mt-10 "></div>
          </div>
        )}
      </div>
      {!carouselVisible && (
        <div className="my-0  gap-4 flex flex-col items-center justify-center ">
          <h1 className="text-[80px] leading-[96.82px] text-center">
            Explore our{' '}
            <span className="text-red-500">
              top <br />
            </span>{' '}
            <span className="text-red-500">performing</span> categories
          </h1>
          <button
            onClick={() => setCarouselVisible(true)}
            className="py-4 px-8 rounded-full text-white bg-gradient-to-r from-pink-300 to-[#f16633]"
          >
            <p className="text-[24px]">View our top performing categories</p>
          </button>
        </div>
      )}

      <div className="mx-auto mt-40 bg-[#080810]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-2 mx-2 justify-items-center">
          {/* First Row */}

          <div className="max-w-[538.67px] max-h-[810.62px] rounded-xl overflow-hidden relative">
            <img
              src={artistImage}
              alt="Comedian 1"
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-10 left-2 w-full text-start text-[48px] leading-[58.09px] font-normal  bg-opacity-50 py-2 px-4 text-white">
              Comedians
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
          </div>

          {/* 2nd Row */}

          <div className="grid grid-rows-2 gap-4">
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
            <div className="max-w-[538.67px max-h-[389.29px] rounded-xl overflow-hidden">
              <img src={artistImage} alt="Artist 1" />
            </div>
          </div>
          <div className="max-w-[538.67px] max-h[810.62px] rounded-xl overflow-hidden">
            <img src={artistImage} alt="Comedian 1" />
          </div>
          {/* 3rd Row */}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden ">
            <img src={artistImage1} alt="Artist 1" />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden">
            <img src={artistImage1} alt="Artist 1" />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden ">
            <img src={artistImage1} alt="Artist 1" />
          </div>
          <div className="max-w-[824px] max-h-[389.29px] rounded-xl overflow-hidden">
            <img src={artistImage1} alt="Artist 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
