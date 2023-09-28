'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  text: string;
  handleNavLinkClick: () => void;
};

function NavLink({ href, text, handleNavLinkClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="my-2 pl-2 md:my-0 md:pl-0 md:pr-1">
      <Link
        className={`${
          isActive ? 'active' : ''
        } p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 md:px-2 [&.active]:text-teal-600 dark:[&.active]:text-teal-400`}
        aria-current="page"
        href={href}
        onClick={handleNavLinkClick}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  function handleNavToggle() {
    setShowNav(!showNav);
  }

  function handleNavLinkClick() {
    setShowNav(false);
  }

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 md:flex-wrap md:justify-start md:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2 md:mr-2">
          <Link
            className="text-xl text-neutral-800 dark:text-neutral-200"
            href="/"
          >
            Clashistics
          </Link>
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
          type="button"
          aria-expanded={showNav}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className={`${
            showNav ? '' : 'hidden'
          } mt-2 flex-grow basis-[100%] items-center md:mt-0 md:flex md:basis-auto`}
        >
          <ul className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row">
            <NavLink
              href="/"
              text="Home"
              handleNavLinkClick={handleNavLinkClick}
            />
            <NavLink
              href="/about"
              text="About"
              handleNavLinkClick={handleNavLinkClick}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
