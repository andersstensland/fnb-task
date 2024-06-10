import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

const DeliveryModal = ({ trigger, handleOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="rounded-t-3xl p-6 w-full max-w-md mx-auto">
        <AlertDialogHeader className="items-center flex flex-row justify-between">
          <AlertDialogTitle className="items-center text-lg font-bold">
            <h2>Choose pick-up point!</h2>
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
          <div
            className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer`}
            onClick={() => handleOptionClick("A")}
          >
            <Label
              htmlFor="option-A"
              className="text-base font-semibold flex-grow-1"
            >
              Pick up point A
            </Label>
            <input type="radio" id="option-A" />
          </div>
          <div
            className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer`}
            onClick={() => handleOptionClick("B")}
          >
            <Label
              htmlFor="option-B"
              className="text-base font-semibold flex-grow-1"
            >
              Pick up point B
            </Label>
            <input type="radio" id="option-B" />
          </div>
          <div
            className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer`}
            onClick={() => handleOptionClick("C")}
          >
            <Label
              htmlFor="option-C"
              className="text-base font-semibold flex-grow-1"
            >
              Pick up point C
            </Label>
            <input type="radio" id="option-C" />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeliveryModal;
