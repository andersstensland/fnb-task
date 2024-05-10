import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/globals.css";

function AdminView() {
  const history = useHistory();
  const [selectedEstablishment, setSelectedEstablishment] = useState("");

  const establishments = [
    { id: 1, name: "Fjord Lounge" },
    { id: 2, name: "Seaside Bar" },
    // add other establishments as needed
  ];

  const handleEstablishmentChange = (event) => {
    setSelectedEstablishment(event.target.value);
  };

  const navigateToOrderView = () => {
    history.push(`/order-view/${selectedEstablishment}`);
  };

  const navigateToKitchenView = () => {
    history.push(`/kitchen-view/${selectedEstablishment}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Welcome to admin view</h1>
      <select
        value={selectedEstablishment}
        onChange={handleEstablishmentChange}
        className="mb-4 p-2"
      >
        <option value="">Velg restaurant/bar</option>
        {establishments.map((establishment) => (
          <option key={establishment.id} value={establishment.id}>
            {establishment.name}
          </option>
        ))}
      </select>
      <button
        onClick={navigateToOrderView}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Order View
      </button>
      <button
        onClick={navigateToKitchenView}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Kitchen View
      </button>
    </div>
  );
}

export default AdminView;
