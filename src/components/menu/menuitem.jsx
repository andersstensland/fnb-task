import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/context/cartcontext";
import { useEffect } from "react";

const ImageDisplay = ({ item, language = "en" }) => {
  const imageUrl = item.imageAsset?.image?.asset?.url;
  const imageAlt =
    item.imageAsset?.alt[language] ?? "Image description not available";
  const imageCaption = item.imageAsset?.caption[language] ?? "No caption";

  return imageUrl ? (
    <div className="my-2">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={500}
        height={500}
        loading="lazy"
      />
      <p>{imageCaption}</p>
    </div>
  ) : null;
};

const MenuItem = ({ item, language = "en" }) => {
  const { addToCart, getItemCount } = useCart();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getItemCount(item._id));
  }, [item._id, getItemCount]);

  const handleAddOrUpdate = () => {
    console.log("Item ID:", item._id);
    console.log("Item details:", item);
    console.log("Quantity to add:", 1);

    addToCart(item._id, item, 1);
  };

  return (
    <div className="flex flex-col justify-between my-2 p-4 bg-white shadow">
      <div className="flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{item.name[language]}</h2>
        <span className="text-lg font-bold">{item.price},-</span>
        <p className="text-sm text-gray-700">{item.description}</p>
        <ImageDisplay item={item} />
        <Button
          variant="outline"
          className="mt-2 bg-orange-300 hover:bg-orange-400 text-black transition duration-200 ease-in-out rounded px-4 py-1"
          onClick={handleAddOrUpdate}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
