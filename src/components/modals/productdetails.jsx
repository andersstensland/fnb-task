import React, { useState } from "react";
import FullScreenModal from "@/components/modals/fullscreenmodal";

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) => {
      const index = prev.indexOf(topping);
      if (index >= 0) return prev.filter((item) => item !== topping);
      return [...prev, topping];
    });
  };

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto p-4">
          <h2 className="text-xl font-bold">{product}</h2>
          <p>{product}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Allergens:</h3>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Add/Remove Toppings:</h3>
          </div>
        </div>
        <div className="bg-gray-200 p-4 sticky bottom-0 flex justify-between items-center">
          <span>Total: {product} kr</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Basket
          </button>
        </div>
      </div>
    </FullScreenModal>
  );
};

export default ProductDetailsModal;
