import HeroDetails from "./heroDetails";

export default function HeroChart({ name }) {
  return (
    <div className="w-[852px] h-[615px] bg-[#101010] border-2 border-[#00b7eb] hover:ring-2 hover:ring-[#ff1c58] duration-300 transition-all absolute left-0 top-0 mt-24 ml-10 flex justify-center items-center rounded-lg shadow-md shadow-black">
      <HeroDetails heroName={name} fields={["chart"]} />
    </div>
  );
}
