import React from "react";
import MenuItem from "./menuitem"; // Ensure this is the correct import path

const MenuCategory = ({ categories, onUpdate, activeCategoryId }) => {
  return (
    <div className="my-4">
      {categories
        .filter((category) => category._id === activeCategoryId)
        .map((category) => {
          const subcategories = category.subcategories || [];
          return (
            <div key={category._id}>
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              {subcategories.length > 0 ? (
                subcategories.map((subcategory) => (
                  <div key={subcategory._id} className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {subcategory.name || "Unnamed Subcategory"}
                    </h3>
                    {subcategory.items && subcategory.items.length > 0 ? (
                      subcategory.items.map((item) => (
                        <MenuItem
                          key={item._id}
                          item={item}
                          onUpdate={onUpdate}
                        />
                      ))
                    ) : (
                      <p>No items in this subcategory.</p>
                    )}
                  </div>
                ))
              ) : (
                <p>No subcategories available.</p>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default MenuCategory;
