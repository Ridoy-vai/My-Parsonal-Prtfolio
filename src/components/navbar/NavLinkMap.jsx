'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavLinkMap = ({ NavButtons }) => {
  const pathname = usePathname();

  return (
    <>
      {
        NavButtons.map((NavButton, index) => {
          const isActive = pathname === NavButton.Path;

          return (
            <li key={index}>
              <Link
                href={NavButton.Path}
                className={`px-3 py-2 rounded 
                  ${isActive ? "bg-blue-500 text-white" : "text-gray-700"}
                `}
              >
                {NavButton.name}
              </Link>
            </li>
          );
        })
      }
    </>
  );
};

export default NavLinkMap;