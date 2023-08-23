"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    handleScroll(); // Check initial scroll position on load

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`text-white hidden md:flex justify-between py-4 px-4 lg:px-12 fixed w-full items-center z-40 font-lato ${
          scrolling
            ? "bg-[rgba(0,0,0,.5)] transition duration-300 ease-in-out"
            : "bg-transparent transition duration-300 ease-in-out"
        }`}
      >
        <div className="flex items-center md:gap-6 lg:gap-16 font-medium text-lg">
          <Link href={"#"}>
            <Image
              width={100}
              height={100}
              src="/images/logo-nav.png"
              alt="Degen Coin Op Logo"
            />
          </Link>
          <Link href={"#games"}>Games</Link>
          <Link href={"#about-us"}>About Us</Link>
          <Link href={"#factions"}>Degen Fat Cats</Link>
          <Link href={"#careers"}>Careers</Link>
        </div>
        <button className="rounded-full p-2 px-3 bg-[#312966] flex items-center gap-4 text-[#C4C2D2]">
          <img src="/images/phantom.png" alt="Phantom Icon" className="w-8" />
          Download Phantom
        </button>
      </nav>
      {/* mobile nav */}
      <nav
        className={`text-white flex md:hidden justify-between py-4 px-4 lg:px-12 fixed w-full items-center z-40 font-lato ${
          scrolling || open
            ? "bg-[rgba(0,0,0,.9)] transition duration-300 ease-in-out"
            : "bg-transparent transition duration-300 ease-in-out"
        }`}
      >
        <Image
          width={100}
          height={100}
          src="/images/logo-nav.png"
          alt="Degen Coin Op Logo"
        />
        <button
          className={`focus:ring-2 focus:ring-white rounded-lg p-2`}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
              fill="currentColor"
            />
            <path
              d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
              fill="currentColor"
            />
            <path
              d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div
          className={`${
            open ? "opacity-100" : "opacity-0"
          } flex flex-col absolute top-[84px] left-0 w-full bg-shpccRed gap-4 py-8 px-6 md:px-12 z-20 ${
            scrolling || open
              ? "bg-[rgba(0,0,0,.9)] transition duration-300 ease-in-out"
              : "bg-transparent transition duration-300 ease-in-out"
          }`}
        >
          <Link href={"#games"} legacyBehavior>
            <a onClick={() => setOpen(false)}>Games</a>
          </Link>
          <Link href={"#about-us"} legacyBehavior>
            <a onClick={() => setOpen(false)}>About Us</a>
          </Link>
          <Link href={"#factions"} legacyBehavior>
            <a onClick={() => setOpen(false)}>Degen Fat Cats</a>
          </Link>
          <Link href={"#careers"} legacyBehavior>
            <a onClick={() => setOpen(false)}>Careers</a>
          </Link>
          <button className="rounded-full p-2 px-3 bg-[#312966] flex items-center justify-center gap-4 text-[#C4C2D2]">
            <img src="/images/phantom.png" alt="Phantom Icon" className="w-8" />
            Download Phantom
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
