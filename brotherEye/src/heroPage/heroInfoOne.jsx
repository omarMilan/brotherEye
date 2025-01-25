import HeroDetails from "./heroDetails";

export default function HeroInfoOne({ name }) {
  return (
    <div className="h-[615px] absolute right-0 top-0 mt-24 mr-10 flex flex-col items-center rounded-lg shadow-md hover:ring-2 hover:ring-[#ff1c58] duration-300 transition-all shadow-black w-[307px] bg-[#101010] border-2 border-[#00b7eb]">
      {/* Image */}
      <div className="mt-8">
        <HeroDetails heroName={name} fields={["image"]} />
      </div>
      {/* Name */}
      <div className="font-inconsolata text-[#00b7eb] text-[24px] font-bold mt-3">
        <HeroDetails heroName={name} fields={["name"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-5 text-[18px]">
        <HeroDetails heroName={name} fields={["gender"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["race"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["height"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["weight"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["eyeColor"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["hairColor"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["birth"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["alignment"]} />
      </div>
      <div className="font-inconsolata text-[#ff1c58] self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["publisher"]} />
      </div>
    </div>
  );
}
