import React from "react";

const TopBar = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white justify-between">
      <div className="flex justify-between w-full mb-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 110 2h-4a1 1 0 01-1-1V5a1 1 0 011-1zM2 10a8 8 0 0116 0h-2a6 6 0 00-12 0H2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Opening hours:</span>{" "}
          <strong className="ml-1 text-green-500">Open</strong>
        </div>
        <div>Closing 22:00</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.166 10a8 8 0 1115.668 0A8 8 0 012.166 10zM9 7a1 1 0 102 0 1 1 0 00-2 0zm.25 4.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <span>Language: English</span>
        </div>
        <div className="text-blue-500 underline cursor-pointer">Change</div>
      </div>
    </div>
  );
};

export default TopBar;
