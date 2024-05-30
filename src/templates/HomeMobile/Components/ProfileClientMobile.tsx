import { Section3Heading, Section5Data } from "@/types/types";
import React from "react";
import ClientInfoMobile from "./ClientInfoMobile";

type IProfileClientProps = {
  sectionFiveHeadings: Section3Heading[] | null;
  sectionFiveData: Section5Data[] | null;
  value: string;
};
const ProfileClientMobile = ({ sectionFiveData }: IProfileClientProps) => {
  return (
    <div>
      <p className="text-white text-center mx-8 text-[32px] leading-[38px] my-8">
        High Profile Clients Trust Us
      </p>

      <div className="h-[442px] p-[0.9px] rounded-t-xl bg-gradient-to-t mx-6 from-[#00000000] via-[#00000000] to-[#847878]">
        <div className="h-full rounded-t-xl  w-full  bg-[#080810]">
          <div className=" w-full relative h-full rounded-t-xl bg-gradient-to-r from-white-0 via-white-10 to-white-0">
            <div   className="absolute top-5  right-5">
            <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.08">
<path d="M11.6852 0.40332C18.0677 0.40332 24.9412 4.9792 24.9412 17.3994V17.8897C24.9412 34.8858 12.8308 42.4033 2.02957 42.4033V34.3955C8.57574 34.3955 13.4854 30.4734 13.4854 23.773H13.1581C5.95727 23.773 0.22937 18.7068 0.22937 11.5162C0.22937 4.81576 5.139 0.40332 11.6852 0.40332Z" fill="white"/>
<path d="M41.3959 0.40332C47.7784 0.40332 54.6519 4.9792 54.6519 17.3994V17.8897C54.6519 34.8858 42.5415 42.4033 31.7403 42.4033V34.3955C38.2865 34.3955 43.1961 30.4734 43.1961 23.773H42.8688C35.668 23.773 29.9401 18.7068 29.9401 11.5162C29.9401 4.81576 34.8497 0.40332 41.3959 0.40332Z" fill="white"/>
</g>
</svg>

            </div>
            <div className="h-full w-full ">
              <ClientInfoMobile sectionFiveData={sectionFiveData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileClientMobile;
