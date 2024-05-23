import React, { useState, useEffect } from "react";
import "../../styles/globals.css";

function RoomServiceQueue() {
  // Simulated data for orders
  const initialOrders = [
    { id: "8101", status: "inProgress" },
    { id: "8102", status: "inProgress" },
    { id: "8103", status: "inProgress" },
    { id: "8104", status: "ready" }, // Example of a ready order
  ];

  const [orders, setOrders] = useState(initialOrders);

  // Simulating order updates (this would typically be done via API or WebSocket in real applications)
  useEffect(() => {
    const interval = setInterval(() => {
      const newOrders = orders.map((order) => ({
        ...order,
        // Randomly mark an in-progress order as ready
        status:
          order.status === "inProgress" && Math.random() > 0.8
            ? "ready"
            : order.status,
      }));
      setOrders(newOrders);
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, [orders]);

  return (
    <div className="room-service-queue">
      <h1>Room Service</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h2>In progress</h2>
          {orders
            .filter((order) => order.status === "inProgress")
            .map((order) => (
              <div key={order.id}>{order.id}</div>
            ))}
        </div>
        <div>
          <h2>Ready for pickup</h2>
          {orders
            .filter((order) => order.status === "ready")
            .map((order) => (
              <div key={order.id}>{order.id}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RoomServiceQueue;
