import React, { useState } from "react";
import { useRouter } from "next/router";
import { AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useCart } from "@/context/cartcontext";

const CreditCardForm = ({ onBack }) => {
  const { cart, updateQuantity, getTotalCost, setDeliveryCost } = useCart();
  const router = useRouter();

  // Check if getTotalCost is defined
  console.log("getTotalCost:", getTotalCost);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 16) value = value.slice(0, 16); // Limit length to 16 digits

    // Format the input value in groups of 4 digits
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 4) value = value.slice(0, 4); // Limit length to 4 digits

    // Format the input value as MM/YY
    const formattedValue = value.replace(/(\d{2})(\d{2})/, "$1/$2");
    setExpiryDate(formattedValue);
  };

  const handleCvcChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 3) value = value.slice(0, 3); // Limit length to 3 digits
    setCvc(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add form validation and payment processing logic
    // After successful payment processing, navigate to the confirmation page
    router.push("/confirmation");
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <AlertDialogTitle className="text-xl font-bold">
          Credit Card
        </AlertDialogTitle>
        <div></div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <img
          src="https://toppng.com/uploads/preview/visa-logo-png-image-11661940030l07ll8dlqd.png"
          alt="Visa"
          className="h-6 w-6 mr-2"
        />
        <img
          src="https://toppng.com/uploads/preview/mastercard-logo-png-image-11660384834uzfz7vjtmw.png"
          alt="Master card"
          className="h-6 w-6 mr-2"
        />
        <img
          src="https://toppng.com/uploads/preview/american-express-logo-11530963367en4fyozpgf.png"
          alt="American express"
          className="h-6 w-6 mr-2"
        />
        <img
          src="https://banner2.cleanpng.com/20180808/wbo/kisspng-unionpay-payment-credit-card-bank-american-express-deposits-mex-exchange-5b6ab4e197ab70.5908228815337197776213.jpg"
          alt="Union pay"
          className="h-6 w-6 mr-2"
        />
        <img
          src="https://banner2.cleanpng.com/20180816/tk/kisspng-computer-icons-jcb-co-ltd-clip-art-credit-card-logo-logotype-icons-8-85-free-vector-icons-pa-5b760deeb7b8b3.1878343715344634707525.jpg"
          alt="jcb"
          className="h-6 w-6 mr-2"
        />
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-xl font-bold text-gray-700">
                Card number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-xl p-4"
                placeholder="1234 5678 0123 4567"
                maxLength="19" // Max length is 19 to account for spaces
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-xl font-bold text-gray-700">
                  Expiry date
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-xl p-4"
                  placeholder="MM/YY"
                  maxLength="5" // Max length is 5 to account for the slash
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  value={cvc}
                  onChange={handleCvcChange}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-xl p-4"
                  placeholder="CVC"
                  maxLength="3"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black p-4 rounded-md text-lg">
              Pay {getTotalCost()} KR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
