import React, { useState } from "react";

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [toppings, setToppings] = useState([]);

  const toggleTopping = (topping) => {
    setToppings((prev) => {
      const currentIndex = prev.indexOf(topping);
      if (currentIndex === -1) {
        return [...prev, topping];
      } else {
        return prev.filter((item) => item !== topping);
      }
    });
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (delta) => {
    let newQuantity = quantity + delta;
    if (newQuantity < 1) newQuantity = 1;
    setQuantity(newQuantity);
  };

  const totalCost = calculateTotalCost();

  function calculateTotalCost() {
    // Placeholder cost calculation
    return 175 + toppings.reduce((acc, curr) => acc + curr.cost, 0);
  }

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-lg h-full">
        <button onClick={onClose} className="absolute top-10 right-0 p-4">
          ✖️
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Pineapple Ham Pizza</h2>
          <div className="my-4">
            <img
              src="path_to_pizza_image.png"
              alt="Pineapple Ham Pizza"
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            {["Small", "Medium", "Large"].map((s) => (
              <button
                key={s}
                className={`py-1 px-4 border ${size === s ? "border-black" : "border-transparent"}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="text-xl font-semibold mt-2">{totalCost} NOK</div>
          <p className="mt-2">Pizza with pineapple and ham</p>
          <div className="mt-4">
            <h3 className="font-semibold">Allergies:</h3>
            {/* Example allergen list */}
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Extra topping:</h3>
            {["Pineapple", "Ham", "Cheese", "Sauce"].map((topping) => (
              <div key={topping} className="flex justify-between items-center">
                <span>{topping}</span>
                <input
                  type="checkbox"
                  onChange={() => toggleTopping({ name: topping, cost: 10 })}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="fixed w-full p-4 justify-between items-center bg-orange-300 bottom-0 rounded-md">
          <span>Antall</span>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="text-2xl"
            >
              −
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="text-2xl"
            >
              +
            </button>
          </div>
          <button className="bg-white text-black px-8 py-2 rounded-md w-full">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetailsModal;
