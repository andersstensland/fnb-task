import React, { useEffect } from "react";
import Link from "next/link";
import OrderItemCard from "./orderitemcard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";

const OrderSummary = () => {
  const { cart, updateQuantity, getTotalCost } = useCart();

  useEffect(() => {
    console.log("Cart data on load:", cart);
  }, [cart]);

  console.log(Object.values(cart).length); // Load correct number

  return (
    <div className="mt-7">
      <h2 className="text-lg font-bold mb-2">Your order</h2>
      <div className="flex justify-between">
        <p className="mr-auto font-bold">Products</p>
        <p className="ml-auto font-bold">Price (NOK)</p>
      </div>
      <hr className="mt-1.5 mb-6 h-0.5 border-t-0 bg-neutral-300 dark:bg-/10" />
      {Object.values(cart).length > 0 ? (
        Object.values(cart).map((item) =>
          item && item._id ? (
            <OrderItemCard
              key={item._id}
              item={item}
              quantity={item.qty}
              updateQuantity={(newQty) => updateQuantity(item._id, newQty)}
            />
          ) : null
        )
      ) : (
        <p>No items in your cart.</p>
      )}

      <div className="flex justify-between items-center font-bold text-xl mt-4 mb-3 p-4 border-t border-b border-gray-300">
        <span>Total</span>
        <span>{getTotalCost()},-</span>
      </div>
      <Link href="/menu">
        <Button
          variant="solid"
          className="w-full py-3 mb-3 bg-orange-300 hover:bg-orange-400 text-white"
        >
          See the menu
        </Button>
      </Link>
    </div>
  );
};

export default OrderSummary;
