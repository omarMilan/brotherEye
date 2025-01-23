import SearchComponent from "../reusableComponents/search";
import bg from "../assets/searchBg.jpg";

export default function SearchPage() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black flex flex-col items-center">
      <img
        src={bg}
        className="w-screen h-80 object-cover object-bottom"
        alt="Home Background"
      />
      <SearchComponent />
    </div>
  );
}
