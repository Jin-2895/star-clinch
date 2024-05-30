import { Meta } from '@/layout/Meta'
import { AppConfig } from '@/utils/AppConfig'
import React from 'react'
// import { Navbar } from '../Navbar'
import Career from './Career'


const CareerBase = () => {

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <Navbar categories={data ? data?.categories : ""}/> */}
      <Career />
    </div>

  )
}

export { CareerBase }