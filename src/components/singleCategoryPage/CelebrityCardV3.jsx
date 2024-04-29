/* eslint-disable react/prop-types */
import { FaArrowRightLong } from 'react-icons/fa6';
import shadow from '../../assets/celebrities/shadowVector.png';

export default function CelebrityCardV3(props) {
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
          <img
            src={props.img}
            className="w-full h-full p-2 rounded-t-full rounded-br-full"
            alt="Bharti Singh"
          />
        </div>
        <div className="pt-14 max-w-[363.75px]">
          <div className="font-normal leading-[58.09px] text-[48px] mb-2 text-white">
            Did you Know?
          </div>
          <p className="text-center pt-6 font-normal text-[24px] leading-[29.05px]">
            Ali ASGAR{' '}
            <span
              className="text-center font-normal text-[24px]  "
              style={{ opacity: '0.4' }}
            >
              was the most booked artist of this month with{' '}
            </span>{' '}
            8+ bookings
          </p>
        </div>
        <div className=" pb-2">
          <button className="flex gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-full">
            <h1 className="text-[24px] font-normal">See Price and Book</h1>
            <FaArrowRightLong className="text-[22px]" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-auto">
        <img src={shadow} className="w-full" alt="Shadow" />
      </div>
    </div>
  );
}
