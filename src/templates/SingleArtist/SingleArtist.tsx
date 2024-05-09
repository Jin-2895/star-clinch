import { Section } from '@/layout/Section'
import React from 'react'
import { GoSearch } from 'react-icons/go';
import { FilterButton } from './Components/FilterButton';
import { CelebrityCard } from './Components/CelebrityCard';
// import { CelebrityCardV2 } from './Components/CelebrityCardV2';
// import { CelebrityCardV3 } from './Components/CelebrityCardV3';
// import { CelebrityCardV4 } from './Components/CelebrityCardV4';
import { ArtistList, VariousArtist } from '@/types/types';

type ISingleArtistProps = {
  data?: VariousArtist | null | undefined;
}


const SingleArtist = ({data}: ISingleArtistProps) => {
  return (
    <Section>
      <div className="flex flex-col justify-start w-full mx-auto  ">
      <div className="flex flex-col items-center justify-center mx-auto w-full mt-[120px] gap-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[64px] leading-[77.45px] font-normal text-white text-center">
            {data?.h1_heading}
          </h1>
          <p className="text-[24px] font-normal leading-[29.05px] text-white transition-all duration-400">
            Choose from the vast and versatile sea of {data?.artist_list?.length ? data?.artist_list?.length - 1: ""}+ {data?.category?.name}
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex gap-8">
            <FilterButton num={1} />
            <FilterButton num={2} />
            <FilterButton num={3} />
            <FilterButton num={4} />
            <FilterButton num={5} />
          </div>
          <div className="max-w-full">
            <form className="w-full mx-auto">
              <div className=" w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                  <GoSearch className="text-[26px] text-white" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" block ps-14 rounded-full bg-transparent w-full py-4  text-white placeholder-white focus:outline-none"
                  style={{
                    background:
                      'linear-gradient(to right, rgb(255 255 255 / 5%) 0%, rgba(255, 255, 255, 0.24) 44%, rgb(255 255 255 / 0%) 100%), linear-gradient(to right, rgb(0 0 0 / 0%), rgb(0, 0, 0) 44%, rgb(0 0 0 / 0%)',
                  }}
                  placeholder="Search for comedians like zakir khan etc etc"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1660px] mx-auto grid grid-cols-3 justify-between justify-items-center my-20 gap-4">
        {data?.artist_list.map((list: ArtistList) => (
        <CelebrityCard key={list.id} list={list}/>
        ))}
      </div>
      {/* <div className="w-full max-w-[1660px] mx-auto grid grid-cols-3 justify-between justify-items-center gap-4 my-20">
        <CelebrityCardV2
          name={' Sumona Chakravarti'}
          bookingDate={'2 October'}
          img='/celebrities/sumona.png'
        />
        <CelebrityCardV3
          name={' Sumona Chakravarti'}
          bookingDate={'2 October'}
          img='/celebrities/aliAsghar.png'
        />
        <CelebrityCardV2
          name={' Kapil Sharma'}
          bookingDate={'12 January'}
          img='/celebrities/kapil.png'
        />
      </div>
      <div className="w-full max-w-[1660px] mx-auto grid grid-cols-3 justify-between justify-items-center gap-10 my-20">
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/Zakir.png'
        />
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/zakir.png'
        />
        <CelebrityCardV4
          name={' Zakir Khan'}
          bookingDate={'12 March'}
          img='/celebrities/zakir.png'
        />
      </div> */}
    </div>
    </Section>
  )
}

export { SingleArtist }