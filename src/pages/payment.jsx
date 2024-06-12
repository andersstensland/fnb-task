import DeliveryTimeModal from "@/components/modals/deliverytimemodal";
import Navbar from "@/components/navbar";
import OrderSummary from "@/components/payment/ordersummary";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/router";
import { useState } from "react";
import PaymentMethodModal from "@/components/modals/paymentmethodmodal";
import { PickupModal } from "@/components/modals/pickupmodal";
import { useEffect } from "react";

export default function Payment() {
  const {
    cart,
    updateQuantity,
    getTotalPrice,
    setDeliveryCost,
    deliveryTime,
    pickupOption,
    updateDeliveryTime,
  } = useCart();
  const router = useRouter();
  const [message, setMessage] = useState(""); // Add this line

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("asap");

  useEffect(() => {
    // Set initial radio button state based on deliveryTime
    setSelectedDeliveryOption(
      deliveryTime === "25-35min" ? "asap" : "pre-order"
    );
  }, [deliveryTime]);

  const handleOptionClick = (option) => {
    const cost = option === "delivery" ? 50 : 0;
    setDeliveryCost(cost);
  };

  const displayDeliveryTime = () => {
    if (selectedDeliveryOption === "asap") {
      return "25-35min";
    }
    return deliveryTime;
  };

  const handleDeliveryOption = (value) => {
    if (value === "asap") {
      updateDeliveryTime("25-35min");
      setSelectedDeliveryOption("asap");
    } else {
      updateDeliveryTime("Choose a time"); // Set a default or placeholder time until user selects a time
      setSelectedDeliveryOption("pre-order");
    }
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
            <Label className="block text-sm font-bold mb-2">Delivery</Label>
            <RadioGroup
              defaultValue="option-one"
              value={selectedDeliveryOption}
              onChange={(e) => handleDeliveryOption(e.target.value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">
                  As soon as possible (25-35min)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <DeliveryTimeModal
                  trigger={
                    <Label htmlFor="option-two">Choose time to pre-order</Label>
                  }
                />
              </div>
            </RadioGroup>
          </div>
          <div className="w-full mb-4">
            <Label className="block text-sm font-bold mb-2">Payment</Label>
            <div className="w-full mb-4">
              <Label className="block text-sm font-bold mb-2">
                Choose where you want to eat!
              </Label>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 gap-2">
                <Button
                  className="bg-white text-black w-full md:w-auto md:flex-1 px-4 py-2 text-lg font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent"
                  onClick={() => handleOptionClick("delivery")}
                >
                  Delivery
                </Button>
                <PickupModal />
              </div>
            </div>

            <OrderSummary />

            <div className="my-4">
              <h2 className="text-lg font-semibold">Delivery Details</h2>
              <p>Delivery Time: {displayDeliveryTime()}</p>
              <p>Pickup Option: {pickupOption || "Not set"}</p>
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
