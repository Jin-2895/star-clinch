import { Meta } from '@/layout/Meta';
import { HomeData } from '@/types/types';
import { AppConfig } from '@/utils/AppConfig';
import React from 'react'
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import MobileHero from './Components/MobileHero';
import BannerMobile from './Components/BannerMobile';
import PriceMobile from './Components/PriceMobile';
import ClientMobile from './Components/ClientMobile';
import ProfileClientMobile from './Components/ProfileClientMobile';


type Props = {
  data?: HomeData | null;
};
const HomeMobileBase = (props: Props) => {
  
  console.log("props",props)
  
  return (
    <div className=" bg-[#080810] ">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Navbar categoriesData={props?.data} />

        <MobileHero sectionOne={props?.data ? props?.data["section-1"] : null} />
        <BannerMobile  sectionTwoVideos={
            props?.data ? props?.data["section-2-videos"] : null
          } />
          <PriceMobile  sectionThreeHeadings={
            props?.data ? props?.data["section-3-heading"] : null
          }
          sectionThreeImages={
            props?.data ? props?.data["section-3-images"] : null
          } />

        <ClientMobile
          sectionFourHeadings={
            props?.data ? props?.data["section_4_heading"] : null
          }
          sectionFourImages={
            props?.data ? props?.data["section_4_images"] : null
          }
        />
        <ProfileClientMobile  sectionFiveHeadings={props?.data ? props?.data["section_5_heading"] : null}
      sectionFiveData={props?.data ? props?.data["section_5_data "] : null} value={''}        />

       
      
   
      
      <Footer />


    </div>
  )
}

export default HomeMobileBase