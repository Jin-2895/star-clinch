import React from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import { SingleArtist } from './SingleArtist';

const SingleArtistBase = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <SingleArtist />
      <Footer />
    </div>
  );
};

export { SingleArtistBase };