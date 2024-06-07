import React, { useState } from "react";
import Link from "next/link";
import OrderItemCard from "./orderitemcard";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const OrderSummary = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // This ensures code only runs client-side
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  }, []);

  const updateQuantity = (itemName, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.name === itemName ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div className="mt-7">
      <h2 className="block text-lm font-bold mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 inline-block mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        Your order
      </h2>
      <div className="flex justify-between">
        <p className="mr-auto font-bold">Products</p>
        <p className="ml-auto font-bold">Price (Nok)</p>
      </div>
      <hr className="mt-1.5 mb-6 h-0.5 border-t-0 bg-neutral-300 dark:bg-/10" />
      {items.length > 0 ? (
        Object.values(cart).map((item, index) => (
          <OrderItemCard
            key={index}
            item={item.details}
            quantity={item.qty}
            updateQuantity={(newQty) =>
              updateQuantity(item.details._id, newQty)
            }
          />
        ))
      ) : (
        <p>No items in your cart.</p>
      )}
      <div className="flex justify-between items-center font-bold text-xl mt-4 mb-3 p-4 border-t border-b border-gray-300">
        <span>Total</span>
        <span>{},-</span>
      </div>
      <Button
        variant="solid"
        className="bg-orange-300 text-white font-bold w-full py-3 mb-3"
      >
        <Link className="text-black" href="/menu">
          See the menu
        </Link>
      </Button>
    </div>
  );
};

export default OrderSummary;
