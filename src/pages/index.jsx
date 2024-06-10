import Link from "next/link";
import Navbar from "../components/navbar";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-h-screen">
        <Navbar />
        <div className="flex-grow p-4">
          <h3 className="font-bold text-xl mt-4 mb-4">
            In Cabin Delivery Information
          </h3>
          <p className="mb-4 text-md">
            We hope you have a pleasant stay on board. To make your journey even
            more relaxing we have made a selection of food, beverages, and
            tax-free goods available for you to order from the comfort of your
            cabin.
          </p>
          <p className="mb-4 text-md">
            Room service & in cabin delivery opening hours: 10:00 - 22:00
            everyday. Payment on delivery. We only accept credit card payments
            for this service. A room service fee (50DKK) will be added to your
            order.
          </p>
          <div className="p-4 bg-gray-200 flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24 items-start"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <p className="font-bold text-md">
              Please note that orders that include alcohol will be refused on
              delivery if proof of age is not provided to the crew upon
              delivery.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow-md flex-1 p-4">
          <h4 className="font-bold text-lg mb-2">Fjord Club Members</h4>
          <p className="text-sm mb-4">
            Log in to access exclusive benefits and offers.
          </p>
          <Button
            as="span"
            variant="outline"
            className="bg-orange-300 text-sm px-4 py-2 w-full"
          >
            <a href="/api/auth/login">Login</a>
          </Button>
          <Link
            href="/menu"
            className="flex items-center text-gray-500 text-sm underline"
          >
            Continue as Guest
          </Link>
        </div>

        <div className="p-4 mt-auto bg-white shadow-t-md">
          <hr className="border-gray-200 my-4" />
          <div className="flex justify-end">
            <Link href="/menu" passHref>
              <Button variant="outline" className="bg-orange-300">
                See Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
