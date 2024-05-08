import React, { useState } from "react";

const MenuItem = ({ item, onUpdate }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdate(item.id, newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdate(item.id, newCount);
    }
  };

  return (
    <div className="flex flex-col justify-between my-2 border rounded-sm p-4">
      <div className="flex flex-row justify-between my-2">
        <span className="text-lg">{item.name}</span>
        <span className="text-lg font-bold">{item.price},-</span>
      </div>
      <p className="text-md">{item.description}</p>
      <div className="flex items-center my-2">
        <button
          className="px-2 py-1 border border-gray-500 text-black rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-2">{count}</span>
        <button
          className="px-2 py-1 border border-orange-500 text-black rounded"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
