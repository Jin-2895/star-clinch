import Image from "next/image";
import React from "react";

type Props = {
  img?: string;
};

const CelebrityCardMobile = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-start max-h-[530px] h-screen w-full max-w-[342px] rounded-xl overflow-hidden shadow-lg ">
      <div className=" w-full overflow-hidden rounded-t-full  ">
        <Image
          width={1000}
          height={1000}
          src={props.img}
          className="w-full h-full"
          alt="Bharti Singh"
        />
        <div className="absolute bottom-8 px-4 flex flex-col gap-2 w-full">
          <div className="font-normal leading-[38.73px] text-[32px]  text-white">
            Zakir Khan
          </div>
          <p className=" font-normal text-lg">
            Recently booked on{" "}
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(90deg, #F16633 80%, #FD2D7D 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              12 March
            </span>
          </p>

          <button className=" gap-4 items-center bg-gradient-to-r from-[#F16633CC] to-[#FD2D7DCC]  py-4 px-6 rounded-lg w-full">
            <h1 className="text-[16px] text-white font-normal text-center">
              See Price and Book
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CelebrityCardMobile };
