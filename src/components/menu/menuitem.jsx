import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/context/cartcontext";

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
        loading="lazy"
      />
    </div>
  ) : null;
};

const MenuItem = ({ item }) => {
  const { addToCart, updateQuantity, getItemCount } = useCart();

  const [count, setCount] = useState(getItemCount(item._id));

  const handleAddOrUpdate = () => {
    console.log("Add or update item:", item, count);

    addToCart(item, count);
  };

  return (
    <div className="flex flex-col justify-between my-2 p-4 bg-white shadow">
      <div className="flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <span className="text-lg font-bold">{item.price},-</span>
        <div className="flex-1">
          <p className="text-sm text-gray-700">{item.description}</p>
          <ImageDisplay item={item} />
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="bg-orange-300 hover:bg-orange-400 text-white transition duration-200 ease-in-out rounded px-4 py-1 text-black"
            onClick={handleAddOrUpdate}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
