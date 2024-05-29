import React, { useState } from "react";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import OrderSummary from "@/components/payment/ordersummary";
import CartFooter from "@/components/CartFooter";
import DeliveryModal from "@/components/payment/deliverymodal";
import SecondNavbar from "@/components/secondnavbar";




export default function Payment(trigger) {
  const [deliveryTime, setDeliveryTime] = useState("ASAP 20-30 minutes");
  const [paymentMethod, setPaymentMethod] = useState("Visa XXXX");
  const [message, setMessage] = useState("");

  const handleCartFooter = () => {
    DeliveryModal
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 w-full">
        <div className="w-full max-w-4xl mx-auto">
          {/* Container centered with mx-auto and width restrictions */}
          <h1 className="text-xl font-bold my-4 text-center">Order Summary</h1>
          <div className="w-full mb-4"> 
          <label className="block text-sm font-bold mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Delivery
          </label>
            <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="border-orange-300 border-2" value="option-one" id="option-one" />
              <Label htmlFor="option-one">As soon as possible (25-35min)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="border-orange-300 border-2" value="option-two" id="option-two" />
              <Label htmlFor="option-two">Choose time to pre-order</Label>
            </div>
          </RadioGroup>
            </div>
            <div className="w-full mb-4">
              <label className="block text-sm font-bold mb-2">Choose where you want to eat!</label>
              <div className="flex justify-between m-1">
                <button className="w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent">
                  Delivery
                </button>
                <DeliveryModal
                trigger={
                  <button className="w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent">
                    Pick up
                  </button>
                }
              />
              </div>
            </div>
            <OrderSummary/>
          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">
              Leave a message (optional)
            </label>
            <textarea
              className="w-full h-24 p-2 bg-gray-200 rounded-lg "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="w-full mb-4">
          <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <div className="mb-2 text-black">
              1X Pizza Pepperoni <span className="float-right">179,00</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="mb-2 text-black">
              1X Coca Cola <span className="float-right">39,00</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="mb-2 text-black">
              Delivery cost <span className="float-right">50,00</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="mt-4 font-bold text-black">
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
      <Link href="/confirmation">
      <CartFooter onClick={handleCartFooter} />
      </Link>
      
    </>
  );
}
