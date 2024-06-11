import React, { useState } from "react";
import getTime from "@/lib/getTime";

const TopBar = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const timeString = getTime(); // Gets time as a string "hours:minutes"
  const [hours, minutes] = timeString.split(":").map(Number); // Split by ':' and convert to numbers

  // Determine if the current time is within the opening hours (10:00 to 21:59).
  const isOpen = hours >= 10 && (hours < 22 || (hours === 22 && minutes === 0));

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
    // You may want to trigger a re-fetch or state update based on the new language
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white justify-between">
      <div className="flex justify-between w-full mb-2">
        <div className="flex items-center">
          <span className="font-medium">Opening hours:</span>{" "}
          <strong className="ml-1" style={{ color: isOpen ? "green" : "red" }}>
            {isOpen ? "Open" : "Closed"}
          </strong>
        </div>
        <div>Closing at 22:00</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <span className="text-black">Language:</span>
        </div>
        <div className="text-blue-500 underline cursor-pointer">Change</div>
      </div>
    </div>
  );
};

export default TopBar;
