import React from "react";

export default function MenuNavbar({
  categories,
  onCategoryChange,
  activeCategoryId,
}) {
  return (
    <nav className="w-full p-4 border-b overflow-x-auto">
      <ul className="flex justify-start items-center space-x-4">
        {categories ? (
          categories.map((category) => (
            <li
              key={category._id} // Use _id which is unique across the dataset
              className={`font-bold text-black cursor-pointer ${
                category._id === activeCategoryId
                  ? "border-b-2 border-orange-300"
                  : ""
              }`}
              onClick={() => onCategoryChange(category._id)} // Use _id for callback
            >
              {category.name} {/* Display category name */}
            </li>
          ))
        ) : (
          <p>Loading categories...</p> // Loading message or spinner
        )}
      </ul>
    </nav>
  );
}
