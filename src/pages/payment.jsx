import React, { useState } from "react";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Payment() {
  const [deliveryTime, setDeliveryTime] = useState("ASAP 20-30 minutes");
  const [paymentMethod, setPaymentMethod] = useState("Visa XXXX");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 w-full">
        <div className="w-full max-w-4xl mx-auto">
          {/* Container centered with mx-auto and width restrictions */}
          <h1 className="text-xl font-bold my-4 text-center">Order Summary</h1>
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">Delivery</label>
            <div className="flex justify-between items-center p-3 bg-gray-200">
              <span>{deliveryTime}</span>
              <button
                onClick={() => setDeliveryTime("Edit Mode")}
                className="text-blue-500"
              >
                Change
              </button>
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">Payment</label>
            <div className="flex justify-between items-center p-3 bg-gray-200">
              <span>{paymentMethod}</span>
              <button
                onClick={() => setPaymentMethod("Edit Mode")}
                className="text-blue-500"
              >
                Change
              </button>
            </div>
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">
              Leave a message (optional)
            </label>
            <textarea
              className="w-full h-24 p-2 bg-gray-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <div className="p-2">
              <div className="mb-2">
                1X Pizza Pepperoni <span className="float-right">179,00</span>
              </div>
              <div className="mb-2">
                1X Coca Cola <span className="float-right">39,00</span>
              </div>
              <div className="mb-2">
                Delivery cost <span className="float-right">50,00</span>
              </div>
              <div className="mt-4 font-bold">
                Total <span className="float-right">268,00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          <Button
            variant="solid"
            className="bg-orange-300 text-white font-bold w-full py-3"
          >
            <Link href="/confirmation">
              <div className="w-full h-full inline-block">Go to payment</div>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
