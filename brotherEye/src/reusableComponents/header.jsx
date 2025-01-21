import brotherEyeLogo from "../assets/BrotherEyeLogo.webp";
import searchLogo from "../assets/searchLogo.png";

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-black z-50 top-0 flex hover:shadow-sm shadow-black fixed duration-300 transition-all hover:bg-opacity-90 bg-opacity-0 items-center font-inconsolata text-[20px]">
      <img src={brotherEyeLogo} className="w-[70px] h-[107px] pl-2" />

      <div className="gap-x-6 flex flex-row pr-10 text-white items-center opacity-100 ml-auto">
        <div>NEWS</div>
        <div>ABOUT</div>
        <img src={searchLogo} className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
}
