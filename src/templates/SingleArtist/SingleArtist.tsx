import { Section } from '@/layout/Section'
import React from 'react'
import { GoSearch } from 'react-icons/go';
// import { FilterButton } from './Components/FilterButton';
import { CelebrityCard } from './Components/CelebrityCard';
// import { CelebrityCardV2 } from './Components/CelebrityCardV2';
// import { CelebrityCardV3 } from './Components/CelebrityCardV3';
// import { CelebrityCardV4 } from './Components/CelebrityCardV4';
import { ArtistList, VariousArtist } from '@/types/types';
import { CelebrityCardMobile } from './Components/CelebrityCardMobile';
import FilterView from './Components/FilterView';

type ISingleArtistProps = {
  data?: VariousArtist | null | undefined;
}


const SingleArtist = ({data}: ISingleArtistProps) => {
  return (
    <Section>
      <div className="flex flex-col justify-start w-full mx-auto  ">
      <div className="flex flex-col items-center justify-center mx-auto w-full mt-7 md:mt-[120px] gap-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[64px] hidden md:block leading-[77.45px] font-normal text-white text-center">
            {data?.h1_heading}
          </h1>
          <p className="text-[24px] font-normal hidden md:block leading-[29.05px] text-white transition-all duration-400">
            Choose from the vast and versatile sea of {data?.artist_list?.length ? data?.artist_list?.length - 1: ""}+ {data?.category?.name}
          </p>
        </div>
        <div className=" hidden md:flex flex-col gap-8">
          <div className="flex flex-wrap gap-8">
            <FilterView buttonLabel="Cities" items={data?.cities} value="city" slug="city_slug" key="id" label="City"/>
            <FilterView buttonLabel="Gender" items={data?.genders} value="gender" slug="g_slug" key="id" label="Gender"/>
            <FilterView buttonLabel="Language" items={data?.languages} value="language_name" slug="l_slug" key="id" label="Language"/>
            <FilterView buttonLabel="Event" items={data?.events} value="event_name" slug="e_slug" key="id" label="Event"/>
          </div>
            <div className=" w-full relative">
                <div className="absolute inset-y-0 flex items-center ps-4 pointer-events-none">
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
        </div>
      </div>
      <p className="text-[34px] font-normal text-center block md:hidden leading-[40.05px] px-4 text-white transition-all duration-400">
            Choose from the vast and versatile sea of {data?.artist_list?.length ? data?.artist_list?.length - 1: ""}+ {data?.category?.name}
          </p>
          <div className=" w-full block md:hidden my-8 px-10 relative">
                <div className="absolute inset-y-0 flex items-center ps-4 pointer-events-none">
                  <GoSearch className="text-[18px] text-white" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" block ps-14 rounded-full bg-transparent w-full py-3  text-white placeholder-white focus:outline-none"
                  style={{
                    background:
                      'linear-gradient(to right, rgb(255 255 255 / 5%) 0%, rgba(255, 255, 255, 0.24) 44%, rgb(255 255 255 / 0%) 100%), linear-gradient(to right, rgb(0 0 0 / 0%), rgb(0, 0, 0) 44%, rgb(0 0 0 / 0%)',
                  }}
                  placeholder="Search for comedians like zakir khan etc etc"
                  required
                />
            </div>
    
     
      <div className="w-full hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-16 md:px-24 px-10 gap-4">
        {data?.artist_list?.map((list: ArtistList) => (
        <CelebrityCard key={list.id} list={list}/>
        ))}
      </div>
      <div className="w-full lg:hidden grid grid-cols-1  lg:py-24 lg:px-10 px-4 py-4 gap-4">
        {data?.artist_list?.map((list: ArtistList) => (
        <CelebrityCardMobile key={list.id} list={list} />
        ))}
      </div>
     
    </div>
    </Section>
  )
}

export { SingleArtist }