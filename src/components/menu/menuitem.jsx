import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductDetailsModal from "../modals/productdetails";

const MenuItem = ({ item, onUpdate }) => {
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleAddToCart = () => {
    if (!isAdded) {
      setIsAdded(true);
      onUpdate(item.id, count);
    }
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col justify-between my-2 border rounded-sm p-4">
      <div className="flex flex-row justify-between my-2">
        <span className="text-lg">{item.name}</span>
        <span className="text-lg font-bold">{item.price},-</span>
      </div>
      <p className="text-md">{item.description}</p>
      {isAdded ? (
        <div className="flex items-center justify-end my-2">
          <Button variant="outline" className="bg-orange-300" onClick={handleAddToCart}>
            Edit
          </Button>
          <div className="flex items-center ml-2">
            <div className="  rounded flex items-center">
              <button
                className="px-2 py-1 border border-orange-300 text-black rounded shadow"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="mx-2 text-black">{count}</span>
              <button
                className="px-2 py-1 border border-orange-300 text-black rounded shadow"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Button variant="outline" className="bg-orange-300" onClick={handleAddToCart}>
          Add to cart
        </Button>
      )}
      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        item={item}
        count={count}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default MenuItem;
