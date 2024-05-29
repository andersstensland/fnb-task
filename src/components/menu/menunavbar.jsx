import React from "react";

export default function MenuNavbar({
  categories,
  onCategoryChange,
  activeCategoryId,
}) {
  return (
    <nav className="w-full p-4 border-b overflow-x-auto">
      <ul className="flex justify-start items-center space-x-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`font-bold text-black hover:text-orange-500 cursor-pointer ${category.id === activeCategoryId ? "border-b-2 border-orange-300 pb-2" : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}