import { useEffect, useState } from "react";
import "../index.css";
import SmallNews from "./smallNews";

const API =
  "https://newsapi.org/v2/everything?q=superhero&apiKey=94821f6383714cc59d8b17000a7bf0cb";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(API);
        const json = await result.json();
        setNews(json.articles.slice(0, 6)); // Limit to the first 6 articles
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 0, 1, 2
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  if (news.length < 6) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // Split articles into two groups to ensure no overlap
  const group1 = news.slice(0, 3);
  const group2 = news.slice(3, 6);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black flex flex-col items-center overflow-y-auto">
      {/* Header */}
      <div className="mt-16 text-[48px] font-bold font-inconsolata text-transparent bg-clip-text bg-gradient-to-r from-[#ff1c58] via-[#e6003f] to-[#0046b8] drop-shadow-lg relative group">
        Latest News
        <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-gradient-to-r from-[#ff1c58] via-[#e6003f] to-[#0046b8] transition-all duration-500 group-hover:w-full"></div>
      </div>

      {/* Picture Section 1 */}
      <div className="w-[90%] max-w-[1241px] mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-500 w-full h-[310px] rounded-xl overflow-hidden shadow-lg relative group border-2 border-[#00b7eb] hover:ring-2 ring-[#ff1c58] transition-all duration-300">
          <a
            href={group1[currentIndex]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={group1[currentIndex]?.urlToImage}
              alt={group1[currentIndex]?.title || "Article"}
              className="w-full h-full object-cover group-hover:brightness-[20%] transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg font-bold px-4 text-center">
                {group1[currentIndex]?.title}
              </p>
            </div>
          </a>
        </div>

        {/* Picture Section 2 */}
        <div className="bg-gray-500 w-full h-[310px] rounded-xl overflow-hidden shadow-lg relative group border-2 border-[#00b7eb] hover:ring-2 ring-[#ff1c58] transition-all duration-300">
          <a
            href={group2[currentIndex]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={group2[currentIndex]?.urlToImage}
              alt={group2[currentIndex]?.title || "Article"}
              className="w-full h-full object-cover group-hover:brightness-[20%] transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-lg font-bold px-4 text-center">
                {group2[currentIndex]?.title}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* SmallNews Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-60 w-[90%] max-w-[1241px] mt-10 mb-3">
        <SmallNews article={group1[0]} />
        <SmallNews article={group1[1]} />
        <SmallNews article={group1[2]} />
      </div>
    </div>
  );
}
