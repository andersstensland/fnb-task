import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ToppingItem from "../productdetails/toppingitem";
import { Button } from "../ui/button";

const ProductDetailsModal = ({ item, isOpen, onClose }) => {
  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [toppings, setToppings] = useState([]);

  // Toggle body scroll on modal open/close
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible"; // Reset on component unmount
    };
  }, [isOpen]);

  const handleQuantityChange = (delta) => {
    let newQuantity = quantity + delta;
    if (newQuantity < 1) newQuantity = 1;
    setQuantity(newQuantity);
  };

  const totalCost = calculateTotalCost();

  function calculateTotalCost() {
    // Placeholder cost calculation
    return 175 + toppings.reduce((acc, curr) => acc + curr.cost, 0);
  }

  function handleAddBasket() {}

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10">
      <div className="relative bg-white rounded-lg w-full max-w-lg mx-auto overflow-auto h-[90vh] shadow-lg">
        <button onClick={onClose} className="absolute top-22.5 right-0 p-4">
          ✖️
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <div className="my-4">
            <img
              src="path_to_pizza_image.png"
              alt="Pineapple Ham Pizza"
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            {["Small", "Medium", "Large"].map((s) => (
              <Button
                key={s}
                className={`py-1 px-4 border ${size === s ? "border-black" : "border-transparent"}`}
                onClick={() => setSize(s)}
              >
                {s}
              </Button>
            ))}
          </div>
          <div className="text-xl font-semibold mt-2">{totalCost} NOK</div>
          <p className="mt-2">Pizza with pineapple and ham</p>
          <div className="mt-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Allergies</AccordionTrigger>
                <AccordionContent>{item.allergies}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Remove topping:</h3>
            <ToppingItem item={item} topping={item.content} />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Extra topping:</h3>
            <ToppingItem item={item} topping={item.content} />
          </div>
        </div>

        <div className="fixed w-full p-4 bg-customOrange bottom-0 rounded-t-xl">
          <div className="flex justify-between">
            <div className="flex flex-col my-2">
              <span>Antall</span>
              <span>{totalCost}</span>
            </div>
            <div className="flex items-center">
              <Button
                onClick={() => handleQuantityChange(-1)}
                className="text-xl bg-customSecondaryOrange"
              >
                −
              </Button>
              <span className="mx-4">{quantity}</span>
              <Button
                onClick={() => handleQuantityChange(1)}
                className="text-xl bg-customSecondaryOrange"
              >
                +
              </Button>
            </div>
          </div>
          <Button
            onClick={() => handleAddBasket()}
            className="bg-white text-black px-8 py-2 rounded-md w-full"
          >
            Add to basket
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetailsModal;
