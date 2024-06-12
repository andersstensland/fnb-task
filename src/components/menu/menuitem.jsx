import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/context/cartcontext";
import { useRouter } from 'next/router';

const ImageDisplay = ({ item }) => {
  const imageUrl = item.imageAsset?.image?.asset?.url;
  const imageAlt = item.imageAsset?.alt ?? "Image description not available";
  const imageCaption = item.imageAsset?.caption ?? "No caption";

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

const MenuItem = ({ item }) => {
  const { addToCart, getItemCount } = useCart();
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getItemCount(item._id));
  }, [item._id, getItemCount]);

  const handleAddOrUpdate = () => {
    addToCart(item._id, item, 1);
    router.push({
      pathname: '/productdetails',
      query: { item: JSON.stringify(item) }
    });
  };

  return (
    <div className="flex flex-col justify-between my-2 p-4 bg-white shadow">
      <div className="flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{item.name}</h2>
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
