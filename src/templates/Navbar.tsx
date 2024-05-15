import React, { useState } from "react";
import { Section } from "@/layout/Section";
import { NavbarTwoColumns } from "@/navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { Category, HomeData } from "@/types/types";
import Link from "next/link";

type INavbarProps = {
  categoriesData?: HomeData | null | undefined;
  categories?: Category[] | null | undefined;
};

type IMobileNavbarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function MobileNav({ open, setOpen }: IMobileNavbarProps) {
  return (
    <div
      className={`absolute top-0 -left-[50px] h-screen w-screen bg-black md:hidden transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex flex-col ml-4 justify-center items-center gap-4">
        <Link className="text-xl font-medium my-4" href="/">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500"
          >
            Join Community
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/about">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500 transition-all"
          >
            Post Requirement
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/contact">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl font-semibold hover:text-green-500 transition-all"
          >
            Contact Us
          </h1>
        </Link>
        <Link className="text-xl font-normal my-4" href="/faq">
          <h1
            onClick={() => setOpen(!open)}
            className="text-xl  font-semibold hover:text-green-500 transition-all"
          >
            FAQs
          </h1>
        </Link>
      </div>
      <div className="flex justify-center gap-3 py-11 ml-4">
        <div>
          {/* <Image width={40} height={40} src={facebook} alt="facebook" /> */}
        </div>
        <div>
          {/* <Image width={40} height={40} src={instagram} alt="instagram" /> */}
        </div>
        <div>
          {/* <Image width={40} height={40} src={tiktok} alt="tiktok" /> */}
        </div>
      </div>
    </div>
  );
}

const Navbar = ({ categoriesData, categories }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <MobileNav open={open} setOpen={setOpen} />
        <div className="hidden lg:flex items-center text-xl font-medium text-white gap-10">
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
                  {categoriesData &&
                    categoriesData?.categories?.map((category: Category) => (
                      <Link
                        key={category.id}
                        className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        href={`/${category.slug}`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  {categories &&
                    categories?.map((category: Category) => (
                      <Link
                        key={category.id}
                        className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        href={`/${category.slug}`}
                      >
                        {category.name}
                      </Link>
                    ))}
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
        </div>
        <nav className="container mx-auto flex lg:hidden flex-row filter bg-opacity-96 px-3 h-[4rem] items-center">
          <div className="md:w-2/12 w-9/12 flex justify-end items-center lg:hidden">
            <div
              className="z-50 flex relative w-8 h-4 flex-col justify-between items-center md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-[80%] bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-[100%]"
                }`}
              />
              <span
                className={`h-1 w-[80%] bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </div>
        </nav>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
