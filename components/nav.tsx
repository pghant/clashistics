'use client';

import Link from 'next/link';
import { useState } from 'react';

type NavLinkProps = {
    isActive: boolean;
    href: string;
    text: string
}

function NavLink({isActive, href, text}: NavLinkProps) {
    return (
        <li className="my-4 pl-2 md:my-0 md:pl-2 md:pr-1">
            <a
                className="active disabled:text-black/30 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href={href}
            >
                {text}
            </a>
        </li>
    );
}

export default function Nav() {
    const [showNav, setShowNav] = useState(false);

    function handleNavToggle() {
        console.log('toggle the menu');
        setShowNav(!showNav);
    }

    return (
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 md:flex-wrap md:justify-start md:py-4"
        >
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ml-2">
                    <Link className="text-xl text-neutral-800 dark:text-neutral-200" href="/">Clashistics</Link>
                </div>
                <button
                    className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
                    type="button"
                    aria-expanded="false"
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
                <div className="visible mt-2 hidden flex-grow basis-[100%] items-center md:mt-0 md:flex md:basis-auto">
                    <ul className="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row">
                        <li className="my-4 pl-2 md:my-0 md:pl-2 md:pr-1">
                            <a
                                className="active disabled:text-black/30 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1">
                            <a
                                className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li className="mb-4 pl-2 md:mb-0 md:pl-0 md:pr-1">
                            <a
                                className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 md:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                href="#"
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}