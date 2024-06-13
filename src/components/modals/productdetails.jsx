import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ToppingItem from "../productdetails/toppingitem";
import { Button } from "../ui/button";

const ProductDetailsModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { item } = router.query;
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    if (item) {
      setProduct(JSON.parse(item));
    }
  }, [item]);

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
    if (!product) return 0;
    // Placeholder cost calculation
    return product.price + toppings.reduce((acc, curr) => acc + curr.cost, 0);
  }

  function handleAddBasket() {}

  if (!product) {
    return <div>Loading...</div>;
  }

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10">
      <div className="relative bg-white rounded-lg w-full max-w-lg mx-auto overflow-auto h-[90vh] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-22.5 right-0 p-4">
          ✖️
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="my-4">
            <img
              src="path_to_pizza_image.png"
              alt={product.name}
              className="w-full"
            />
          </div>
          <div className="flex space-x-2">
            {["Small", "Medium", "Large"].map((s) => (
              <Button
                key={s}
                className={`py-1 px-4 border ${size === s ? "border-black" : "border-transparent"}`}
                onClick={() => setSize(s)}>
                {s}
              </Button>
            ))}
          </div>
          <div className="text-xl font-semibold mt-2">{totalCost} NOK</div>
          <p className="mt-2">{product.description}</p>
          <div className="mt-4">
            <Accordion
              type="single"
              collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Allergies</AccordionTrigger>
                <AccordionContent>{product.allergies}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Remove topping:</h3>
            <ToppingItem
              item={product}
              topping={product.content}
            />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Extra topping:</h3>
            <ToppingItem
              item={product}
              topping={product.content}
            />
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
                className="text-xl bg-customSecondaryOrange">
                −
              </Button>
              <span className="mx-4">{quantity}</span>
              <Button
                onClick={() => handleQuantityChange(1)}
                className="text-xl bg-customSecondaryOrange">
                +
              </Button>
            </div>
          </div>
          <Button
            onClick={() => handleAddBasket()}
            className="bg-white text-black px-8 py-2 rounded-md w-full">
            Add to basket
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

const ProductDetails = () => {
  const router = useRouter();
  const { item } = router.query;
  const [product, setProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (item) {
      setProduct(JSON.parse(item));
    }
  }, [item]);

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  return product ? (
    <ProductDetailsModal
      item={product}
      isOpen={isOpen}
      onClose={handleClose}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetails;
