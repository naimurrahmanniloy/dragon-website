import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  return (
    <div>
      <div className="max-w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden font-sans ">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 pb-0">
          <div className="flex items-center space-x-3">
            <Image
              src={singleNews?.author?.img}
              alt="Author Avatar"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none">
                {singleNews?.author?.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {" "}
                {singleNews?.author?.published_date}
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <button className="hover:text-gray-600">🔖</button>
            <button className="hover:text-gray-600">🔗</button>
          </div>
        </div>

        {/* Main Headline */}
        <div className="p-4">
          <h2 className="text-xl font-extrabold text-gray-800 leading-tight">
            {singleNews?.title}
          </h2>
        </div>

        {/* Featured Image */}
        <div className="px-4">
          <Image
            src={singleNews?.image_url}
            alt="Featured Image"
            width={800}
            height={400}
          />
        </div>

        {/* Article Content */}
        <div className="p-4 space-y-2">
          <p className="text-sm text-gray-600 leading-relaxed">
            {singleNews?.details.length > 250
              ? singleNews?.details.slice(0, 250) + "..."
              : singleNews?.details}
          </p>
          <Link
            href={`/news/${singleNews?._id}`}
            className="inline-block text-orange-600 font-bold text-sm hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="mx-4 mb-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-orange-400">
            <span className="text-xs">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-semibold text-gray-500">4.9</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <span className="text-lg">👁️</span>
            <span className="text-sm font-medium">
              {singleNews?.total_view}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
