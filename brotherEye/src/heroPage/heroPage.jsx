import React from "react";
import { useLocation } from "react-router-dom";
import HeroInfoOne from "./HeroInfoOne";
import HeroInfoTwo from "./HeroInfoTwo";
import HeroInfoThree from "./HeroInfoThree";
import HeroChart from "./HeroChart";

export default function HeroPage() {
  const location = useLocation();
  const name = location.state?.heroName || "ironman"; // Default to "ironman" if no name is passed

  return (
    <div className="w-screen min-h-screen overflow-y-auto fixed top-0 left-0 bg-black pb-32">
      <HeroChart name={name} />
      <HeroInfoOne name={name} />

      <HeroInfoTwo name={name} />
      <HeroInfoThree name={name} />
    </div>
  );
}
