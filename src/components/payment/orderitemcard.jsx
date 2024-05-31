import React from "react";
import Link from "next/link";

const OrderItemCard = ({ item, updateQuantity }) => {
  const handleIncrement = () => {
    updateQuantity(item.name, item.quantity + 1); // Increase the quantity
  };

  const handleDecrement = () => {
    if (item.quantity > 0) {
      updateQuantity(item.name, item.quantity - 1); // Decrease the quantity
    }
  };

  return (
    <div className="flex justify-between items-start my-2 border rounded-lg shadow-md p-4">
      {/* Product Name and Price */}
      <div className="flex flex-col mr-4 w-1/3">
        {/* Product Name */}
        <span className="text-base lg:text-lg font-semibold mb-1">
          {item.name}
        </span>
        {/* Product Price */}
        <span className="text-xs font-semibold lg:text-sm">
          {item.price},00
        </span>
      </div>
      {/* Quantity Controls and Change Button */}
      <div className="flex items-center w-2/3 justify-end">
        {" "}
        {/* Change here */}
        {/* Quantity Controls */}
        <div className="flex items-center">
          <button
            className="px-2 py-1 border bg-orange-300 text-black rounded mr-1"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="px-2 py-1 border bg-orange-300 text-black rounded ml-1"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        {/* Change Button */}
        <Link href="/menu">
          <button className="px-1 py-1 ml-2 border bg-red-500 text-white rounded text-xs">
            Change
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Orderitemcard;
