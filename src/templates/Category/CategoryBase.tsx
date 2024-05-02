import React from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import { Category } from './Category';

const CategoryBase = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <Category />
      <Footer />
    </div>
  );
};

export { CategoryBase };
