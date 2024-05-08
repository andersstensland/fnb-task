import { useState } from "react";
import MenuItem from "@/components/menu/menuitem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import OrderItem from "@/components/order/orderitem";

export default function Order() {
  const [items, setItems] = useState([
    { name: "Pizza Pepperoni", price: 179, quantity: 1 },
    { name: "Pizza Margherita", price: 179, quantity: 1 },
  ]);

  const updateQuantity = (index, newQuantity) => {
    const newItems = [...items];
    newItems[index].quantity = newQuantity;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SecondNavbar />
      <div className="flex-grow p-4">
        <div>
          <h2 className="text-xl font-bold my-4">Din bestilling</h2>
          <div className="flex flex-row justify-between">
            <h4>Product</h4>
            <h4>Price (NOK)</h4>
          </div>
          {items.map((item, index) => (
            <OrderItem
              key={index}
              item={item}
              updateQuantity={(newQuantity) =>
                updateQuantity(index, newQuantity)
              }
            />
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between p-4 bg-white shadow-t-md">
          <h4 className="font-bold">Total (inkl. MVA)</h4>
          <h4>{calculateTotal()}.00</h4>
        </div>
        <div className="p-4">
          <Button
            variant="solid"
            className="bg-orange-300 text-black font-bold w-full pt-3"
          >
            <Link href="/payment">Go to payment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
