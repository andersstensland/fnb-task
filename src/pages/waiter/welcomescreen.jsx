import React, { useState } from "react";
import "../../styles/globals.css";

function WelcomeScreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  const restaurants = [
    { id: 1, name: "Restaurant 1" },
    { id: 2, name: "Bar 1" },
    // Add more restaurants or bars as needed
  ];

  const handleSelectChange = (event) => {
    setSelectedRestaurant(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected:", selectedRestaurant);
    // Redirect to the selected restaurant's page
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Welcome</h1>
      <p>Velg restaurant/bar</p>
      <select
        value={selectedRestaurant}
        onChange={handleSelectChange}
        className="mb-4 p-2"
      >
        <option value="">Velg...</option>
        {restaurants.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.id}>
            {restaurant.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Gå til valgt
      </button>
      <button
        onClick={() => console.log("Going to admin")}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Go to admin
      </button>
    </div>
  );
}

export default WelcomeScreen;
