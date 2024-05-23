import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Ensure you have a Button component or use an HTML button
import "../../styles/globals.css";

function TableStatusScreen({ isActive, tableName }) {
  const handleNewOrder = () => {
    history.push("/new-order"); // Adjust the route as necessary
  };

  return (
    <div className="container mx-auto p-4">
      <h1
        className={`text-xl font-bold my-4 ${isActive ? "text-green-500" : "text-yellow-500"}`}
      >
        {tableName}
      </h1>
      <div className="text-center p-3">
        {isActive ? (
          <p>Active Orders: Displaying orders for {tableName}</p> // Placeholder for actual order data
        ) : (
          <>
            <h2 className="text-lg text-red-500">No orders yet</h2>
            <p>If new customers: make sure the table has been paid in POS</p>
          </>
        )}
        <Button
          onClick={handleNewOrder}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          NEW ORDER
        </Button>
      </div>
    </div>
  );
}

export default TableStatusScreen;
