import { CTABanner } from "@/cta/CTABanner";
import { Section } from "@/layout/Section";
import { Section3Heading, Section5Data } from "@/types/types";
import React from "react";
import ClientInfo from "./Components/ClientInfo";


type IProfileClientProps = {
  sectionFiveHeadings: Section3Heading[] | null;
  sectionFiveData: Section5Data[] | null
}

const ProfileClient = ({ sectionFiveHeadings, sectionFiveData}: IProfileClientProps) => {
console.log(sectionFiveData)

  return (
    <Section yPadding="py-[10rem] px-12">
      <CTABanner
        name={sectionFiveHeadings ? sectionFiveHeadings[0]?.name: "main_heading"}
        title={sectionFiveHeadings ? sectionFiveHeadings[0]?.value : "High Profile Clients Trust Us"}
        titleStyles="text-start max-w-[35rem]"
        style=""
        section={
          <div className="px-24 gap-2">
            <ClientInfo sectionFiveData={sectionFiveData}/>
          </div>
        }
      />
    </Section>
  );
};

export { ProfileClient };
