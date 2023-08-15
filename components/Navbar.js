"use client";

import { useState, useEffect } from "react";

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
    <nav
      className={`text-white flex justify-between py-4 px-12 fixed w-full items-center z-40 font-lato ${
        scrolling
          ? "bg-[rgba(0,0,0,.5)] transition duration-300 ease-in-out"
          : "bg-transparent transition duration-300 ease-in-out"
      }`}
    >
      <div className="flex gap-16 font-medium text-lg">
        <p>Logo</p>
        <p>Games</p>
        <p>About Us</p>
        <p>Degen Fat Cats</p>
        <p>Careers</p>
      </div>
      <button className="rounded-full p-2 px-3 bg-[#312966] flex items-center gap-4 text-[#C4C2D2]">
        <img src="/images/phantom.png" alt="Phantom Icon" className="w-8" />
        Download Phantom
      </button>
    </nav>
  );
};

export default Navbar;
