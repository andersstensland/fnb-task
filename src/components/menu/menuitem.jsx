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
      <Button variant="outline" className="bg-orange-300" onClick={toggleModal}>
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
