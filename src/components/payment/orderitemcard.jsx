import React from 'react';

const Orderitemcard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col justify-between my-2 border rounded-lg p-4 shadow-md">
      <div className="flex flex-col my-2">
        <span className="text-lg">{item.name}</span>
        <span className="text-lg font-bold">{item.price},-</span>
      </div>
    </div>
  );
}

export default Orderitemcard;
