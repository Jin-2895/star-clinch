import { HeroOneButton } from '@/hero/HeroOneButton';
import { Section } from '@/layout/Section';
import React from 'react';

import { Background } from '../../background/Background';

const Hero = () => (
  <Background color="bg-[#080810]">
    <Section innerXPadding='10rem' innerYPadding='10rem'>
      <HeroOneButton
        title={<>{'Book a Celebrity\n'}</>}
        description="for you Iconic Event"
      />
    </Section>
  </Background>
);

export { Hero };
