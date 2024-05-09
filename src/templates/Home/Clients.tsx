import React from "react";
import { motion } from "framer-motion";
import Airbnb from "@/public/clients/Airbnb";
import Amazon from "@/public/clients/Amazon";
import Klarna from "@/public/clients/Klarna";
import Meta from "@/public/clients/Meta";
import Record from "@/public/clients/Record";
import Spotify from "@/public/clients/Spotify";
import Twilio from "@/public/clients/Twilio";
import Wise from "@/public/clients/Wise";
import Uber from "@/public/clients/Uber";
import HappySvg from "@/public/svgs/happySvg";
import DocuSign from "@/public/clients/DocuSign";

type Props = {
  xAxis?: string;
  initial?: string;
};

const Clients = (props: Props) => {
  return (
    <div>
      {props.initial === "0%" && (
        <div className="w-full flex flex-col justify-center items-center mt-24">
          <h1 className="text-[100px] text-white">Our Clients</h1>
          <div className="ml-72">
            <HappySvg />
          </div>
        </div>
      )}

      <div className="relative w-full overflow-hidden">
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex gap-10 py-10"
          animate={{
            x: [`${props.xAxis}`, `${props.initial}`],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}

          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Airbnb />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Amazon />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <DocuSign />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Klarna />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Meta />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Record />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Spotify />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Twilio />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Wise />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Uber />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Airbnb />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Airbnb />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Amazon />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <DocuSign />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Klarna />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Meta />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Record />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Spotify />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Twilio />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Wise />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Uber />
            </div>
          </div>
          <div className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Airbnb />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { Clients };
