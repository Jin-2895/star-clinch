import Link from "next/link";
import { useState } from "react";

import { Section } from "@/layout/Section";
import { NavbarTwoColumns } from "@/navigation/NavbarTwoColumns";
import { MdMenu } from "react-icons/md";

import { Logo } from "./Logo";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import MyNavbar from "./SingleArtist/Components/MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Section yPadding="py-6 px-10">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <div className="block lg:hidden">
          <MdMenu
            className="text-white"
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
        </div> */}
        <MyNavbar  />

        <div className="hidden lg:flex gap-4">
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
                <div className="relative">
                  <div>
                    <div className="grid grid-cols-4 gap-12 rounded-xl  p-6 ">
                      <div className="flex flex-col gap-10">
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Anchor/Emcee</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Instrumentalist</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Dj</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Live Brancd</Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Makeup-Artist/Stylist</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Photo/Videographer</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Speaker</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Celebrities Appearance</Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Dancer/Troupe</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Comedian</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Magician</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Model</Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Singer</Link>
                        </div>
                        <div
                          role="menuitem"
                          className="cursor-pointer transition-all duration-300 hover:text-orange-600"
                        >
                          <Link href="/">Variety Artist</Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </NavbarTwoColumns>
      {/* <Drawer
        placement="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(!drawerOpen)}
        className="p-4"
        children={
          <div className="flex items-center justify-between px-4 pb-2">
            <h1>Contact Us</h1>
          </div>
        }
        placeholder={""}
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      /> */}
    </Section>
  );
};

export { Navbar };
