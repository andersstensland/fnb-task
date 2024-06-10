import React from "react";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OrderItemCard = ({ item }) => {
  const { addToCart, removeFromCart, getItemCount } = useCart();
  const count = getItemCount(item._id);

  const handleAddOrUpdate = () => {
    addToCart(item._id, item, 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      addToCart(item._id, item, -1);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(item._id);
  };

  return (
    <div className="relative border rounded-lg shadow-md my-2 p-4 pt-12 pb-12 flex items-start justify-between">
      {/* Card content layout adjusted for visual spacing */}
      <div>
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm block">{item.price},00</span>
      </div>
      <div className="flex items-center">
        <Button
          className="text-black bg-customOrange rounded mr-2"
          onClick={handleDecrement}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          className="text-black bg-customOrange rounded ml-2"
          onClick={handleAddOrUpdate}
        >
          +
        </Button>
      </div>
      {/* Remove button with SVG */}
      <button onClick={handleRemoveItem} className="absolute top-0 right-0 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Link href="/menu">
        <Button className="ml-2">Change</Button>
      </Link>
    </div>
  );
};

export default OrderItemCard;
