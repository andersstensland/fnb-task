import React from "react";

export default function MenuNavbar({
  categories,
  onCategoryChange,
  activeCategoryId,
}) {
  console.log(categories);
  let lang = "en";

  return (
    <nav className="w-full p-4 border-b overflow-x-auto">
      <ul className="flex justify-start items-center space-x-4">
        {categories.map((category) => (
          <li
            key={category._id} // Use _id which is unique across the dataset
            className={`font-bold text-black hover:text-orange-500 cursor-pointer ${
              category._id === activeCategoryId
                ? "border-b-2 border-orange-300 pb-2"
                : ""
            }`}
            onClick={() => onCategoryChange(category._id)} // Use _id for callback
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
