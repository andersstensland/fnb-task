import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import Link from "next/link";
import { useCart } from "@/context/cartcontext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Confirmation() {
  const { cart, getTotalCost, getItemCount } = useCart();

  const [orderSummary, setOrderSummary] = useState([]);

  useEffect(() => {
    // Convert cart object to array
    const orderArray = Object.keys(cart).map((key) => cart[key]);
    setOrderSummary(orderArray);
  }, [cart]);

  const calculateTotalAmount = () => {
    return getTotalCost();
  };

  const calculateTotalItems = () => {
    return getItemCount(cart);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <div className="w-full max-w-md mb-12">
          <h1 className="text-2xl font-extrabold text-center mt-8 mb-6">
            Thank you for ordering with us.
          </h1>

          <div className="relative w-full mb-12 p-8 bg-white shadow-lg rounded-lg flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-700 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 4 4-7 7m5 5h5a2 2 0 002-2v-5a2 2 0 00-2-2h-1"
              />
            </svg>
            <div>
              <p className="text-lg font-bold mb-1">Estimated Delivery Time</p>
              <p className="text-2xl font-extrabold text-red-700">20-30 min</p>
            </div>
          </div>

          <p className="text-center mb-6 text-lg font-bold">
            The order has been received and will be produced as soon as
            possible.
          </p>
        </div>

        <div className="w-full max-w-md mb-12">
          <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <Accordion
              type="single"
              collapsible>
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

        <div className="w-full max-w-md mb-8">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="bg-gray-300 text-black font-bold w-full py-3">
              <Link href="/orderhistory">Order history</Link>
            </Button>
            <Button
              variant="solid"
              className="bg-[#FDBA74] text-black font-bold w-full py-3">
              <Link href="/menu">See the menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
