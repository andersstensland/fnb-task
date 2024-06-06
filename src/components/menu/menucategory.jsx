import React from "react";

const MenuCategory = ({ category, onUpdate }) => {
  return (
    <div className="menu-category">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      {category.subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          className="subcategory mb-8">
          <h3 className="text-xl font-semibold mb-2">{subcategory.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subcategory.items.map((item) => (
              <div
                key={item.id}
                className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex items-center mt-2">
                  <button className="text-red-500 border border-red-500 px-2 py-1 rounded">
                    -
                  </button>
                  <span className="mx-2">0</span>
                  <button className="text-green-500 border border-green-500 px-2 py-1 rounded">
                    +
                  </button>
                </div>
                <button
                  onClick={() => onUpdate(item.id, 1)}
                  className="mt-2 bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-400">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;
