import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between sticky w-full z-50 ">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <div className="navbar flex items-center text-xl font-medium text-white gap-10">
        {props.children}
      </div>
    </nav>
  </div>
);

export { NavbarTwoColumns };
