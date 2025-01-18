import HeroDetails from "./heroDetails";
export default function HeroInfoThree({ name }) {
  return (
    <div className="w-[852px] h-[213px] bg-containerColor absolute left-0 bottom-0 -mb-28 ml-10 flex flex-col items-center rounded-sm shadow-sm shadow-black">
      <div className="font-inconsolata text-textColor text-left self-start text-[18px] ml-5 mt-2">
        <div className="text-[24px]">Connections.</div>
        <HeroDetails heroName={name} fields={["groupAffiliations"]} />
        -<HeroDetails heroName={name} fields={["relatives"]} />
      </div>
    </div>
  );
}
