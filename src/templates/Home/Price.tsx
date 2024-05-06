import Image from "next/image";
import { Section } from "@/layout/Section";
import RightArrow from "@/icons/RightArrow";

const Price = () => (
  <Section>
    <div className="">
      <div className="flex flex-row gap-4 max-h-[350px] py-4 px-6">
        <div>
          <Image
            className="rounded-bl-full rounded-t-full h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model1"
            width={400}
            height={124}
          />
        </div>
        <div>
          <Image
            className="rounded-2xl h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model2"
            width={400}
            height={124}
          />
        </div>
        <div>
          <Image
            className="rounded-bl-full rounded-t-full h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model3"
            width={400}
            height={124}
          />
        </div>
        <div>
          <Image
            className="rounded-bl-full rounded-t-full h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model4"
            width={400}
            height={124}
          />
        </div>
        <div></div>
      </div>
      <div className="flex flex-row gap-4 max-h-[350px] py-4 px-6">
        <div>
          <Image
            className="rounded-2xl h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model1"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-tr-[50%] h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model2"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-2xl h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model3"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-tr-[50%] h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model4"
            width={400}
            height={304}
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 max-h-[350px] py-4 px-6">
        <div>
          <Image
            className="rounded-l-[50%] h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model1"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-full h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model2"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-l-[50%] h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model3"
            width={400}
            height={304}
          />
        </div>
        <div>
          <Image
            className="rounded-full h-[100%] object-cover"
            src="/celebrities/artist.png"
            alt="Model4"
            width={400}
            height={304}
          />
        </div>
        
      </div>
      <div className="absolute flex flex-row justify-between items-center bg-gradient-to-b from-transparent to-black h-70 w-full z-10 bottom-4 px-10 backdrop-blur-[2px] rounded-full">
        <div className="flex flex-row px-14 py-10">
          <div className="flex flex-col text-white"  >
            <h1 className="text-[160px]">
            25K+
            </h1>
          <p className="text-[24px]">
            Celebrities to choose from
          </p>
          </div>
        </div>
        <div>
        <button className="flex flex-row gap-4 text-[24px] text-white justify-center items-center bg-gradient-to-br from-[#F1663363] via-[#FD2D7D63] to-[#15121263] rounded-full px-14 py-4 border-[1px] border-gray-700">
          <p className="flex flex-col text-start"><span>See Price and</span>
          <span>Book Now</span></p>
          <RightArrow/>
        </button>
        </div>
      </div>
    </div>
  </Section>
);

export { Price };
