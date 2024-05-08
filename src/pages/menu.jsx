"use client";
import React, { useState } from "react";
import MenuCategory from "@/components/menu/menucategory";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import MenuNavbar from "@/components/menu/menunavbar";

const Menu = () => {
  const [order, setOrder] = useState({});

  const updateOrder = (itemId, count) => {
    setOrder((currentOrder) => ({ ...currentOrder, [itemId]: count }));
  };

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <MenuNavbar />
      <div className="container mx-auto p-4">
        <div className="p-4 rounded-lg shadow-md"></div>
      </div>
    </>
  );
};

export default Menu;
