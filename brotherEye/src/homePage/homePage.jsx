import React, { useState, useEffect } from "react";

import homeBg from "../assets/HomeBg.jpg";
import NewsSection from "./newsSection";

export default function HomePage() {
  return (
    <div className="w-screen h-screen flex overflow-y-auto items-center fixed  flex-col top-0 left-0 justify-center font-inconsolata bg-black">
      <img
        src={homeBg}
        className="w-screen h-[580px] object-cover object-bottom flex top-0 "
      />
      <div className="relative z-20 text-white text-[20px] w-full font-inconsolata flex flex-col items-start justify-start">
        <div className="text-white  pl-[87px] text-[20px]">About</div>
        <div className="text-white pl-[87px] text-[32px]">
          {" "}
          Brother Eye: Your All-Seeing Hero Hub
        </div>
        <div className="text-white pl-[87px] text-[20px]">
          Discover the ultimate database of superheroes and villains!
        </div>
        <div className="pl-[87px]">
          Explore their traits, skills, and stories, and stay updated with
        </div>
        <div className="pl-[87px]">the latest superhero news.</div>
        <div className="mt-5 pl-[87px]">
          Brother Eye – your gateway to the world of heroes and villains!
        </div>

        <div className="mt-5 mb-5 w-[237px] ml-[87px] h-[40px] bg-white shadow-sm text-black flex justify-center items-center shadow-black rounded-sm">
          Search Database
        </div>
        <NewsSection />
      </div>
    </div>
  );
}
