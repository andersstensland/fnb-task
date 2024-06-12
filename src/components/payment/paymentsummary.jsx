import React from "react";
import { useCart } from "@/context/cartcontext";

const PaymentSummary = ({ deliveryOption, deliveryCost }) => {
  const { cart, getTotalCost } = useCart();

  const calculateItemTotal = (item) => {
    return item.totalCost * item.qty;
  };

  return (
    <div className="w-full mb-14">
      <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {Object.values(cart).map((item, index) => (
          <div key={item.id || index}>
            <div className="mb-2 text-black">
              {item.qty}x {item.name}
              <span className="float-right">
                ${calculateItemTotal(item)}.00
              </span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
          </div>
        ))}
        <div className="mb-2 text-black">
          {deliveryOption === "delivery" ? "Delivery" : "Pick Up"}
          <span className="float-right">${deliveryCost}</span>
        </div>
        <hr className="border-t border-gray-300 my-2" />
        <div className="mt-4 font-bold text-black">
          Total <span className="float-right">${getTotalCost()},00</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
