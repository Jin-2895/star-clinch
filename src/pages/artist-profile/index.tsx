import { ArtistProfileBase } from '@/templates/ArtistProfile/ArtistPofileBase'
import { ArtistProfileBaseMobile } from '@/templates/ArtistProfile/ArtistProfileBaseMoble'
import React from 'react'

const index = () => {
  return (
    <>
      <div className="hidden md:block">
        <ArtistProfileBase />
      </div>
      <div className="block md:hidden">
        <ArtistProfileBaseMobile />
      </div>
    </>
  )
}

export default index