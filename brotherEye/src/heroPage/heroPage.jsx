import HeroInfoOne from "./heroInfoOne";
import HeroInfoTwo from "./heroInfoTwo";
import HeroInfoThree from "./heroInfoThree";
import HeroChart from "./heroChart";

export default function HeroPage() {
  const name = "ironman";
  return (
    <div className="w-screen min-h-screen overflow-y-auto fixed top-0 left-0 bg-backgroundColor pb-32">
      <HeroChart name={name} />
      <HeroInfoOne name={name} />

      <div className="w-[307px] h-[213px] bg-containerColor absolute right-0 bottom-0 -mb-28 mr-10 flex rounded-sm shadow-sm shadow-black"></div>
      <HeroInfoTwo name={name} />
      <HeroInfoThree name={name} />
      <div className="w-[1px] h-[100px] absolute right-0 bottom-0 -mb-32 mr-10 flex"></div>
    </div>
  );
}
