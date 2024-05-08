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
        <div>
          <MenuCategory
            category={{
              name: "Appetizers",
              items: [
                {
                  id: 1,
                  name: "Spring Rolls",
                  price: 59,
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum libero non viverra tincidunt. " +
                    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
                },
                {
                  id: 2,
                  name: "Potstickers",
                  price: 69,
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum libero non viverra tincidunt. " +
                    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
                },
                {
                  id: 3,
                  name: "Edamame",
                  price: 39,
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum libero non viverra tincidunt. " +
                    "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
                },
              ],
            }}
            onUpdate={updateOrder}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
