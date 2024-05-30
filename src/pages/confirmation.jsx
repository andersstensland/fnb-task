import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
        <h1 className="text-2xl font-extrabold text-center mt-4">
          Thank you for ordering with us.
        </h1>

        <div className="relative w-full max-w-sm mb-11 mt-11 p-11 bg-white shadow-lg rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-700 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 4 4-7 7m5 5h5a2 2 0 002-2v-5a2 2 0 00-2-2h-1"
            />
          </svg>
          <div>
            <p className="text-lg font-bold mb-1">Estimated Delivery Time</p>
            <p className="text-2xl font-extrabold text-red-700">20-30 min</p>
          </div>
        </div>

        <p className="text-center mb-8 text-lg font-bold">
          The order has been received and will be produced as soon as possible.
        </p>

        <div className="w-full mb-8">
          <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <div className="mb-3 text-black">
              1X Pizza Pepperoni <span className="float-right">179,00</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="mb-3 text-black">
              1X Coca Cola <span className="float-right">39,00</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="mb-3 text-black">
              Delivery cost <span className="float-right">50,00</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="mt-4 font-bold text-black">
              Total <span className="float-right">268,00</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-3">
          <Button
            variant="outline"
            className="bg-gray-300 text-black font-bold w-full py-3"
          >
            <Link href="/orderhistory">Order history</Link>
          </Button>
          <Button
            variant="solid"
            className="bg-[#FDBA74] text-black font-bold w-full py-3"
          >
            <Link href="/menu">See the menu</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
