export default function SmallNews({ article }) {
  const maxTitleLength = 29; // Set desired max title length
  const maxDescriptionLength = 136; // Set desired max description length

  return (
    <div className="h-[235px] w-[256px] text-[28px] text-white font-inconsolata flex">
      {article ? (
        <div>
          {/* Article Title */}
          <div className="text-left font-bold text-[#ff1c58]">
            {article.title.length > maxTitleLength
              ? `${article.title.substring(0, maxTitleLength)}...`
              : article.title}
          </div>

          {/* Article Description */}
          <div className="text-[15px] text-left mt-3 text-[#00b7eb]">
            {article.description.length > maxDescriptionLength
              ? `${article.description.substring(0, maxDescriptionLength)}...`
              : article.description}
          </div>

          {/* Published Date */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-[12px] flex justify-center items-center w-full mt-3 h-6 drop-shadow-sm hover:bg-[#ff1c58] hover:text-black duration-150 transition-all shadow-black rounded-sm"
          >
            Published on{" "}
            {new Date(article.publishedAt).toLocaleDateString(undefined, {
              month: "numeric",
              day: "numeric",
            })}{" "}
            by {article.author || "Unknown"}
          </a>
        </div>
      ) : (
        <div className="text-center text-[#ff1c58]">Loading...</div>
      )}
    </div>
  );
}
