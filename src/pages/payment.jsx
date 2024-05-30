import React, { useState } from "react";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PaymentMethodModal from "@/components/modals/paymentmethodmodal";

export default function Payment() {
  const [deliveryTime, setDeliveryTime] = useState("ASAP 20-30 minutes");
  const [paymentMethod, setPaymentMethod] = useState("Visa XXXX");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 w-full">
        <PaymentMethodModal />
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-bold my-4 text-center">Order Summary</h1>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">Delivery</label>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">
                  As soon as possible (25-35min)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Choose time to pre-order</Label>
              </div>
            </RadioGroup>
            <button
              onClick={() => setDeliveryTime("Edit Mode")}
              className="text-blue-500"
            >
              Change
            </button>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">Payment</label>
            <span>{paymentMethod}</span>
            <button
              onClick={() => setPaymentMethod("Edit Mode")}
              className="text-blue-500"
            >
              Change
            </button>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">
              Choose where you want to eat!
            </label>
            <div className="flex justify-between m-1">
              <button className="w-40 px-8 py-4 text-xl border-2 border-gray-400 rounded-lg">
                Delivery
              </button>
              <button className="w-40 px-8 py-4 text-xl border-2 border-gray-400 rounded-lg">
                Pick up
              </button>
            </div>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">
              Leave a message (optional)
            </label>
            <textarea
              className="w-full h-24 p-2 bg-gray-200 rounded-lg"
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

          <Link href="/confirmation">
            <span className="block w-full">
              <Button
                variant="solid"
                className="bg-orange-300 text-white font-bold w-full py-3"
              >
                Go to payment
              </Button>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
