/* import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CreditCardInformation from "./CreditCardInformation";

const PaymentMethodModal = () => {
  const [showCreditCardInfo, setShowCreditCardInfo] = useState(false);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <button className="bg-orange-300 text-white font-bold w-full py-3">
            Pay now
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="rounded-lg p-6 w-full max-w-md mx-auto relative">
          <AlertDialogHeader className="flex justify-between items-center mb-4">
            <AlertDialogTitle className="text-lg font-bold">
              Payment methods
            </AlertDialogTitle>
            <AlertDialogCancel className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
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
          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full p-3"
              onClick={() => setShowCreditCardInfo(true)}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5-6h6m-6 0h-6m0 0h6"
                  />
                </svg>
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
            <button className="flex items-center justify-between w-full p-3">
              <div className="flex items-center">
                <img
                  src="/google-pay.svg"
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
            <button className="flex items-center justify-between w-full p-3">
              <div className="flex items-center">
                <img
                  src="/apple-pay.svg"
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
            <button className="flex items-center justify-between w-full p-3">
              <div className="flex items-center">
                <img
                  src="/vipps.svg"
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
        </AlertDialogContent>
      </AlertDialog>
      {showCreditCardInfo && (
        <CreditCardInformation
          isVisible={showCreditCardInfo}
          onClose={() => setShowCreditCardInfo(false)}
        />
      )}
    </>
  );
};

export default PaymentMethodModal;
