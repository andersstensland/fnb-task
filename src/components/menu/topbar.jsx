import React, { useState } from "react";
import getTime from "@/lib/getTime";
import LanguageSelector from "@/components/languageselector";

const TopBar = ({ onLanguageChange, currentLanguage }) => {
  const timeString = getTime(); // Gets time as a string "hours:minutes"
  const [hours, minutes] = timeString.split(":").map(Number); // Split by ':' and convert to numbers
  const isOpen = hours >= 10 && (hours < 22 || (hours === 22 && minutes === 0));

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
        <LanguageSelector
          onChange={onLanguageChange}
          currentLanguage={currentLanguage}
        />
      </div>
    </div>
  );
};

export default TopBar;
