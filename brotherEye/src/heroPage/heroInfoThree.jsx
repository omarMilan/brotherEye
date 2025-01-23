import HeroDetails from "./heroDetails";
export default function HeroInfoThree({ name }) {
  return (
    <div className="w-[307px] h-[381px] bg-containerColor absolute hover:ring-2 overflow-y-auto hover:ring-textColor duration-300 transition-all right-0 top-0 mt-[330px] mr-[372px] flex flex-col items-center rounded-sm shadow-sm shadow-black">
      <div className="font-inconsolata text-textColor text-left self-start text-[18px] ml-5 mt-2">
        <div className="text-[24px]">Connections.</div>
        <HeroDetails heroName={name} fields={["groupAffiliations"]} />
        -<HeroDetails heroName={name} fields={["relatives"]} />
      </div>
    </div>
  );
}
