import { Footer } from '@/templates/Footer';
import { GQTStepMobile } from '@/templates/GTQStep/GQTStepMobile';
import { GTQStepBase } from '@/templates/GTQStep/GTQStepBase';
import { Navbar } from "@/templates/Navbar";
import React from 'react';

const index = () => {
  return (
  <div className="antialiased">
 
  <Navbar/>
  <div className="hidden  md:block">
  <GTQStepBase />
  </div>
  <div className="block w-full md:hidden">
    <GQTStepMobile/>
  </div>
  <Footer />  
</div>
)
};

export default index;