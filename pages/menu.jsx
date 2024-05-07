"use client";
import React, { useState } from "react";
import MenuCategory from "@/components/menu/menucategory";

const Menu = () => {
  const [order, setOrder] = useState({});
  const categories = [
    {
      id: 1,
      name: "Drinks",
      items: [
        { id: "d1", name: "Coca Cola" },
        { id: "d2", name: "Water" },
      ],
    },
    {
      id: 2,
      name: "Snacks",
      items: [
        { id: "s1", name: "Chips" },
        { id: "s2", name: "Nuts" },
      ],
    },
  ];

  const updateOrder = (itemId, count) => {
    setOrder((currentOrder) => ({ ...currentOrder, [itemId]: count }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <p>Delivery service is available from 10:00 - 22:00 everyday.</p>
      </div>
      {categories.map((category) => (
        <MenuCategory
          key={category.id}
          category={category}
          onUpdate={updateOrder}
        />
      ))}
    </div>
  );
};

export default Menu;
