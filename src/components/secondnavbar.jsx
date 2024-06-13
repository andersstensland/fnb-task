import SecondNavbarModal from "@/components/modals/secondnavbarmodal";

export default function SecondNavbar() {
  const handleTimeSelect = (time) => {
    console.log("Selected time:", time); // Handle the selected time here
  };

  return (
    <nav className="w-full bg-gray-200 p-2">
      <ul className="flex justify-between items-center">
        <li className="w-full h-full flex flex-row gap-2">
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
        <li className="w-2/5 flex justify-end">
          <SecondNavbarModal onTimeSelect={handleTimeSelect} />
        </li>
      </ul>
    </nav>
  );
}
