import HeroDetails from "./heroDetails";

export default function HeroInfoOne({ name }) {
  return (
    <div className="h-[615px] absolute right-0 top-0 mt-10 mr-10 flex flex-col items-center rounded-sm shadow-sm shadow-black w-[307px] bg-containerColor">
      {/* Image */}
      <div className="mt-8">
        <HeroDetails heroName={name} fields={["image"]} />
      </div>
      {/* Name */}
      <div className="font-inconsolata text-textColor text-[24px]">
        <HeroDetails heroName={name} fields={["name"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-5 text-[18px]">
        <HeroDetails heroName={name} fields={["gender"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["race"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["height"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["weight"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["eyeColor"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["hairColor"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["birth"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["alignment"]} />
      </div>
      <div className="font-inconsolata text-textColor self-start text-left ml-6 mt-3 text-[18px]">
        <HeroDetails heroName={name} fields={["publisher"]} />
      </div>
    </div>
  );
}
