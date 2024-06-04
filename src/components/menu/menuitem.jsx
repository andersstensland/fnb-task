import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductDetailsModal from "../modals/productdetails";
import Orderitemcard from "../payment/orderitemcard";

const MenuItem = ({ item, onUpdate }) => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
    onUpdate(item.id, count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onUpdate(item.id, count - 1);
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setSelectedItem(item); // Set the selected item when the modal is opened
    }
  };

  const updateQuantity = (itemName, newQuantity) => {
    // Implement your logic to update the quantity for the item
    console.log(`Updating quantity for ${itemName} to ${newQuantity}`);
    // This function should update the quantity of the item in your state or wherever it's managed
    // For now, let's just log the item name and the new quantity
  };


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

  
  // Når brukeren klikker på "Legg i handlekurv"-knappen
  function addToCart(itemId) {
    // Finn varen i categoriesData basert på itemId
    let cartItem;
    for (let category of categoriesData) {
      for (let subcategory of category.subcategories) {
        for (let item of subcategory.items) {
          if (item.id === itemId) {
            cartItem = item;
            break;
          }
        }
        if (cartItem) break;
      }
      if (cartItem) break;
    }
  
    if (!cartItem) {
      console.log('Item not found');
      return;
    }
  
    // Konverter varen til en streng med JSON.stringify
    let itemAsString = JSON.stringify(cartItem);
  
    // Hent eksisterende handlekurv fra session storage
    let cart = [];
    if (typeof window !== 'undefined') {
      let cartAsString = window.sessionStorage.getItem('Cart');
      if (cartAsString) {
        cart = JSON.parse(cartAsString);
      }
    }
  
    // Legg til ny vare i handlekurven
    cart.push(cartItem);
  
    // Lagre handlekurven i session storage
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('Cart', JSON.stringify(cart));
    }
  }
  
  // Når du vil hente varer fra handlekurven
  function getFromCart() {
    if (typeof window !== 'undefined') {
      let cartAsString = window.sessionStorage.getItem('Cart');
  
      // Konverter strengen tilbake til et objekt med JSON.parse
      let cart = JSON.parse(cartAsString);
  
      console.log(cart);
    }
  }
  

  


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
      <Button variant="outline" className="bg-orange-300" onClick={() => addToCart(item.id)}>
          Add to cart
        </Button>

      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        item={item}
        count={count}
        onUpdate={onUpdate}
      />
      {selectedItem && <Orderitemcard item={selectedItem} updateQuantity={updateQuantity} />} {/* Pass updateQuantity as a prop */}
    </div>
  );
};

export default MenuItem;
