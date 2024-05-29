import React from 'react'
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
import Link from 'next/link';

const DeliveryModal = ({ trigger }) => {
  return (
    <AlertDialog>
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
          <button className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              {/* First button content */}
              <h3>Pick up point A</h3>
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
              {/* Second button content */}
              <h3>Pick up point B</h3>
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
              {/* Third button content */}
              <h3>Pick up point C</h3>
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
}

export default DeliveryModal;
