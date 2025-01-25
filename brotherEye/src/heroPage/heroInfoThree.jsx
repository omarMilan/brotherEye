import HeroDetails from "./heroDetails";

export default function HeroInfoThree({ name }) {
  return (
    <div className="w-[307px] h-[381px] bg-[#101010] border-2 border-[#00b7eb] overflow-y-auto hover:ring-2 hover:ring-[#ff1c58] duration-300 transition-all absolute right-0 top-0 mt-[330px] mr-[372px] flex flex-col items-center rounded-lg shadow-md shadow-black">
      <div className="font-inconsolata text-[#ff1c58] text-left self-start text-[18px] ml-5 mt-2">
        <div className="text-[24px] text-[#00b7eb] font-bold">Connections.</div>
        <HeroDetails heroName={name} fields={["groupAffiliations"]} />
        <span className="text-[#ff1c58]">-</span>
        <HeroDetails heroName={name} fields={["relatives"]} />
      </div>
    </div>
  );
}
