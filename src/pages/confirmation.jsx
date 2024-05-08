import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-2">
        <h1 className="text-xl font-bold text-center mt-4 mb-6">
          Thank you for ordering with us.
        </h1>

        <div className="relative w-32 h-32 mb-4">
          <svg
            className="absolute inset-0 m-auto"
            width="128"
            height="128"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="gray"
              strokeWidth="2"
            ></circle>
            <path d="M12 6v6l4 2" stroke="black" strokeWidth="2"></path>
          </svg>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-lg font-bold">20-30 min</span>
          </div>
        </div>

        <p className="text-center mb-6">
          The order has been received and will be produced as soon as possible.
        </p>

        <div className="w-full mb-4">
          <div className="text-left w-full p-4">
            <div className="mb-2">
              1X Pizza Pepperoni <span className="float-right">179,00</span>
            </div>
            <div className="mb-2">
              1X Coca Cola <span className="float-right">39,00</span>
            </div>
            <div className="mb-2">
              Delivery cost <span className="float-right">50,00</span>
            </div>
            <div className="mt-4 font-bold">
              Total <span className="float-right">268,00</span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="bg-gray-300 text-black font-bold w-full py-3 mb-2"
        >
          <Link href="/orderhistory">Order history</Link>
        </Button>
        <Button
          variant="solid"
          className="bg-orange-300 text-white font-bold w-full py-3"
        >
          <Link href="/menu">See the menu</Link>
        </Button>
      </div>
    </>
  );
}
