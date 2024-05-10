import React, { useState } from "react";
import "../../styles/globals.css";

function KitchenScreen() {
  // Simulated data for orders
  const initialOrders = [
    {
      id: 1,
      table: "Cabin 8146",
      time: "08:34:11",
      items: [{ name: "Pizza Meatlover", quantity: 1, done: false }],
    },
    {
      id: 2,
      table: "Cabin 8316",
      time: "08:34:11",
      items: [
        { name: "Pizza Pepperoni", quantity: 1, done: false },
        { name: "Tandoori Wrap", quantity: 2, done: false },
      ],
    },
    {
      id: 3,
      table: "Cabin 9174",
      time: "10:11:49",
      items: [{ name: "Tandoori Wrap", quantity: 2, done: false }],
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);

  const handleItemDone = (orderIndex, itemIndex) => {
    const newOrders = [...orders];
    newOrders[orderIndex].items[itemIndex].done =
      !newOrders[orderIndex].items[itemIndex].done;
    setOrders(newOrders);
  };

  const handleDoneForNow = () => {
    const newOrders = [...orders];
    const doneOrder = newOrders.splice(selectedOrderIndex, 1)[0];
    newOrders.push(doneOrder); // Move the current order to the end of the list
    setOrders(newOrders);
    setSelectedOrderIndex(0); // Reset focus to the first order
  };

  return (
    <div className="kitchen-screen">
      <h1>Highest Priority</h1>
      <div className="orders">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="order"
            style={{
              backgroundColor: selectedOrderIndex === index ? "blue" : "gray",
            }}
          >
            <h2>
              {order.table} - {order.time}
            </h2>
            {order.items.map((item, itemIndex) => (
              <p
                key={itemIndex}
                onClick={() => handleItemDone(index, itemIndex)}
                style={{ color: item.done ? "green" : "black" }}
              >
                {item.quantity} x {item.name}
              </p>
            ))}
          </div>
        ))}
      </div>
      {orders.length > 0 && (
        <button onClick={handleDoneForNow} className="done-for-now">
          Done for now
        </button>
      )}
    </div>
  );
}

export default KitchenScreen;
