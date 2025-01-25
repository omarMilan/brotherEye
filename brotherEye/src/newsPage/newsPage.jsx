import { useEffect, useState } from "react";
import "../index.css";
import SmallNews from "./smallNews";

const API =
  "https://newsapi.org/v2/everything?q=superhero&apiKey=94821f6383714cc59d8b17000a7bf0cb";

export default function NewsPage() {
  const [news, setNews] = useState(null); // Default state as null to handle conditional rendering

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(API);
        const json = await result.json();
        setNews(json); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Handle fetch errors
      }
    };
    fetchData();
  }, []);

  // Articles
  const firstArticle = news?.articles?.[1];
  const secondArticle = news?.articles?.[2];
  const thirdArticle = news?.articles?.[3];

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black flex-col grid grid-flow-row gap-y-10 justify-center items-center overflow-y-auto">
      <div className="bg-gray-500 w-[1241px] h-[310px] mt-28"></div>
      <div className="grid grid-cols-[auto_auto] gap-x-40 items-center">
        <div className="translate-x-20 flex items-center">
          <SmallNews article={firstArticle} className="m-0 p-0" />
        </div>
        <div className="bg-gray-500 w-[748px] h-[310px] m-0 p-0 flex items-center justify-center">
          {/* Add content here if needed */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        <div className="bg-gray-500 w-[300px] h-[310px] mb-10 flex items-center justify-center">
          {/* Add content here if needed */}
        </div>
        <div className="flex items-center justify-center -translate-y-5">
          <SmallNews article={secondArticle} className="m-0 p-0" />
        </div>
        <div className="flex items-center justify-center -translate-y-5">
          <SmallNews article={thirdArticle} className="m-0 p-0" />
        </div>
      </div>
    </div>
  );
}
