import { GoSearch } from 'react-icons/go';
import celebImage1 from '../../assets/celebrities/celeb1.svg';
import celebImage2 from '../../assets/celebrities/celeb2.svg';
import celebImage3 from '../../assets/celebrities/celeb3.svg';
import celebImage4 from '../../assets/celebrities/celeb4.svg';

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-white font-bold ">
      <div className="flex flex-col items-center bg-[#0b0b13] pt-36 py-12 rounded-t-[580px] w-[1140px] mt-20 max-h-[1080px] overflow-hidden">
        <div className="text-center relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <GoSearch className="text-gray-400 size-8" />
          </div>
          <input
            type="text"
            placeholder="Search for an artist, category ..."
            className="flex w-full rounded-full pl-20  pr-40 py-4 bg-transparent bg-blur-md outline-none border-[2px] text-white font-light text-[28px] opacity-35"
          />
        </div>

        <div className="pt-12">
          <h1 className="text-[104px] font-normal my-8 text-center leading-[125.86px]">
            Book a Celebrity
          </h1>
          <p className="text-[48px] font-normal text-center leading-[58.09px]">
            for your Iconic Event
          </p>
        </div>
        <div className="flex">
          <div className="flex justify-between  gap-4 mx-0 px-0 w-auto">
            <div className="rounded-t-full mt-10 overflow-hidden  w-[309px] h-[680px]">
              <img className="w-full " src={celebImage1} />
            </div>
            <div className="flex items-end  gap-4">
              <div className="flex flex-col gap-2 w-auto ">
                <div className="rounded-t-full rounded-l-full overflow-hidden w-[254.08px] h-[257.08px]">
                  <img className="w-full" src={celebImage2} />
                </div>
                <div className="rounded-t-3xl overflow-hidden w-[263.71px] h-[259.65px] ">
                  <img className="w-full" src={celebImage3} />
                </div>
              </div>
              <div className="rounded-tl-[140px] overflow-hidden w-[264px] h-[481px]">
                <img className="w-full" src={celebImage3} />
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 mt-20">
              <div className=" rounded-l-[140px] overflow-hidden w-[326px] h-[219px]">
                <img className="w-full" src={celebImage4} />
              </div>
              <div className="w-[279px] h-[283px]">
                <img className="w-full " src={celebImage2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
