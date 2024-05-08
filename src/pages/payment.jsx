import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Payment() {
  // Example state to manage inputs; expand as needed.
  const [deliveryTime, setDeliveryTime] = useState("ASAP 20-30 minutes");
  const [paymentMethod, setPaymentMethod] = useState("Visa XXXX");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-4">
        <h1 className="text-xl font-bold my-4">Order Summary</h1>

        <div className="w-full mb-4">
          <label className="block text-sm font-bold mb-2">Levering</label>
          <div className="flex justify-between items-center p-3 bg-gray-200">
            <span>{deliveryTime}</span>
            <button
              onClick={() => setDeliveryTime("Edit Mode")}
              className="text-blue-500"
            >
              Endre
            </button>
          </div>
        </div>

        <div className="w-full mb-4">
          <label className="block text-sm font-bold mb-2">Betaling</label>
          <div className="flex justify-between items-center p-3 bg-gray-200">
            <span>{paymentMethod}</span>
            <button
              onClick={() => setPaymentMethod("Edit Mode")}
              className="text-blue-500"
            >
              Endre
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

        <div className="w-full">
          <Button
            variant="solid"
            className="bg-orange-300 text-white font-bold w-full py-3"
          >
            Go to payment
          </Button>
        </div>
      </div>
    </>
  );
}
