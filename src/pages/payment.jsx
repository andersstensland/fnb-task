import React, { useState } from "react";
import { useRouter } from "next/router";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DeliveryTimeModal from "@/components/modals/deliverytimemodal";
import Navbar from "@/components/navbar";
import PaymentMethodModal from "@/components/modals/paymentmethodmodal";
import OrderSummary from "@/components/payment/ordersummary";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PickupModal } from "@/components/modals/pickupmodal";
import { useEffect } from "react";
import { useCart } from "@/context/cartcontext";
import SecondNavbarModal from "@/components/modals/secondnavbarmodal";

export default function Payment() {
  const {
    setDeliveryCost,
    deliveryTime,
    pickupOption,
    updateDeliveryTime,
    setPickupOption,
  } = useCart();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");

  const displayDeliveryTime = () => {
    if (selectedDeliveryOption === "asap") {
      return "25-35min";
    }
    return deliveryTime;
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-2 md:px-4 w-full">
        <PaymentMethodModal />
        <div className="w-full max-w-xl mx-auto p-4">
          {/* More compact size and padding */}
          <div className="relative w-full">
            <div className="flex justify-center items-center relative">
              <Button
                onClick={handleBack}
                className="absolute left-0 p-0 w-10 h-10 flex items-center justify-center"
                variant="ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>
              <h1 className="text-xl font-bold my-4 mx-auto">Order Summary</h1>
            </div>
          </div>
          <div className="w-full mb-4">
            <SecondNavbarModal />
          </div>
          <div className="w-full mb-4">
            <div className="w-full mb-4">
              <Label className="block text-md font-bold mb-2">
                Choose delivery option
              </Label>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 gap-2">
                <Button
                  className="bg-white text-black w-full md:w-auto md:flex-1 px-4 py-2 text-md font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent"
                  onClick={() => setPickupOption("Delivery")}
                >
                  Delivery
                </Button>
                <PickupModal />
              </div>
            </div>

            <OrderSummary />

            <div className="my-4 p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <h2 className="text-lg font-semibold">Delivery Details</h2>
              </div>
              <div className="mb-2">
                <p className="text-md">
                  <span className="font-bold">Delivery Time:</span>{" "}
                  {displayDeliveryTime()}
                </p>
              </div>
              <div>
                <p className="text-md ">
                  <span className="font-bold">Delivery Option:</span>{" "}
                  {pickupOption || "Not set"}
                </p>
              </div>
            </div>
            <div className="w-full mb-4">
              <Label className="block text-sm font-bold mb-2" htmlFor="message">
                Leave a message (optional)
              </Label>
              <Textarea
                id="message"
                className="w-full h-24 p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
              />
            </div>
            <div className="w-full mb-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
