import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrderItemCard = ({ item }) => {
  const { cart, addToCart, getItemCount } = useCart();

  const count = getItemCount(item._id);

  console.log("count", count);

  useEffect(() => {
    console.log("Cart data on load:", cart);
  }, [item._id, getItemCount]);

  const handleAddOrUpdate = () => {
    addToCart(item._id, item, 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      addToCart(item._id, item, -1);
    }
  };

  return (
    <div className="flex justify-between items-start my-2 border rounded-lg shadow-md p-4">
      <div className="flex flex-col mr-4 w-1/3">
        <span className="text-base lg:text-lg font-semibold mb-1">
          {item.name}
        </span>
        <span className="text-xs font-semibold lg:text-sm">
          {item.price},00
        </span>
      </div>
      <div className="flex items-center w-2/3 justify-end">
        <Button
          className="px-2 py-1 border bg-orange-300 text-black rounded mr-1"
          onClick={handleDecrement}
        >
          -
        </Button>
        <span className="mx-2">{count}</span>
        <Button
          className="px-2 py-1 border bg-orange-300 text-black rounded ml-1"
          onClick={handleAddOrUpdate}
        >
          +
        </Button>
        <Link href="/menu">
          <Button className="px-1 py-1 ml-2 border bg-red-500 text-white rounded text-xs">
            Change
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderItemCard;
