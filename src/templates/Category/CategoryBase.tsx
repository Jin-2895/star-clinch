import React from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import { Celebrities } from './Celebrities';
import { HomeData } from '@/types/types';

type ICategoryBaseProps = {
  data: HomeData
}

const CategoryBase = ({data}: ICategoryBaseProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categories={data?.categories}/>
      <Celebrities categories={data?.categories}/>
      <Footer />
    </div>
  );
};

export { CategoryBase };
