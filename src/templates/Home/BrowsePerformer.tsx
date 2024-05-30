"use client";
import { CTABanner } from "../../cta/CTABanner";
import { Section } from "../../layout/Section";
import SwiperCore from "swiper";
import { EffectCoverflow, Pagination } from "swiper/modules";
import React, { useEffect, useState } from "react";
import {
  Category,
  HomeData,
  Section10Image,
  Section3Heading,
} from "@/types/types";
import CustomPerformerSlider from "./Components/CustomPerformerSlider";

SwiperCore.use([EffectCoverflow, Pagination]);

type IBrowsePerformer = {
  sectionTenHeadings: Section3Heading[] | null;
  sectionTenImages: Section10Image[] | null;
  allData: HomeData | null | undefined;
};

const BrowsePerformer = ({
  sectionTenHeadings,
  allData,
}: IBrowsePerformer) => {
  const [categoryData, setCategoryData] = useState<any | null>(null)
  const [id, setId] = useState<string | null>(null)

  const handleDataFetching = async (id: string) => {
    setId(id)
    try {
      const response = await fetch(`${"https://staging-api.starclinch.in"}/${id}`)
      const data = await response.json()
      if(!data) throw new Error("data Fetching Performer" , data.message)
      setCategoryData(data)
    } catch (error: any | null) {
      console.log(error)
    }
  }

  useEffect(()=>{
    handleDataFetching("book-makeup-artist-online")
  },[])

  return (
    <Section yPadding="py-24">
      <CTABanner
        title={sectionTenHeadings && sectionTenHeadings[0]?.value}
        name={sectionTenHeadings && sectionTenHeadings[0]?.name}
        subtitle={sectionTenHeadings && sectionTenHeadings[1]?.value}
        subtitleName={sectionTenHeadings && sectionTenHeadings[1]?.name}
        style=""
        titleStyles="text-start w-[35rem]"
        section={
          <div className="relative">
            <div className="absolute -top-24 right-0 -z-10">
              <div className="w-[25rem] h-[25rem] rounded-full bg-gradient-to-bl from-[#FF81E340] from-30% via-[#0B060A03] via-80%  to-transparent to-10% backdrop-blur-2xl"></div>
            </div>
            <div className="flex gap-8 justify-center items-center">
              {allData
                ? allData?.categories?.map(
                    (category: Category, index: number) => {
                      if (index > 7) {
                        return (
                          <div key={category.id} className=" bg-gradient-to-tr from-gray-700 via-transparent to-gray-700 p-px rounded-full">
                            <button
                              style={{cursor: "pointer"}}
                              onClick={() => handleDataFetching(category.slug)}
                              className={`inline-flex items-center justify-between gap-4 rounded-full px-9 py-3 shadow-lg ${category.slug === id ? "hover:bg-gradient-to-tr hover:from-black hover:via-gray-900 hover:to-black bg-gradient-to-r from-[#a56b81] via-[#FF8DB9] to-[#ff5b24] text-black" : "bg-gradient-to-tr from-black via-gray-900 to-black hover:bg-gradient-to-tb hover:from-gray-900 hover:via-black hover:to-gray-900"} transition-all duration-400 text-white`}
                            >
                              <h1 className="text-[18px] font-normal leading-[21.78px]">
                                {category.name}
                              </h1>
                            </button>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    }
                  )
                : null}
            </div>
            <div className="py-24">
              <CustomPerformerSlider images={categoryData?.artist_list} />
            </div>
          </div>
        }
      />
    </Section>
  );
};

export { BrowsePerformer };
