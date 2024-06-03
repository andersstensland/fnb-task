import PaymentMethodModal from "@/components/modals/paymentmethodmodal";
import Navbar from "@/components/navbar";
import DeliveryModal from "@/components/payment/deliverymodal";
import OrderSummary from "@/components/payment/ordersummary";
import PaymentSummary from "@/components/payment/paymentsummary";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "@/styles/globals.css";
import { useState } from "react";

export default function Payment() {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [message, setMessage] = useState("");
  const [deliveryCost, setDeliveryCost] = useState("50,00");
  const [items, setItems] = useState([
    { name: "Pineapple ham pizza", price: 179, quantity: 1 },
    { name: "Tandoori wrap", price: 65, quantity: 1 },
  ]);

  // Function to update the quantity of an item
  const updateQuantity = (itemName, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === itemName) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Calculate total price based on items' quantities and prices
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOptionClick = (option) => {
    setDeliveryOption(option);
    setDeliveryCost(option === "delivery" ? "50,00" : "0,00");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 w-full">
        <PaymentMethodModal />
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-bold my-4 text-center">Order Summary</h1>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 inline-block mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Delivery
            </label>
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
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-bold mb-2">Payment</label>
            <div className="w-full mb-4">
              <label className="block text-sm font-bold mb-2">
                Choose where you want to eat!
              </label>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4">
                <button
                  className="w-full md:w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent"
                  onClick={() => handleOptionClick("delivery")}
                >
                  Delivery
                </button>
                <DeliveryModal
                  trigger={
                    <button className="w-full mt-3 md:w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent">
                      Pick up
                    </button>
                  }
                  handleOptionClick={handleOptionClick} // Pass the callback function
                />
              </div>
            </div>

            {<OrderSummary items={items} updateQuantity={updateQuantity} />}

            <div className="w-full mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Leave a message (optional)
              </label>
              <textarea
                id="message"
                className="w-full h-24 p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
              />
            </div>

            {/* Pass deliveryOption, deliveryCost, and items to Paymentsummary */}
            {
              <PaymentSummary
                deliveryOption={deliveryOption}
                deliveryCost={deliveryCost}
                items={items}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}
