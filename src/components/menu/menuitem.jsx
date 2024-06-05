import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductDetailsModal from "../modals/productdetails";
import Image from "next/image";

const ImageDisplay = ({ item }) => {
  const imageUrl = item.imageAsset?.image?.asset?.url;
  const imageAlt = item.imageAsset?.alt ?? "Image description not available";
  const imageCaption = item.imageAsset?.caption ?? "No caption";

  return imageUrl ? (
    <div className="my-2">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={800}
        height={800}
        layout="responsive"
      />
      <p>{imageCaption}</p>
    </div>
  ) : null;
};

const Counter = ({ count, setCount }) => (
  <div className="flex items-center my-2">
    <button
      aria-label="Decrease item count"
      className="px-2 py-1 border border-gray-500 text-black rounded"
      onClick={() => setCount(count > 0 ? count - 1 : 0)}
    >
      -
    </button>
    <span className="mx-2">{count}</span>
    <button
      aria-label="Increase item count"
      className="px-2 py-1 border border-orange-500 text-black rounded"
      onClick={() => setCount(count + 1)}
    >
      +
    </button>
  </div>
);

const MenuItem = ({ item, onUpdate }) => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between my-2 border rounded-sm p-4 bg-white shadow">
      <div className="flex flex-row justify-between my-2">
        <span className="text-lg">{item.name}</span>
        <span className="text-lg font-bold">{item.price},-</span>
      </div>
      <p className="text-md">{item.description}</p>
      <ImageDisplay item={item} />
      <Counter count={count} setCount={setCount} />
      <Button
        variant="outline"
        className="bg-orange-300 hover:bg-orange-400 transition duration-200 ease-in-out"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        Add to cart
      </Button>
      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        item={item}
        count={count}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default MenuItem;
