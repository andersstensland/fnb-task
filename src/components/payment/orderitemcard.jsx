import React from "react";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OrderItemCard = ({ item }) => {
  const { addToCart, removeFromCart, getQty } = useCart();
  const count = getQty(item._id);

  const handleAddOrUpdate = () => {
    addToCart(item._id, item, 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      addToCart(item._id, item, -1);
    }
    if (count === 0) {
      removeFromCart(item._id);
    }
  };

  const handleRemoveItem = () => {
    removeFromCart(item._id);
  };

  return (
    <div className="relative border rounded-lg shadow-md my-2 p-4 pt-12 pb-12 flex flex-col items-start justify-between">
      <div className="mb-2">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm block">{item.totalCost},00 NOK</span>
      </div>
      {item.selectedAddToppings && item.selectedAddToppings.length > 0 && (
        <div className="mb-2 text-sm text-gray-600">
          {item.selectedAddToppings.map((topping) => (
            <div key={topping}>
              + {topping} ({item.toppings.find(t => t.name === topping).cost} NOK)
            </div>
          ))}
        </div>
      )}
      {item.selectedRemoveToppings && item.selectedRemoveToppings.length > 0 && (
        <div className="mb-2 text-sm text-gray-600">
          {item.selectedRemoveToppings.map((topping) => (
            <div key={topping}>
              - {topping}
            </div>
          ))}
        </div>
      )}
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
      <Button
        onClick={handleRemoveItem}
        className="absolute top-0 right-0 p-2 text-black"
        variant="ghost"
      >
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
      </Button>
      <Link href="/menu">
        <Button className="ml-2">Change</Button>
      </Link>
    </div>
  );
};

export default OrderItemCard;
