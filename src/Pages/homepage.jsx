import Hero from '../components/sections/Hero';
import Navbar from '../components/homepage/Navbar';
import Section2 from '../components/sections/section2';
import arjitImg from '../assets/celebrities/arijitSingh.png';

export default function Homepage() {
  return (
    <>
      {/* <div className="relative"> */}
      <div className="flex flex-col mx-auto justify-start w-full  ">
        <Navbar />
        <Hero />
        <Section2 />
      </div>
      <div className="flex flex-col justify-center items-center w-full ">
        <div
          className=" p-14 rounded-[80px] bg-[#111119]/10 bg-gradient-to-b from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255, 0)]  backdrop-filter backdrop-blur-sm"
          style={{
            borderTop: '2px solid rgba(26, 25, 52)',
            borderLeft: '2px solid rgba(26, 25, 52)',
            borderBottom: '2px solid rgba(26, 25, 52)',
            borderRight: '2px solid rgba(26, 25, 52)',
            boxShadow:
              'inset 30px 30px 90px  rgba(0, 0, 0, 0.5), inset 74px 60px 79px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="flex justify-between gap-20 w-full">
            <div>
              <h1 className="text-[48px] leading-[58.09px]">
                Committed {''}
                <span className="opacity-40">
                  to <br />
                  excellence
                </span>
                {''} since <br />
                <span className="text-[180px] leading-[217.84px]">2015.</span>
              </h1>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 justify-end items-end">
                <div className="p-[2px] w-fit bg-gradient-to-l from-[rgba(255,253,253,0.36)] via-[rgba(150,253,191,0.8)] vi-[rgba(89,143,67,0.8)] to-[rgba(37,41,44,0.8)] rounded-[40px] overflow-hidden ">
                  <div className="px-6  py-10 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
                    <div className="flex flex-col items-center">
                      <h1 className="text-[80px] leading-[96.82px]">12k +</h1>
                      <h1 className="text-[32px] leading-[38.73px]">
                        Total Perfomances
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-[2px] bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
                  <div className="px-20 py-4 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
                    <div className="flex flex-col items-center">
                      <h1 className="text-[80px] leading-[96.82px]">12k +</h1>
                      <h1 className="text-[32px] leading-[38.73px]">
                        Total Perfomances
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="p-[2px] bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
                  <div className="px-20 py-8 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
                    <div className="flex flex-col items-center">
                      <h1 className="text-[80px] leading-[96.82px]">12k +</h1>
                      <h1 className="text-[32px] leading-[38.73px]">
                        Total Perfomances
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-b from-[rgba(98,204,147,1)] to-[rgba(0,0,0,0)] absolute bottom-0 left-0 w-[124.5px] h-[305.79px] rounded-tr-[200px]"></div>
                  <div className="relative py-24 rounded-tl-[200px] overflow-hidden bg-gradient-to-br  from-[rgba(255,227,226,0.34)] via-[rgba(241,102,51,0.34)] via-[rgba(143,69,97,0.34)] to-[rgba(21,18,18,0.34)] backdrop-filter backdrop-blur-[40px]">
                    <div className="flex flex-col items-center">
                      <h1 className="text-[80px] leading-[96.82px]">12k +</h1>
                      <h1 className="text-[32px] leading-[38.73px]">
                        Total Performances
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-[2px] bg-gradient-to-l from-[rgba(238,192,200,0)] via-[rgba(222,133,149,0.9)] to-[rgba(255,255,255,0)] rounded-[40px] overflow-hidden w-full">
                  <div className="px-20 py-4 bg-[#26262e] bg-gradient-to-tr from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] rounded-[40px]">
                    <div className="flex flex-col items-center">
                      <h1 className="text-[80px] leading-[96.82px]">12k +</h1>
                      <h1 className="text-[32px] leading-[38.73px]">
                        Total Perfomances
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative">
          <div className="inner-shadow rounded-t-full top-[150rem] absolute shadow-2xl w-full h-full bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
          <div className="inner-shadow rounded-t-full top-[158rem] absolute shadow-2xl w-[90%] h-[95.6%] bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
          <div className="inner-shadow rounded-t-full top-[170rem] absolute shadow-2xl w-[80%] h-[91.3%] bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-100/50 backdrop-blur-xl"></div>
        </div> */}
      {/* </div> */}
      <div className="my-20 ">
        <div className="flex justify-center items-center gap-40">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#c94650] p-3 overflow-hidden relative">
              <div className="rounded-full  overflow-hidden">
                <img src={arjitImg} />
              </div>
            </div>
            <h1 className="absolute text-[104px] leading-[125.86px] left-[4rem]">
              Singers
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="text-[64px] leading-[77.45px]">
              <span className="opacity-50">
                {' '}
                Choose <br /> from
              </span>{' '}
              100+ <br />
              Categories
            </h1>
            <button className="bg-transparent outline-none focus:outline-none hover:outline-none p-0 ">
              <h1 className="capitalize text-[32px] leading-[38.73px] font-semibold bg-gradient-to-b from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] inline-block text-transparent bg-clip-text">
                Explore All Categories {'-->'}
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
