import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import HeroMobile from './components/HeroMobile'
import AboutMobile from './components/AboutMobile'
import MissionMobile from './components/MissionMobile'
import SuccessMobile from './components/SuccessMobile'

const StoryBaseMobile = () => {
  return (
    <div>
       <Navbar />
       <HeroMobile/>
       <AboutMobile/>
       <MissionMobile/>
       <SuccessMobile/>
       
       <Footer/>
    </div>
  )
}

export default StoryBaseMobile