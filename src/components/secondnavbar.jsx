import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState } from "react";

export default function SecondNavbar() {
  const [selectedValue, setSelectedValue] = useState("asap");

  // selected stime
  const [selectedTime, setSelectedTime] = useState("09:00");

  const handleValueChange = (value) => {
    console.log(value); // Log the value directly
    setSelectedValue(value);
  };

  return (
    <nav className="w-full bg-gray-200 p-2">
      <ul className="flex justify-between items-center">
        <li className="w-full h-full font-bold flex flex-row gap-2">
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
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Delivery 25 - 35 min
        </li>
        <li className="text-white w-1/3">
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="bg-orange-300 p-2 rounded-md text-black font-bold">
                Change
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delivery</AlertDialogTitle>
                <div>
                  <RadioGroup
                    onValueChange={handleValueChange}
                    value={selectedValue}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="asap"
                        id="asap"
                        checked={selectedValue === "asap"}
                      />
                      <Label htmlFor="asap">As soon as possible</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="pre-order"
                        id="pre-order"
                        checked={selectedValue === "pre-order"}
                      />
                      <Label htmlFor="pre-order">
                        Choose time for pre-order
                      </Label>
                    </div>
                  </RadioGroup>
                  {selectedValue === "pre-order" && (
                    <form className="max-w-[8.5rem] mx-auto mt-4">
                      <label
                        htmlFor="time"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select time:
                      </label>
                      <div className="flex">
                        <input
                          type="time"
                          id="time"
                          className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          min="09:00"
                          max="18:00"
                          value={selectedTime}
                          onChange={handleValueChange}
                          required
                        />
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link href="order">Continue</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
    </nav>
  );
}
