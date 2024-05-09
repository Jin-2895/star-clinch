import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Home/Banner';
import { Footer } from './Footer';
import { Hero } from './Home/Hero';
import { Navbar } from './Navbar';
import { Price } from './Home/Price';
import { Clients} from './Home/Clients';
import { Commitment } from './Home/Commitment';
import { Funded } from './Home/Funded';
import { Category } from './Home/Category';
import { ProfileClient } from './Home/ProfileClient';
import { CategoryList } from './Home/CategoryList';
import { BrowsePerformer } from './Home/BrowsePerformer';
import { RecentShows } from './Home/RecentShows';
import React from 'react';
import { Main } from '@/types/types';


type Props = {
  data?: Main | null
}


function Base(props: Props) {
  return (
      <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categoriesData={props?.data}/>
      <Hero />
      <Banner />
      <Price />
      <Clients xAxis='-100%' initial='0%'/>
      <Clients xAxis='0%' initial='-100%'/>
      <ProfileClient />
      <Commitment />
      <Funded/>
      <Category/>
      <CategoryList />
      <BrowsePerformer />
      <RecentShows />
      <Footer />
    </div>
  )
}

export {Base}
