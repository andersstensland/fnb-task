import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const DeliveryModal = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    console.log(`Option ${option} clicked`);
    setSelectedOption(selectedOption === option ? null : option); // Toggle selection
  };

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger>
        {trigger}
      </AlertDialogTrigger>
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
          <RadioGroup value={selectedOption} onChange={setSelectedOption}>
            <div className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer ${selectedOption === 'A' ? 'bg-gray-100' : ''}`} onClick={() => handleOptionClick('A')}>
              <label htmlFor="option-A" className="text-base font-semibold flex-grow-1">
                Pick up point A
              </label>
              <RadioGroupItem value="A" id="option-A" className="h-6 w-6 mt-1" />
            </div>
            <div className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer ${selectedOption === 'B' ? 'bg-gray-100' : ''}`} onClick={() => handleOptionClick('B')}>
              <label htmlFor="option-B" className="text-base font-semibold flex-grow-1">
                Pick up point B
              </label>
              <RadioGroupItem value="B" id="option-B" className="h-6 w-6 mt-1" />
            </div>
            <div className={`flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer ${selectedOption === 'C' ? 'bg-gray-100' : ''}`} onClick={() => handleOptionClick('C')}>
              <label htmlFor="option-C" className="text-base font-semibold flex-grow-1">
                Pick up point C
              </label>
              <RadioGroupItem value="C" id="option-C" className="h-6 w-6 mt-1" />
            </div>
          </RadioGroup>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeliveryModal;
