import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Home/Banner";
import { Footer } from "./Footer";
import { Hero } from "./Home/Hero";
import { Navbar } from "./Navbar";
import { Price } from "./Home/Price";
import { Clients } from "./Home/Clients";
import { Commitment } from "./Home/Commitment";
import { Funded } from "./Home/Funded";
import { Category } from "./Home/Category";
import { ProfileClient } from "./Home/ProfileClient";
import { CategoryList } from "./Home/CategoryList";
import { BrowsePerformer } from "./Home/BrowsePerformer";
import { RecentShows } from "./Home/RecentShows";
import React from "react";
import { HomeData } from "@/types/types";
import { Instagram } from "./Home/Instagram";

type Props = {
  data?: HomeData | null;
};

function Base(props: Props) {
  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categoriesData={props?.data} />
      <Hero sectionOne={props?.data ? props?.data["section-1"] : null} />
      <Banner
        sectionTwoHeadings={
          props?.data ? props?.data["section-2-heading"] : null
        }
        sectionTwoVideos={props?.data ? props?.data["section-2-videos"] : null}
      />
      <Price
        sectionThreeHeadings={
          props?.data ? props?.data["section-3-heading"] : null
        }
        sectionThreeImages={
          props?.data ? props?.data["section-3-images"] : null
        }
      />
      <Clients
        xAxis="-100%"
        initial="0%"
        sectionFourHeadings={
          props?.data ? props?.data["section_4_heading"] : null
        }
        sectionFourImages={props?.data ? props?.data["section_4_images"] : null}
      />
      <Clients
        xAxis="0%"
        initial="-100%"
        sectionFourImages={props?.data ? props?.data["section_4_images"] : null}
      />
      <ProfileClient
        sectionFiveHeadings={
          props?.data ? props?.data["section_5_heading"] : null
        }
        sectionFiveData={props?.data ? props?.data["section_5_data "] : null}
      />
      <Commitment
        sectionSixHeadings={
          props?.data ? props?.data["section_6_heading"] : null
        }
        sectionSixData={props?.data ? props?.data["section_6_data"] : null}
      />
      <Funded
        sectionSevenHeadings={
          props?.data ? props?.data["section_7_heading"] : null
        }
      />
      <Category
        sectionEightHeadings={
          props?.data ? props?.data["section_8_heading"] : null
        }
        sectionEightImages={
          props?.data ? props?.data["section_8_images"] : null
        }
      />
      <CategoryList
        sectionNineHeadings={
          props?.data ? props?.data["section_9_heading"] : null
        }
        sectionNineImages={props?.data ? props?.data["section_9_images"] : null}
      />
      <BrowsePerformer
        sectionTenHeadings={
          props?.data ? props?.data["section_10_heading"] : null
        }
        sectionTenImages={props?.data ? props?.data["section_10_images"] : null}
      />
      <RecentShows
        sectionElevenHeadings={
          props?.data ? props?.data["section_11_heading"] : null
        }
      />
      <Instagram />
      <Footer />
    </div>
  );
}

export { Base };
