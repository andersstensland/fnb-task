import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CreditCardForm from "./creditcardform";

const PaymentMethodModal = () => {
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="fixed bottom-2 left-2 right-2 bg-teal-500 p-4 flex justify-between items-center text-white shadow-md rounded-md w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span></span>
        <button className="font-bold text-center flex-1">Pay now</button>
        <span>kr</span>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-t-3xl p-6 w-full max-w-md mx-auto">
        {showCreditCardForm ? (
          <CreditCardForm onBack={() => setShowCreditCardForm(false)} />
        ) : (
          <>
            <AlertDialogHeader className="items-center flex flex-row justify-between">
              <AlertDialogTitle className="items-center text-lg font-bold">
                Payment methods
              </AlertDialogTitle>
              <AlertDialogCancel className="text-gray-400">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </AlertDialogCancel>
            </AlertDialogHeader>
            <div className="space-y-4 mt-4">
              <button
                onClick={() => setShowCreditCardForm(true)}
                className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://toppng.com/uploads/preview/banner-cards-vector-credit-card-credit-card-icon-11563108027vvkoq7v820.png"
                    alt="Credit Card"
                    className="h-6 w-6 mr-2"
                  />
                  Credit card
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Other payment methods buttons */}
              <button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://toppng.com/uploads/preview/google-logo-transparent-png-11659866441wanynck5pd.png"
                    alt="Google Pay"
                    className="h-6 w-6 mr-2"
                  />
                  Google Pay
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://toppng.com/uploads/preview/apple-pay-logo-png-11536003336zy6omnlwgf.png"
                    alt="Apple Pay"
                    className="h-6 w-6 mr-2"
                  />
                  Apple Pay
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://vipps.no/media/images/vipps_logo_rgb.width-400.jpegquality-60.png"
                    alt="VIPPS"
                    className="h-6 w-6 mr-2"
                  />
                  VIPPS
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentMethodModal;
