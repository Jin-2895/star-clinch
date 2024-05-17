import React from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import { Celebrities } from './Celebrities';
import { HomeData } from '@/types/types';
import CategoryMobile from './CategoryMobile';

type ICategoryBaseProps = {
  data: HomeData
}

const CategoryBase = ({data}: ICategoryBaseProps) => {
  // console.log("datadata",data)
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categories={data?.categories}/>
      <div className='hidden lg:flex'>
      <Celebrities categories={data?.categories}/>

      </div>
      <div className='block lg:hidden'>
        <CategoryMobile categories={data?.categories}/>
      </div>
      
      <Footer />
    </div>
  );
};

export { CategoryBase };
