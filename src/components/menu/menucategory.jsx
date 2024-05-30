import React from "react";
import MenuItem from "./MenuItem"; // Ensure this is the correct import path

const MenuCategory = ({ category, onUpdate }) => {
  // Check for null and ensure it defaults to an empty array if subcategories is null
  const subcategories = category.subcategories || [];

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
      {subcategories.length > 0 ? (
        subcategories.map((subcategory) => (
          <div key={subcategory._id} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              {subcategory.title || "Unnamed Subcategory"} // Handle undefined
              or null titles
            </h3>
            {/* Ensure items are handled even if subcategory.items is undefined */}
            {subcategory.items && subcategory.items.length > 0 ? (
              subcategory.items.map((item) => (
                <MenuItem key={item._id} item={item} onUpdate={onUpdate} />
              ))
            ) : (
              <p>No items in this subcategory.</p> // Message if no items
            )}
          </div>
        ))
      ) : (
        <p>No subcategories available.</p> // Display a message if there are no subcategories
      )}
    </div>
  );
};

export default MenuCategory;
