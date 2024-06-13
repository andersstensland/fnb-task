import React from "react";
import MenuItem from "./menuitem";

const MenuCategory = ({ categories, onUpdate, activeCategoryId }) => {
  // Check if categories are loaded and if the active category ID is set
  if (!categories || categories.length === 0) {
    return <p>Loading categories or no categories available...</p>;
  }

  // Filter and map categories based on active category ID
  return (
    <div className="my-4">
      {categories
        .filter((category) => category._id === activeCategoryId)
        .map((category) => {
          const subcategories = category.subcategories || [];
          return (
            <div key={category._id}>
              <h2 className="text-2xl font-bold mb-2" key={category._id}>
                {category.name}
              </h2>
              {subcategories.length > 0 ? (
                subcategories.map((subcategory) => (
                  <div key={subcategory._id}>
                    <h3 className="text-2xl font-semibold mb-2 mt-12">
                      {subcategory.name || "Unnamed Subcategory"}
                    </h3>
                    <div
                      key={subcategory._id}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
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
