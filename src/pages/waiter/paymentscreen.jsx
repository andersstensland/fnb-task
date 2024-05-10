import React from "react";
import { useHistory } from "react-router-dom"; // For navigation
import "../../styles/globals.css";

function PaymentScreen({ orders }) {
  const history = useHistory();

  const total = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  const handlePayAll = () => {
    alert("Confirming full payment...");
    // Handle payment logic here
    history.push("/confirm-payment"); // Navigate to confirmation page or similar
  };

  const handleSplitBill = () => {
    // Logic to handle bill splitting
    history.push("/split-bill"); // Navigate to a split bill page or similar
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Order Summary</h1>
      {orders.map((order, index) => (
        <div key={index} className="flex justify-between items-center my-2">
          <span>
            {order.quantity} x {order.name}
          </span>
          <span>{order.price} ,-</span>
        </div>
      ))}
      <div className="text-lg font-bold my-4">Total: {total} ,-</div>
      <button
        onClick={handlePayAll}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
      >
        Pay All
      </button>
      <button
        onClick={handleSplitBill}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Split Bill
      </button>
    </div>
  );
}

export default PaymentScreen;
