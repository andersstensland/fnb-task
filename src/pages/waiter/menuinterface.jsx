import React, { useState } from "react";
import "../../styles/globals.css";
import Navbar from "../../components/navbar";

function Menu() {
  const initialItems = {
    food: [
      {
        id: 1,
        name: "Tandoori Wrap",
        price: 65,
        quantity: 0,
        description: "Wrap with pulled Tandoori chicken, peppers, and cabbage",
      },
      {
        id: 2,
        name: "Salad",
        price: 65,
        quantity: 0,
        description: "Superfood salad with chicken, hummus, quinoa, and beets",
      },
      {
        id: 3,
        name: "Pizza Pepperoni",
        price: 179,
        quantity: 0,
        description: "Tomato sauce, cheese, oregano, pepperoni",
      },
      {
        id: 4,
        name: "Pizza Ham",
        price: 179,
        quantity: 0,
        description: "Tomato sauce, cheese, ham, mushrooms",
      },
      {
        id: 5,
        name: "Pizza Meatlover",
        price: 189,
        quantity: 0,
        description: "Tomato sauce, cheese, onion, beef, ham, pepperoni",
      },
    ],
    // Add other categories similarly
  };

  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (category, id, delta) => {
    const newItems = { ...items };
    const item = newItems[category].find((item) => item.id === id);
    if (item) {
      item.quantity = Math.max(0, item.quantity + delta);
      setItems(newItems);
    }
  };

  const handleConfirmOrder = () => {
    console.log("Order confirmed", items);
    // Reset quantities or navigate to another page
  };

  return (
    <div className="menu-container">
      <Navbar />
      <h1>Menu</h1>
      {Object.keys(items).map((category) => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {items[category].map((item) => (
            <div key={item.id} className="menu-item">
              <p>
                {item.name} - {item.price},-
              </p>
              <p>{item.description}</p>
              <button
                onClick={() => handleQuantityChange(category, item.id, -1)}
              >
                -
              </button>
              <span> {item.quantity} </span>
              <button
                onClick={() => handleQuantityChange(category, item.id, 1)}
              >
                +
              </button>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleConfirmOrder} className="confirm-order">
        Confirm
      </button>
    </div>
  );
}

export default Menu;
