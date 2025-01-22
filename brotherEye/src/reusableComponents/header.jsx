import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brotherEyeLogo from "../assets/BrotherEyeLogo.webp";
import searchLogo from "../assets/searchLogo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="h-[80px] w-full bg-black z-50 top-0 flex hover:shadow-sm shadow-black fixed duration-300 transition-all hover:bg-opacity-100 bg-opacity-0 items-center font-inconsolata text-[20px]"
    >
      {/* Logo */}
      <img
        src={brotherEyeLogo}
        className="w-[70px] ml-4 opacity-60 "
        alt="Brother Eye Logo"
      />

      {/* Navigation Links */}
      <div className="gap-x-6 flex flex-row pr-10 text-white items-center opacity-100 ml-auto">
        <div onClick={() => navigate("/news")} className="cursor-pointer">
          NEWS
        </div>
        <div onClick={() => navigate("/")} className="cursor-pointer">
          ABOUT
        </div>
        <div onClick={() => navigate("/search")} className="cursor-pointer">
          {" "}
          <img
            src={searchLogo}
            className="w-[30px] h-[30px]"
            alt="Search Logo"
          />{" "}
        </div>
      </div>
    </motion.div>
  );
}
