'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Badge from '../Badge';
import NavSearchBox from './NavSearchBox';
import SideNavbar from './SideNavbar';
import SubNav from './SubNavbar';

const Navbar = () => {
    const sideNavRef = React.useRef<HTMLDivElement | null>(null);
    // const screenWidth = window.innerWidth;
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [sideNavOpen, setSideNavOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event: any) => {
            if (
                sideNavRef.current &&
                !sideNavRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sideNavRef]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full h-fit border-b border-slate-200 sticky top-0 z-50 bg-white">
            {/* main nav bar */}
            <div className="container relative">
                <div className="h-16 md:h-24 flex items-center justify-between border-b border-dashed border-slate-2">
                    <div className="flex items-center space-x-3">
                        {/* menu toggle button for mobile or tablat */}
                        <button
                            onClick={handleMenuClick}
                            aria-labelledby="menuButton"
                            className="flex md:hidden text-gray-500"
                        >
                            {!sideNavOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-gray-500"
                                >
                                    <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
                                </svg>
                            )}
                        </button>

                        {/* logo */}
                        <Link href="/">
                            <div className="relative w-28 h-10 sm:w-36 sm:h-14">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    fill
                                    sizes="150px"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* search bar */}
                    <NavSearchBox />
                    {/* nav links */}
                    <ul className="flex items-center space-x-5">
                        {/* search button */}
                        <li>
                            <Link
                                href="/"
                                className="flex lg:hidden text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="i fi-rr-search" />
                                    </span>
                                </div>
                            </Link>
                        </li>

                        {/* contact button */}
                        <li>
                            <Link
                                href="/"
                                className="hidden md:flex text-slate-700 space-x-2 group select-none border-0 lg:border-r border-slate-200 lg:pr-3"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="i fi-rr-headset" />
                                    </span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <span className="block text-gray-500 text-xs">
                                        Contact
                                    </span>
                                    <span className="whitespace-nowrap text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        123-456-7890
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/account"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="fi fi-rr-user" />
                                    </span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <span className="block text-gray-500 text-xs">
                                        Sign In
                                    </span>
                                    <span className="whitespace-nowrap text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        Account
                                    </span>
                                </div>
                            </Link>
                        </li>

                        {/* favorite */}
                        <li>
                            <Link
                                href="/"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center mt-1">
                                    <Badge badge="3">
                                        <span className="text-xl sm:text-2xl group-hover:text-blue-500">
                                            <i className="fi fi-rr-heart" />
                                        </span>
                                    </Badge>
                                </div>
                            </Link>
                        </li>

                        {/* cart */}
                        <li>
                            <Link
                                href="/carts"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center mt-1">
                                    <Badge badge="5">
                                        <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                            <i className="fi fi-rr-shopping-cart" />
                                        </span>
                                    </Badge>
                                </div>
                                <div className="hidden sm:inline-block">
                                    <span className="block text-gray-500 text-[10px] sm:text-xs">
                                        Total
                                    </span>
                                    <span className="whitespace-nowrap text-sm sm:text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        $ 300.00
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div ref={sideNavRef}>
                    <SideNavbar
                        setNavIsOpen={setIsOpen}
                        onClick={handleMenuClick}
                        className={`absolute top-0 left-0 transition-all h-screen  w-64 delay-150 ease-in-out origin-left z-20 md:hidden ${
                            isOpen
                                ? 'opacity-100 visible scale-x-100'
                                : 'opacity-0 invisible scale-x-0'
                        }`}
                    />
                </div>
                <div
                    className={`absolute h-screen transition-all delay-150 ease-in-out w-full top-0 left-0 bg-[#5c5c5c67] z-10 ${
                        isOpen
                            ? 'visible  opacity-100 md:invisible md:opacity-0'
                            : 'invisible opacity-0'
                    }`}
                ></div>
            </div>

            {/* sub nav bar */}
            <SubNav />
        </div>
    );
};

export default Navbar;
