import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-5 items-center bg-gray-200 px-4 py-2 container mx-auto">
      <button className="btn bg-pink-500 text-white">Latest News</button>
      <Marquee speed={50} gradient={false}>
        Breaking News: Stay tuned for the latest updates!
      </Marquee>
    </div>
  );
};

export default BreakingNews;
