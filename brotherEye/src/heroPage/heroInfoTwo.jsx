import HeroDetails from "./heroDetails";
export default function HeroInfoTwo({ name }) {
  return (
    <div className="w-[307px] h-[213px] bg-containerColor hover:ring-2 hover:ring-textColor duration-300 transition-all absolute right-0 top-0 mt-24 mr-[372px] flex items-center rounded-sm shadow-sm shadow-black">
      <div className="font-inconsolata text-textColor text-left self-start text-[18px] ml-5 mt-2">
        <div className="text-[24px]">Work.</div>
        <HeroDetails heroName={name} fields={["occupation"]} />
        -<HeroDetails heroName={name} fields={["base"]} />
      </div>
    </div>
  );
}
