import React, { useState } from "react";
import "../../styles/globals.css";

function TablesManagement() {
  const [tables, setTables] = useState({
    active: ["Table: Fjord Lounge 582"],
    free: [
      "Table: Fjord Lounge 526",
      "Table: Fjord Lounge 554",
      "Table: Fjord Lounge 612",
      "Table: Fjord Lounge 509",
      "Table: Fjord Lounge 553",
      "Table: Fjord Lounge 568",
      "Table: Fjord Lounge 561",
      "Table: Fjord Lounge 541",
      "Table: Fjord Lounge 542",
      "Table: Fjord Lounge 583",
    ],
  });

  const [selectedTables, setSelectedTables] = useState([]);

  const handleSelectTable = (table) => {
    setSelectedTables((prev) => {
      // Toggle selection
      if (prev.includes(table)) {
        return prev.filter((t) => t !== table);
      } else {
        return [...prev, table];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Table Management</h1>
      <div>
        <h2 className="text-lg font-semibold">Active Tables</h2>
        <div>
          {tables.active.map((table) => (
            <button
              key={table}
              onClick={() => handleSelectTable(table)}
              className={`p-2 m-2 ${selectedTables.includes(table) ? "bg-blue-300" : "bg-gray-200"}`}
            >
              {table}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Free Tables</h2>
        <div>
          {tables.free.map((table) => (
            <button
              key={table}
              onClick={() => handleSelectTable(table)}
              className={`p-2 m-2 ${selectedTables.includes(table) ? "bg-blue-300" : "bg-gray-200"}`}
            >
              {table}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TablesManagement;
