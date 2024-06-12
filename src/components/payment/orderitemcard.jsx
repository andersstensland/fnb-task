import React from "react";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const OrderItemCard = ({ item }) => {
  const { addToCart, removeFromCart, getQty } = useCart();
  const router = useRouter();
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

  const handleRedirectToProductDetails = () => {
    router.push({
      pathname: "/productdetails",
      query: { item: JSON.stringify(item) },
    });
  };

  return (
    <div className="relative border rounded-lg shadow-md my-2 p-4 pt-6 pb-6 flex flex-col items-start justify-between">
      <Button
        onClick={handleRemoveItem}
        className="absolute top-2 right-2 p-2 text-black"
        variant="ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>

      <div className="w-full flex items-center justify-between mb-2 mt-8">
        <div className="w-full">
          <span className="text-lg font-semibold">{item.name}</span>
          <span className="text-sm block">{item.price},00 NOK</span>
        </div>
        <Button
          className="text-black bg-customOrange rounded mr-2"
          onClick={handleDecrement}>
          -
        </Button>
        <span>{count}</span>
        <Button
          className="text-black bg-customOrange rounded ml-2"
          onClick={handleAddOrUpdate}>
          +
        </Button>
      </div>
      <div className="flex flex-col ">
        {item.selectedAddToppings && item.selectedAddToppings.length > 0 && (
          <div className="mb-2 text-sm text-gray-600">
            {item.selectedAddToppings.map((topping) => (
              <div key={topping.name}>
                + {topping.name} {topping.cost ?? 0} ,-
              </div>
            ))}
          </div>
        )}
        {item.selectedRemoveToppings &&
          item.selectedRemoveToppings.length > 0 && (
            <div className="mb-2 text-sm text-gray-600">
              {item.selectedRemoveToppings.map((topping) => (
                <div key={topping}> - {topping}</div>
              ))}
            </div>
          )}
      </div>

      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <Button
            className="h-9 mt-2 bg-customRed"
            onClick={handleRedirectToProductDetails}>
            Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
