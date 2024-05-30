"use client";
import React, { useState } from "react";
import MenuCategory from "@/components/menu/menucategory";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import MenuNavbar from "@/components/menu/menunavbar";
import CartFooter from "@/components/cartfooter";
import "@/styles/globals.css";
import TopBar from "@/components/menu/topbar";

const categoriesData = [
  {
    id: 1,
    name: "Food",
    subcategories: [
      {
        id: 11,
        name: "Wraps",
        items: [
          {
            id: 111,
            name: "Tandoori Wrap",
            price: 65,
            description:
              "Wrap with pulled tandoori chicken, peppers, and cabbage.",
            content: { chicken: true, peppers: true, cabbage: true },
            allergies: ["chicken"],
            sides: ["fries", "coleslaw"],
          },
          // Additional wrap items...
        ],
      },
      {
        id: 12,
        name: "Pizza",
        items: [
          {
            id: 121,
            name: "Pizza Pepperoni",
            price: 179,
            description: "Tomato sauce, cheese, oregano, pepperoni.",
            content: {
              tomato: true,
              cheese: true,
              oregano: true,
              pepperoni: true,
            },
            allergies: ["dairy", "gluten"],
            sides: ["garlic bread", "salad"],
          },
          {
            id: 122,
            name: "Pizza Ham",
            price: 179,
            description: "Tomato sauce, cheese, ham, mushrooms.",
            content: { tomato: true, cheese: true, ham: true, mushrooms: true },
            allergies: ["dairy", "gluten"],
            sides: ["garlic bread", "salad"],
          },
          {
            id: 123,
            name: "Pizza Meatlover",
            price: 179,
            description: "Tomato sauce, cheese, onion, beef, ham, pepperoni.",
            content: {
              tomato: true,
              cheese: true,
              onion: true,
              beef: true,
              ham: true,
              pepperoni: true,
            },
            allergies: ["dairy", "gluten"],
            sides: ["garlic bread", "salad"],
          },
          // Additional pizza items...
        ],
      },
      // Additional subcategories...
    ],
  },
  {
    id: 2,
    name: "Alcohol",
    subcategories: [
      {
        id: 21,
        name: "Beers",
        items: [
          {
            id: 211,
            name: "Local Beer",
            price: 50,
            description: "A refreshing locally brewed beer.",
            content: { barley: true },
            allergies: ["gluten"],
            sides: [],
          },
          {
            id: 212,
            name: "Imported Beer",
            price: 70,
            description: "A premium imported beer for fine tastes.",
            content: { barley: true },
            allergies: ["gluten"],
            sides: [],
          },
          // Additional beer items...
        ],
      },
      {
        id: 22,
        name: "Wines",
        items: [
          {
            id: 221,
            name: "Red Wine",
            price: 90,
            description: "Rich and smooth red wine.",
            content: { grapes: true },
            allergies: [],
            sides: ["cheese platter"],
          },
          {
            id: 222,
            name: "White Wine",
            price: 90,
            description: "Crisp and refreshing white wine.",
            content: { grapes: true },
            allergies: [],
            sides: ["cheese platter"],
          },
          // Additional wine items...
        ],
      },
      // Additional alcohol subcategories...
    ],
  },
  {
    id: 3,
    name: "Soft Drinks",
    subcategories: [
      {
        id: 31,
        name: "Sodas",
        items: [
          {
            id: 311,
            name: "Cola",
            price: 25,
            description: "Classic cola flavor.",
            content: { caffeine: true },
            allergies: [],
            sides: [],
          },
          {
            id: 312,
            name: "Lemon-Lime",
            price: 25,
            description: "Refreshing lemon and lime blend.",
            content: { lemon: true, lime: true },
            allergies: [],
            sides: [],
          },
          // Additional soda items...
        ],
      },
      // Additional soft drinks subcategories...
    ],
  },
  // Additional categories like Desserts, etc.
];

const Menu = () => {
  const [categories] = useState(categoriesData);
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [order, setOrder] = useState({});

  const updateOrder = (itemId, count) => {
    setOrder((currentOrder) => ({ ...currentOrder, [itemId]: count }));
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const activeCategory = categories.find(
    (category) => category.id === activeCategoryId
  );

  const itemCount = Object.values(order).reduce(
    (sum, quantity) => sum + quantity,
    0
  );
  const total = Object.keys(order).reduce((sum, itemId) => {
    const item = activeCategory.subcategories
      .map((sub) => sub.items)
      .flat()
      .find((item) => item.id === parseInt(itemId));
    return sum + (item ? item.price * order[itemId] : 0);
  }, 0);

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <TopBar />
      <MenuNavbar
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="container mx-auto p-4">
        <MenuCategory category={activeCategory} onUpdate={updateOrder} />
      </div>

      {/* Render cart component on added order remove if order length is 0 */}
      {/*itemCount > 0 && <CartFooter itemCount={itemCount} total={total} />*/}
    </>
  );
};

export default Menu;
