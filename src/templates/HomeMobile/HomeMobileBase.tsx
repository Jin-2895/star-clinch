import { Meta } from "@/layout/Meta";
import { HomeData } from "@/types/types";
import { AppConfig } from "@/utils/AppConfig";
import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import MobileHero from "./Components/MobileHero";
import BannerMobile from "./Components/BannerMobile";
import PriceMobile from "./Components/PriceMobile";
import ClientMobile from "./Components/ClientMobile";
import ProfileClientMobile from "./Components/ProfileClientMobile";
import CommitmentMobile from "./Components/CommitmentMobile";
import FundedMobile from "./Components/FundedMobile";
import MobileCategoryList from "./Components/MobileCategoryList";
import BrowseMobile from "./Components/BrowseMobile";
import RecentShowsMobile from "./Components/RecentShowsMobile";
import InstagramMobile from "./Components/InstagramMobile";

type Props = {
  data?: HomeData | null;
};
const HomeMobileBase = (props: Props) => {
  console.log("props", props);

  return (
    <div className=" bg-[#080810] ">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categoriesData={props?.data} />

      <MobileHero sectionOne={props?.data ? props?.data["section-1"] : null} />
      <BannerMobile
        sectionTwoVideos={props?.data ? props?.data["section-2-videos"] : null}
      />
      <PriceMobile
        sectionThreeHeadings={
          props?.data ? props?.data["section-3-heading"] : null
        }
        sectionThreeImages={
          props?.data ? props?.data["section-3-images"] : null
        }
      />

      <ClientMobile
        sectionFourHeadings={
          props?.data ? props?.data["section_4_heading"] : null
        }
        sectionFourImages={props?.data ? props?.data["section_4_images"] : null}
      />
      <ProfileClientMobile
        sectionFiveHeadings={
          props?.data ? props?.data["section_5_heading"] : null
        }
        sectionFiveData={props?.data ? props?.data["section_5_data "] : null}
        value={""}
      />

      <CommitmentMobile
        sectionSixHeadings={
          props?.data ? props?.data["section_6_heading"] : null
        }
        sectionSixData={props?.data ? props?.data["section_6_data"] : null}
      />

      <FundedMobile
        sectionSevenHeadings={
          props?.data ? props?.data["section_7_heading"] : null
        }
      />

      <MobileCategoryList
        sectionNineHeadings={
          props?.data ? props?.data["section_9_heading"] : null
        }
        sectionNineImages={props?.data ? props?.data["section_9_images"] : null}
      />
      <BrowseMobile
        sectionTenHeadings={
          props?.data ? props?.data["section_10_heading"] : null
        }
        sectionTenImages={props?.data ? props?.data["section_10_images"] : null}
      />

      <RecentShowsMobile
        sectionElevenHeadings={
          props?.data ? props?.data["section_11_heading"] : null
        }
      />
      <InstagramMobile />

      <Footer />
    </div>
  );
};

export default HomeMobileBase;
