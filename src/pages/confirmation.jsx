import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Confirmation() {
  const {
    cart,
    getTotalCost,
    getItemCount,
    clearCart,
    deliveryTime,
    pickupOption,
  } = useCart();
  const router = useRouter(); // Initialize the useRouter hook

  const [orderSummary, setOrderSummary] = useState([]);
  const [message, setMessage] = useState(""); // State to store the message

  useEffect(() => {
    // Convert cart object to array
    const orderArray = Object.keys(cart).map((key) => cart[key]);
    setOrderSummary(orderArray);

    // Retrieve the message from the router query object
    const { message } = router.query;
    setMessage(message || ""); // Set the message state
  }, [cart, router.query]); // Add router.query to the dependency array

  useEffect(() => {
    console.log("Order Summary:", orderSummary);
  }, [orderSummary]);

  const calculateTotalAmount = () => {
    return getTotalCost();
  };

  const calculateTotalItems = () => {
    return getItemCount(cart);
  };

  const handleSeeMenuClick = () => {
    clearCart();
    router.push("/menu");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <div className="w-full max-w-md mb-12">
          <h1 className="text-xl font-extrabold text-center mt-8 mb-6">
            Thank you for ordering with us.
          </h1>

          <div className="relative w-full mb-2 p-8 bg-white shadow-lg rounded-lg flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-700 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 4 4-7 7m5 5h5a2 2 0 002-2v-5a2 2 0 00-2-2h-1"
              />
            </svg>
            <div>
              <p className="text-lg font-bold mb-1">Estimated Time</p>
              <p className="text-2xl font-extrabold text-red-700">
                {deliveryTime}
              </p>
            </div>
          </div>

          <div className="relative w-full mb-12 p-8 bg-white shadow-lg rounded-lg flex items-center mx-auto">
            <div>
              <p className="text-lg font-bold mb-1">Delivery Option</p>
              <p className="text-2xl font-extrabold text-red-700">
                {pickupOption}
              </p>
            </div>
          </div>

          <p className="text-center mb-6 text-lg font-bold">
            The order has been received and will be produced as soon as
            possible.
          </p>
        </div>

        <div className="w-full max-w-md mb-12">
          <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {calculateTotalItems()} items - Total:{" "}
                  {calculateTotalAmount()},00
                </AccordionTrigger>
                <AccordionContent>
                  {Array.isArray(orderSummary) && orderSummary.length > 0 ? (
                    orderSummary.map((item, index) => (
                      <div key={index}>
                        <div className="mb-3 text-black">
                          {item.qty}x {item.name}{" "}
                          <span className="float-right">
                            {item.price * item.qty},00
                          </span>
                        </div>
                        {/* Display selected toppings */}
                        <div className="ml-6">
                          {item.selectedAddToppings &&
                            item.selectedAddToppings.length > 0 && (
                              <div>
                                <ul>
                                  {item.selectedAddToppings.map(
                                    (topping, index) => (
                                      <li key={index}>
                                        + {topping.name} {topping.cost},-
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          <hr className="border-t border-gray-300 my-4" />
                          {/* Display removed toppings */}
                          {item.selectedRemoveToppings &&
                            item.selectedRemoveToppings.length > 0 && (
                              <div>
                                <ul>
                                  {item.selectedRemoveToppings.map(
                                    (topping, index) => (
                                      <li key={index}>- {topping}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                        </div>
                        <hr className="border-t border-gray-300 my-4" />
                      </div>
                    ))
                  ) : (
                    <div>No items in the cart.</div>
                  )}
                  <div className="mt-4 font-bold text-black">
                    Total{" "}
                    <span className="float-right">
                      {calculateTotalAmount()},00
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <p className="text-center mb-6 text-lg font-bold">{message}</p>

        <div className="w-full max-w-md mb-8">
          <div className="space-y-4">
            <Button
              variant="solid"
              className="bg-orange-300 text-black font-bold w-full py-6 text-lg shadow-lg transform transition-transform duration-300 "
              onClick={handleSeeMenuClick}
            >
              Back to menu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
