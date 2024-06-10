import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

const DeliveryModal = ({ isOpen, onClose, handleOptionClick }) => {
  const handleSelectOption = (option) => {
    handleOptionClick(option); // Pass the option back to parent if needed
    onClose(); // Close the modal after selection
  };

  console.log("TEST TEST TEST");
  console.log(isOpen); // Is true but wont open ? Alert dialog is not showing up
  console.log("Modal open state:", isOpen);

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogContent className="rounded-t-3xl p-6 w-full max-w-md mx-auto">
        <AlertDialogHeader className="items-center flex flex-row justify-between">
          <AlertDialogTitle className="items-center text-lg font-bold">
            Choose pick-up point!
          </AlertDialogTitle>
          <AlertDialogCancel asChild>
            <button className="text-gray-400">
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="space-y-4 mt-4">
          {["A", "B", "C"].map((point) => (
            <div
              key={point}
              className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer"
              onClick={() => handleSelectOption(point)}
            >
              <Label className="text-base font-semibold flex-grow">
                Pick up point {point}
              </Label>
              <input type="radio" id={`option-${point}`} name="pickup-point" />
            </div>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeliveryModal;
