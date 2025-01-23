import HeroDetails from "./heroDetails";
export default function HeroChart({ name }) {
  return (
    <div className="w-[852px] h-[615px] bg-containerColor hover:ring-2 hover:ring-textColor duration-300 transition-all absolute left-0 top-0 mt-24 ml-10 flex justify-center items-center  rounded-sm shadow-sm shadow-black">
      <HeroDetails heroName={name} fields={["chart"]} />
    </div>
  );
}
