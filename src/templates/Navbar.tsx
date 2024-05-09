import Link from "next/link";
import { useState } from "react";
import React from 'react';
import { Section } from "@/layout/Section";
import { NavbarTwoColumns } from "@/navigation/NavbarTwoColumns";

import { Logo } from "./Logo";
import { Category, Main } from "@/types/types";

type INavbarProps = {
  categoriesData?: Main | null | undefined
  categories?: Category[] | null | undefined
}

const Navbar = ({categoriesData, categories}: INavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-row items-center justify-center gap-4 transition-all duration-300 hover:text-orange-600"
            >
              Book Celebrities
              <svg
                width="18"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.68571L11.5556 13L20 1"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen ? (
              <div className="absolute right-6 top-[4.5rem] z-10 w-[80rem] overflow-hidden rounded-xl bg-gradient-to-b from-[#080810] to-[#151526] p-[2px]">
                    <div className="grid grid-cols-4 gap-12 rounded-xl  p-6">
                      {categoriesData && categoriesData?.categories?.map(((category: Category) =>  (
                            <Link key={category.id} className="cursor-pointer transition-all duration-300 hover:text-orange-600" href={{
                              pathname: `/various-artists/${category.slug}`,
                              query: {  category: JSON.stringify(category) }
                            }} >{category.name}</Link>
                        )))}
                        {categories && categories?.map(((category: Category) =>  (
                            <Link key={category.id} className="cursor-pointer transition-all duration-300 hover:text-orange-600" href={{
                              pathname: `/various-artists/${category.slug}`,
                              query: {  category: JSON.stringify(category) }
                            }} >{category.name}</Link>
                        )))}
                  <div className="absolute flex -top-10 -left-24 justify-center items-center -z-10">
                    <div className="w-[25rem] h-[25rem] rounded-full bg-gradient-to-b from-[#FF81E31F] to-[#00000000] bg-opacity-100/50 backdrop-blur-xl"></div>
                  </div>
                  <div className="absolute flex -top-20 right-0 justify-center items-center -z-20">
                    <div className="w-[15rem] h-[15rem] rounded-full bg-gradient-to-b from-[#70771A] to-[#00000005] bg-opacity-100/50 backdrop-blur-xl"></div>
                  </div>
                  <div className="absolute flex -top-5 -right-20 justify-center items-center -z-10">
                    <div className="w-[20rem] h-[20rem] rounded-full bg-gradient-to-b from-[#5B7F464D] to-[#00000002] bg-opacity-100/50 backdrop-blur-xl"></div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="transition-all duration-300 hover:text-orange-600">
            <Link href="/">Join Community</Link>
          </div>
          <div className="transition-all duration-300 hover:text-orange-600">
            <Link href="/">Post Requirement</Link>
          </div>
        </NavbarTwoColumns>
      </Section>
  );
};

export { Navbar };
