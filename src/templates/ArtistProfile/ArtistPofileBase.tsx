

import React from 'react';
import { ArtistProfile } from './ArtistProfile';
import { Profile } from '@/types/types';

type IArtistProfileBaseProps = {
  profile: Profile
}

const ArtistProfileBase = ({profile} : IArtistProfileBaseProps) => {
  return  <ArtistProfile profile={profile}/>
};

export { ArtistProfileBase };

