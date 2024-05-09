

import React from 'react';

import { Meta } from '@/layout/Meta';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { ArtistProfile } from './ArtistProfile';
import { Profile } from '@/types/types';

type IArtistProfileBaseProps = {
  profile: Profile
}

const ArtistProfileBase = ({profile} : IArtistProfileBaseProps) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={profile.meta.title} description={profile.meta.description} />
      <Navbar categories={profile.categories}/>
      <ArtistProfile profile={profile}/>
      <Footer />
    </div>
  );
};

export { ArtistProfileBase };

