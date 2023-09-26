"use client";

import { DCF, DCD, DS, DCG } from "../components/home/games";
import { Hero, AboutUs, Feed, Factions, Careers } from "../components/home";

export default function Home() {
  return (
    <div className="homeSpacing">
      <Hero />
      <AboutUs />
      <Feed />
      <DCF />
      <DCD />
      <DS />
      <DCG />
      <Factions />
      <Careers />
    </div>
  );
}
