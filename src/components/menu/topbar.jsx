import React from "react";
import getTime from "@/lib/getTime";

const TopBar = () => {
  const timeString = getTime(); // Gets time as a string "hours:minutes"
  const [hours, minutes] = timeString.split(":").map(Number); // Split by ':' and convert to numbers

  // Determine if the current time is within the opening hours (10:00 to 21:59).
  const isOpen = hours >= 10 && (hours < 22 || (hours === 22 && minutes === 0));

  return (
    <div className="flex flex-col items-center p-4 bg-white justify-between">
      <div className="flex justify-between w-full mb-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="font-medium">Opening hours:</span>{" "}
          <strong className="ml-1" style={{ color: isOpen ? "green" : "red" }}>
            {isOpen ? "Open" : "Closed"}
          </strong>
        </div>
        <div>Closing at 22:00</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          <span>Language: English</span>
        </div>
        <div className="text-blue-500 underline cursor-pointer">Change</div>
      </div>
    </div>
  );
};

export default TopBar;
