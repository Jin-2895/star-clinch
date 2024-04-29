import Navbar from '../components/homepage/Navbar';
import zakirImg from '../assets/celebrities/zakirkhan1.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import circle1 from '../assets/circle.png';
import circle2 from '../assets/circle2.png';
import leftImg from '../assets/left.png';
import right1 from '../assets/right1.png';
import right2 from '../assets/right2.png';
import liveImg from '../assets/live.png';

import { useState } from 'react';

export default function CategoryDetailPage() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = index => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="container flex flex-col justify-start w-full mx-auto ">
        <Navbar />
        <div className="flex flex-col  px-[48px] py-[28px] ">
          <div className=" flex items-start justify-start max-h-[137px] py-[60px]">
            <h1
              className="text-2xl leading-[29.05px]"
              style={{ opacity: '0.5' }}
            >
              All Categories {'>'} Comedians
            </h1>
          </div>
          <div className="flex items-center justify-center gap-24">
            <div className="max-w-[535.54px] max-h-[626.68px] w-full h-full overflow-hidden rounded-t-full">
              <img src={zakirImg} className="w-full h-full object-contian" />
            </div>
            <div className="my-auto flex flex-col gap-8 justify-start">
              {' '}
              <h1 className="text-[96px] leading-[116.18px] font-normal">
                Zakir Khan
              </h1>
              <button
                className=" w-fit inline-flex items-center  justify-between gap-4 bg-transparent  rounded-full px-12 py-4 shadow-lg "
                style={{
                  border: '2px solid', // Set border to 2px solid
                  borderColor: 'rgba(253, 45, 125, 0.4)',
                }}
              >
                <h1 className="text-white text-[18px] font-normal leading-[21.78px]">
                  Recently Booked on{' '}
                  <span
                    style={{
                      background:
                        'linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    12 March
                  </span>
                </h1>
              </button>
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] leading-[21.78px] max-w-[482px]">
                  Zakir Khan acted as a breath of fresh air in the comedy scene
                  and has attracted Zakir Khan acted as a breath of fresh air in
                  the comedy scene and has attracted Zakir Khan acted as a
                  breath of fresh air in the comedy scene and has attracted...
                </h1>
                <span>Read More</span>
              </div>
              <button className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC] w-fit  py-4 px-6 rounded-full">
                <h1 className="text-[24px] font-normal">Get a quote</h1>
                <FaArrowRightLong className="text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-0 mt-20 max-w-full h-[1039.85px]  rounded-t-[999px] flex flex-col "
        style={{
          borderTop: '2px solid',
          borderColor: 'rgba(26, 25, 52)',
          boxShadow: 'inset 0 50px 20px rgba(0, 0, 0, 1)',
        }}
      >
        <div className="mx-auto mt-32">
          <div
            className="tabs flex gap-4 bg-[#0c0c15] px-4 py-2 rounded-full"
            style={{
              boxShadow: ' 0 20px 20px rgba(0, 0, 0, 1)',
            }}
          >
            <button
              className={`tab px-8 py-4 rounded-full text-white text-2xl font-normal ${
                activeTab === 0 ? 'active' : ''
              }`}
              onClick={() => handleTabClick(0)}
              style={{
                backgroundColor: activeTab === 0 ? '#e0e2fa' : '',
                color: activeTab === 0 ? 'black' : '',
              }}
            >
              Photos
            </button>
            <button
              className={`tab px-8 py-4 rounded-full text-white text-2xl font-normal ${
                activeTab === 1 ? 'active' : ''
              }`}
              onClick={() => handleTabClick(1)}
              style={{
                backgroundColor: activeTab === 1 ? '#e0e2fa' : '',
                color: activeTab === 1 ? 'black' : '',
              }}
            >
              Videos
            </button>
          </div>
          <div className="tab-content">
            <div className="content hidden">Content for Photos tab</div>
            <div className="content hidden">Content for Videos tab</div>
          </div>
        </div>
      </div>
      <div className="relative mx-40 overflow-hidden mb-40">
        <img
          src={circle1}
          className="absolute top-0 left-0 right-10 "
          style={{ zIndex: -1 }}
          alt="Circle 1"
        />

        <img
          src={circle2}
          className="absolute bottom-0 right-0 rounded-b-[80px] overflow-hidden"
          style={{ zIndex: -1 }}
          alt="Circle 2"
        />
        <div className="flex bg-[#10121A]/40 bg-clip-padding max-w-[1680px] max-h-[649.76px] justify-between rounded-[80px] p-[80px] gap-20 relative z-10 overflow-hidden ">
          <div className="flex flex-col gap-40 max-w-[409px]">
            <h1 className="text-[58px] font-normal leading-[67.77px]">
              Performance
              <br /> Details
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] font-normal leading-[29.05px]">
                Don’t like what you see here ? Get customized package in your
                budget
              </h1>
              <span
                className="text-[24px] font-normal leading-[29.05px] mt-4"
                style={{
                  background:
                    'linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Post your requirements {'-->'}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4 max-w-[754px]">
              <div
                className="py-[69px] px-[24px] rounded-[26px] text-center bg-gray-700 flex flex-col gap-2 max-w-[230px] max-h-[230px] "
                style={{
                  border: '1px solid',
                  background:
                    'linear-gradient(to top, rgba(255, 253, 253, 0.05) ,rgba(150, 197, 253, 0.11), rgba(67, 97, 143, 0.11), rgba(37, 37, 44, 0.11))',
                }}
              >
                <h1 className="text-[48px] font-bold leading-[58.09px]">1</h1>
                <span className="mt-4 text-[16px] font-normal leading-[19.36px]">
                  Performing Members
                </span>
              </div>
              <div
                className="py-[69px] px-[24px] rounded-[26px] text-center bg-gray-700 flex flex-col gap-2 max-w-[230px] max-h-[230px]"
                style={{
                  border: '1px solid',
                  background:
                    'linear-gradient(to top, rgba(255, 253, 253, 0.05) ,rgba(150, 197, 253, 0.11), rgba(67, 97, 143, 0.11), rgba(37, 37, 44, 0.11))',
                }}
              >
                <h1 className="text-[48px] font-bold leading-[58.09px]">10</h1>
                <span className="mt-4 text-[16px] font-normal leading-[19.36px]">
                  Off Stage Members
                </span>
              </div>
              <div
                className="py-[69px] px-[24px] rounded-[26px] text-center bg-gray-700 flex flex-col gap-2 max-w-[230px] max-h-[230px]"
                style={{
                  border: '1px solid',
                  background:
                    'linear-gradient(to top, rgba(255, 253, 253, 0.05) ,rgba(150, 197, 253, 0.11), rgba(67, 97, 143, 0.11), rgba(37, 37, 44, 0.11))',
                }}
              >
                <h1 className="text-[48px] font-bold leading-[58.09px]">
                  15-20
                </h1>
                <span className="mt-4 text-[16px] font-normal leading-[19.36px]">
                  mins of stage time
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-[754px]">
              <div
                className=" py-[26px] px-[63px rounded-[26px] text-center bg-gray-700 flex flex-col gap-2 max-w-[361px] max-h-[148px] "
                style={{
                  border: '1px solid',
                  background:
                    'linear-gradient(to top, rgba(255, 253, 253, 0.05) ,rgba(150, 197, 253, 0.11), rgba(67, 97, 143, 0.11), rgba(37, 37, 44, 0.11))',
                }}
              >
                <h1 className="text-[48px] font-bold leading-[58.09px]">1</h1>
                <span className="mt-4 text-[16px] font-normal leading-[19.36px]">
                  Performing Members
                </span>
              </div>
              <div
                className="py-[26px] px-[63px] text-center rounded-[26px] bg-gray-700 flex flex-col gap-2 max-w-[361px] max-h-[148px]"
                style={{
                  border: '1px solid',
                  background:
                    'linear-gradient(to top, rgba(255, 253, 253, 0.05) ,rgba(150, 197, 253, 0.11), rgba(67, 97, 143, 0.11), rgba(37, 37, 44, 0.11))',
                }}
              >
                <h1 className="text-[48px] font-bold leading-[58.09px]">10</h1>
                <span className="mt-4 text-[16px] font-normal leading-[19.36px]">
                  Off Stage Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-40 overflow-hidden mb-40 rounded-l-full rounded-r-full">
        <img
          src={leftImg}
          className="absolute bottom-0 left-0 right-0 "
          style={{ zIndex: -1 }}
          alt="Circle 1"
        />

        <img
          src={right1}
          className="absolute top-0 right-0 rounded-b-[80px] overflow-hidden"
          style={{ zIndex: -1 }}
          alt="Circle 2"
        />
        <img
          src={right2}
          className="absolute bottom-0 right-0 rounded-b-[80px] overflow-hidden"
          style={{ zIndex: -1 }}
          alt="Circle 2"
        />
        <div className="flex flex-col bg-[#10121A]/40 bg-clip-padding max-w-[1680px] h-[649.76px] justify-between rounded-[80px] p-[80px] gap-16 relative z-10 overflow-hidden ">
          <div className="flex flex-col items-center content-center justify-between gap-24">
            <div className="flex flex-col gap-4 items-center">
              <img src={liveImg} />
              <h1
                className="text-[58px] leading-[67.77px] font-normal max-w-[821px] text-center"
                style={{
                  background:
                    'linear-gradient(180deg, #F16633 80%, #FD2D7D 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                128 Queries made for Zakir Khan in past 15 mins
              </h1>
            </div>

            <div className="flex flex-col gap-8 items-center">
              <button className="flex gap-2 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full w-fit">
                <h1 className="text-[24px] font-normal">Get a quote</h1>
                <FaArrowRightLong className="text-[22px]" />
              </button>
              <span className="text-[18px] leading-[21.78px] font-normal  text-center">
                Fill out a form and get quote for free. All it takes is 5 min to
                book your dream star
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1680px] h-[396px] mx-auto rounded-[58px] bg-[#111121] py-8 relative mb-20"
        style={{
          borderTop: '2px solid',
          borderColor: 'rgba(26, 25, 52)',
          boxShadow: 'inset 0 20px 20px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="flex flex-col items-center">
          <h1
            className="text-[32px] leading-[38.73px] font-normal"
            style={{ opacity: '0.6' }}
          >
            Tags of the Day
          </h1>
        </div>
        <div
          className="tag-container absolute bottom-0 left-0 right-0 flex flex-wrap gap-4 py-8 overflow-hidden "
          style={{ opacity: '0.6' }}
        >
          <div className="flex gap-4 ms-[-10px]">
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
          <div className="flex gap-4 ms-[10px]">
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
          <div className="flex gap-4 ms-[-10px]">
            <span className="  text-white  py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
          <div className="flex gap-4 ms-[10px]">
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
            <span className="  text-white py-2  text-center">
              #Artist of the Day
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
