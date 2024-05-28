import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PaymentMethodModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="bg-orange-300 text-white font-bold w-full py-3">
          Pay now
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-t-3xl p-6 w-full max-w-md mx-auto">
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
          <button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <img
                src="https://toppng.com/uploads/preview/banner-cards-vector-credit-card-credit-card-icon-11563108027vvkoq7v820.png"
                alt="Google Pay"
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
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentMethodModal;
