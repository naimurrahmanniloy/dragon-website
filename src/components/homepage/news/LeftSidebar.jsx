import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-2xl">All Categories</h2>
      <ul className="mt-5">
        {categories.news_category.map((category) => (
          <li
            className={`p-3 rounded-md font-bold text-center my-2 cursor-pointer hover:bg-slate-300 ${activeId === category.category_id ? "bg-slate-300" : ""}`}
            key={category.category_id}
          >
            <Link className="block" href={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
