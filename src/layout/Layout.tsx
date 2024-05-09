import { Footer } from '@/templates/Footer';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import React, {ReactNode } from 'react';
import { Navbar } from '@/templates/Navbar';
import { Main } from '@/types/types';


type Props = {
  children?: ReactNode
  categoriesData?:  Main | null | undefined;
}


function Layout({children, categoriesData}: Props) {
  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar categoriesData={categoriesData}/>
      {children}
      <Footer />
    </div>
  )
}



export {Layout}
