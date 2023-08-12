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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white flex justify-between py-8 px-12 fixed w-full items-center z-40 ${
        scrolling
          ? "bg-gray-950 transition duration-300 ease-in-out"
          : "bg-transparent transition duration-300 ease-in-out"
      }`}
    >
      <div className="flex gap-16 font-medium">
        <p>Logo</p>
        <p>Games</p>
        <p>About Us</p>
        <p>Degen Fat Cats</p>
        <p>Careers</p>
      </div>
      <button className="rounded-full p-2 bg-[#312966]">
        Download Phantom
      </button>
    </nav>
  );
};

export default Navbar;
