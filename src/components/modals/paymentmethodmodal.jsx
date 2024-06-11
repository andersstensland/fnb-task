import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";
import Image from "next/image";
import { useState } from "react";
import CreditCardForm from "./creditcardform";

const PaymentMethodModal = () => {
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  const { getItemCount, getTotalCost, cart } = useCart();
  const itemCount = getItemCount(cart);
  const totalCost = getTotalCost(cart);

  if (itemCount === 0) return null;

  return (
    <AlertDialog>
      <AlertDialogTrigger className="fixed bottom-2 left-2 right-2 bg-teal-500 p-4 flex justify-between items-center text-black shadow-md rounded-md z-50">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span>{itemCount} </span>
        <span className="font-bold text-center flex-1">Pay Now</span>
        <span>{totalCost} kr</span>
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
                  stroke="currentColor"
                >
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
                className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg text-black"
              >
                <div className="flex items-center">
                  <Image
                    src="https://toppng.com/uploads/preview/banner-cards-vector-credit-card-credit-card-icon-11563108027vvkoq7v820.png"
                    alt="Credit Card"
                    className="h-6 w-6 mr-2"
                    width={24}
                    height={24}
                  />
                  Credit card
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Other payment methods buttons */}
              <Button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg text-black">
                <div className="flex items-center">
                  <Image
                    src="https://toppng.com/uploads/preview/google-logo-transparent-png-11659866441wanynck5pd.png"
                    alt="Google Pay"
                    className="h-6 w-6 mr-2"
                    width={24}
                    height={24}
                  />
                  Google Pay
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg text-black">
                <div className="flex items-center">
                  <Image
                    src="https://toppng.com/uploads/preview/apple-pay-logo-png-11536003336zy6omnlwgf.png"
                    alt="Apple Pay"
                    className="h-6 w-6 mr-2"
                    width={24}
                    height={24}
                  />
                  Apple Pay
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg text-black">
                <div className="flex items-center">
                  <Image
                    src="https://vipps.no/media/images/vipps_logo_rgb.width-400.jpegquality-60.png"
                    alt="VIPPS"
                    className="h-6 w-6 mr-2"
                    width={24}
                    height={24}
                  />
                  VIPPS
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentMethodModal;
