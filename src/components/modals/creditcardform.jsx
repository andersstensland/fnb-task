import React from "react";
import { useRouter } from "next/router";
import { AlertDialogTitle } from "@/components/ui/alert-dialog";

const CreditCardForm = ({ onBack }) => {
  const router = useRouter();

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
        <AlertDialogTitle className="text-lg font-bold">
          Credit Card
        </AlertDialogTitle>
        <div></div>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="1234 5678 0123 4567"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry date
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded-md">
              Pay 175,00 KR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
