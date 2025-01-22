import { useEffect, useState } from "react";
import newsBg from "../assets/newsBackgroundPic.jpg";
import { useNavigate } from "react-router-dom";

export default function NewsSection() {
  const navigate = useNavigate();

  const [cursorStyle, setCursorStyle] = useState({
    top: 0,
    left: 0,
    visible: false,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle((prev) => ({
        ...prev,
        top: e.clientY - 30, // Adjust to center the circle
        left: e.clientX - 30, // Adjust to center the circle
      }));
    };

    const handleMouseEnter = () => {
      setCursorStyle((prev) => ({ ...prev, visible: true }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prev) => ({ ...prev, visible: false }));
    };

    const rectangle = document.getElementById("news-section");
    rectangle.addEventListener("mousemove", handleMouseMove);
    rectangle.addEventListener("mouseenter", handleMouseEnter);
    rectangle.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      rectangle.removeEventListener("mousemove", handleMouseMove);
      rectangle.removeEventListener("mouseenter", handleMouseEnter);
      rectangle.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      onClick={() => navigate("/news")}
      id="news-section"
      className="absolute w-full h-[400px] bg-gray-900 mt-96 flex justify-center font-inconsolata items-center cursor-none"
    >
      {/* Background Image */}
      <img
        src={newsBg}
        alt="News Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-30 hover:opacity-70 duration-300 transition-all"
      />

      {/* Content Wrapper */}
      <div className="relative text-center text-white px-6 max-w-4xl select-none">
        <h1 className="text-2xl font-bold mb-4">
          Superhero News: Movies, Games, and Comics
        </h1>
        <p className="text-lg">
          Get the latest updates on superhero movies, games, and comic books—
          all in one place. Stay in the loop with Brother Eye!
        </p>
      </div>

      {/* Custom Cursor */}
      {cursorStyle.visible && (
        <div
          style={{
            top: `${cursorStyle.top}px`,
            left: `${cursorStyle.left}px`,
          }}
          className="fixed z-50 w-28 h-28 bg-gradient-to-tr from-green-500 via-green-500 to-green-400 drop-shadow-sm text-black text-lg font-bold flex font-inconsolata items-center justify-center rounded-full pointer-events-none shadow-md transform scale-0 animate-grow"
        >
          Press
        </div>
      )}
    </div>
  );
}
