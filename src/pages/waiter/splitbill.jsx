import React, { useState } from "react";
import "../../styles/globals.css";

function SplitBill() {
  const [orders, setOrders] = useState([
    { id: 1, name: "Margarita", price: 69, quantity: 1 },
    { id: 2, name: "Kids Blue", price: 30, quantity: 1 },
    { id: 3, name: "Dry Martini", price: 69, quantity: 1 },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    const exists = selectedItems.find((selected) => selected.id === item.id);
    if (!exists) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(
        selectedItems.filter((selected) => selected.id !== item.id)
      );
    }
  };

  const handleSubtract = () => {
    // Logic to handle the subtraction or payment processing
    alert("Confirming payment for selected items...");
    // Here you might update the backend or local state to reflect the payment
    setSelectedItems([]); // Clear selected items after processing
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Split Bill</h1>
      <div>
        {orders.map((order) => (
          <button
            key={order.id}
            onClick={() => handleSelectItem(order)}
            className={`p-2 m-2 ${selectedItems.includes(order) ? "bg-red-300" : "bg-gray-200"}`}
          >
            {order.quantity} x {order.name} - {order.price},-
          </button>
        ))}
      </div>
      <h2 className="mt-4">Selection</h2>
      <div>
        {selectedItems.map((item) => (
          <div key={item.id} className="p-2 m-2 bg-yellow-200">
            {item.quantity} x {item.name} - {item.price},-
          </div>
        ))}
      </div>
      <button
        onClick={handleSubtract}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Subtract
      </button>
    </div>
  );
}

export default SplitBill;
