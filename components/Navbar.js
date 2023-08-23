"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      <nav
        className={`text-white flex md:hidden justify-between py-4 px-4 lg:px-12 fixed w-full items-center z-40 font-lato ${
          scrolling
            ? "bg-[rgba(0,0,0,.5)] transition duration-300 ease-in-out"
            : "bg-transparent transition duration-300 ease-in-out"
        }`}
      >
        {/* <div className="flex items-center md:gap-6 lg:gap-16 font-medium text-lg"> */}
        <Image
          width={100}
          height={100}
          src="/images/logo-nav.png"
          alt="Degen Coin Op Logo"
        />
        {/* </div> */}
        <button className="rounded-full p-2 px-3 bg-[#312966] flex items-center gap-4 text-[#C4C2D2]">
          <img src="/images/phantom.png" alt="Phantom Icon" className="w-8" />
          Download Phantom
        </button>
      </nav>
    </>
  );
};

export default Navbar;
