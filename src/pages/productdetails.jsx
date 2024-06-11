import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/context/cartcontext"; 

const ProductDetails = () => {
  const router = useRouter();
  const { query } = router;
  const item = query.item ? JSON.parse(query.item) : {};
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(item.price || 0);
  const [checkedToppings, setCheckedToppings] = useState({});
  const [allergiesExpanded, setAllergiesExpanded] = useState(false); // State to track accordion expansion
  const { addToCart } = useCart(); 

  useEffect(() => {
    const basePrice = item.price || 0;
    const toppingsCost = Object.keys(checkedToppings).reduce(
      (acc, topping) => acc + (checkedToppings[topping] ? item.toppings.find(t => t.name === topping).cost : 0),
      0
    );
    const newTotalCost = (basePrice + toppingsCost) * quantity;
    setTotalCost(newTotalCost);
  }, [quantity, checkedToppings]);

  const handleQuantityChange = (delta) => {
    let newQuantity = quantity + delta;
    if (newQuantity < 1) newQuantity = 1;
    setQuantity(newQuantity);
  };

  const handleToppingToggle = (topping) => {
    setCheckedToppings((prevChecked) => ({
      ...prevChecked,
      [topping.name]: !prevChecked[topping.name],
    }));
  };

  const handleAccordionChange = (expanded) => {
    console.log("Accordion Expanded:", expanded);
    setAllergiesExpanded(expanded);
  };

  const ToppingItem = ({ items }) => (
    <div className="flex flex-col justify-between py-2">
      {items.map((topping) => (
        <div key={topping.name} className="flex justify-between items-center">
          <Label className="flex justify-between items-center rounded-md w-full">
            <span>{topping.name}</span>
            <span className="ml-auto pr-4">{topping.cost} NOK</span>
          </Label>
          <input
            type="checkbox"
            id={topping.name}
            className="mt-2"
            checked={!!checkedToppings[topping.name]}
            onChange={() => handleToppingToggle(topping)}
          />
        </div>
      ))}
    </div>
  );

  const handleAddBasket = (item) => {
    const itemWithToppings = {
      ...item,
      selectedToppings: Object.keys(checkedToppings).filter(topping => checkedToppings[topping]),
      totalCost,
      quantity
    };
    addToCart(item._id, itemWithToppings, quantity); // Add to cart
    router.push("/menu");
  };

  const imageUrl = item.imageAsset?.image?.asset?.url;
  const imageAlt = item.imageAsset?.alt ?? "Image description not available";
  const imageCaption = item.imageAsset?.caption ?? "No caption";

  useEffect(() => {
    console.log("Allergies:", item.allergies);
  }, [item.allergies]);

  useEffect(() => {
    console.log("Item Data:", item);
    console.log("Allergies:", item.allergies);
  }, [item]);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg pb-24">
      <button onClick={() => router.back()} className="absolute top-4 right-4 p-2">
        ✖️
      </button>
      <h2 className="text-2xl font-bold">{item.name}</h2>
      {imageUrl ? (
        <div className="my-4">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={800}
            height={800}
            layout="responsive"
          />
          <p>{imageCaption}</p>
        </div>
      ) : (
        <p className="my-4">Image not available</p>
      )}
      <div className="text-xl font-semibold mt-2">{totalCost} NOK</div>
      <p className="mt-2">{item.description}</p>
      <div className="mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" onChange={handleAccordionChange}>
            <AccordionTrigger>Allergies</AccordionTrigger>
            <AccordionContent>
                <p>{item.allergies}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Remove Toppings:</h3>
        <ToppingItem items={item.toppings || []} />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Add toppings:</h3>
        <ToppingItem items={item.toppings || []} />
      </div>
      <div className="fixed inset-x-0 bottom-0 p-2 bg-customOrange rounded-t-xl">
        <div className="flex justify-between items-center mx-2">
          <div className="flex flex-col">
            <span>Price</span>
            <span>{totalCost} NOK</span>
          </div>
          <div className="flex items-center">
            <Button
              onClick={() => handleQuantityChange(-1)}
              className="text-xl bg-customSecondaryOrange"
            >
              −
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button
              onClick={() => handleQuantityChange(1)}
              className="text-xl bg-customSecondaryOrange"
            >
              +
            </Button>
          </div>
        </div>
        <Button
          onClick={() => handleAddBasket(item)}
          className="bg-white text-black px-8 py-2 rounded-md w-full mt-2"
        >
          Add to basket
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
