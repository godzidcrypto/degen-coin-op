"use client";

import Image from "next/image";
import useSWR from "swr";
import { motion } from "framer-motion";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AboutUs = () => {
  const { data, isLoading } = useSWR("/api/stats", fetcher);

  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + " m";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + " k";
    } else {
      return number.toString();
    }
  }

  return (
    <section
      className="bg-dcfRed extendHomeSpacing min-h-[80vh] relative z-20"
      id="about-us"
    >
      <div className="absolute h-full my-auto w-auto top-0 bottom-0 opacity-20 lg:opacity-50 xl:opacity-100">
        <img
          alt="Cat on Cloud 1"
          src="/images/adam-left.png"
          className="h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 h-[80%] my-auto w-auto top-0 bottom-0 opacity-20 lg:opacity-50 xl:opacity-100">
        <img
          alt="Cat on Cloud 2"
          src="/images/adam-right.png"
          className="h-full object-contain"
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-400px" }}
        className="flex flex-col gap-8 justify-center items-center text-center min-h-[80vh] relative z-20 px-0 md:px-8 py-8 md:py-0"
      >
        <Image
          width={400}
          height={400}
          src="/images/logo-main.png"
          alt="Degen Coin Op Logo"
          className="w-auto scale-100 md:scale-[2]"
        />
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
          <span className="text-sm">About Us</span>
          <br />
          The Best Solana People Making The Best Games
        </h1>
        <div className="grid md:grid-cols-3 gap-4 md:gap-24">
          <div className="flex flex-col items-center">
            <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <path
                    fill="currentColor"
                    d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
                  />
                </g>
              </svg>
            </div>
            <div className="font-lato">
              <span className="uppercase font-bold text-3xl">
                {isLoading
                  ? "-"
                  : formatNumber(data.stats.payload[0]?.uniquePlays)}
              </span>
              <p className="uppercase font-light text-sm">Unique Players</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78Zm-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78Zm11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78Z"
                />
              </svg>
            </div>
            <div className="font-lato">
              <span className="uppercase font-bold text-3xl">
                {isLoading
                  ? "-"
                  : formatNumber(data.stats.payload[0]?.totalSol)}
              </span>
              <p className="uppercase font-light text-sm">Sol Flipped</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black text-dcfRed rounded-full p-2 max-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                />
              </svg>
            </div>
            <div className="font-lato">
              <span className="uppercase font-bold text-3xl">
                {isLoading
                  ? "-"
                  : formatNumber(data.stats.payload[0]?.totalPlays)}
              </span>
              <p className="uppercase font-light text-sm">Games Played</p>
            </div>
          </div>
        </div>
        <button className="uppercase text-black bg-white rounded-full p-4 px-16 button-hover-effect">
          <p>Build With Us</p>
        </button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
