import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/router";

const ImageDisplay = ({ item }) => {
  const imageUrl = item.imageAsset?.image?.asset?.url;
  const imageAlt = item.imageAsset?.alt ?? "Image description not available";
  const imageCaption = item.imageAsset?.caption ?? "No caption";

  return imageUrl ? (
    <div className="my-2">
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          width: "100%", // Makes the image responsive to the width of its container
          height: "300px", // Maintains the aspect ratio automatically
          objectFit: "contain", // Ensures the image fits within the frame without distortion
        }}
      />
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
      pathname: "/productdetails",
      query: { item: JSON.stringify(item) },
    });
  };

  return (
    <div className="flex flex-row lg:flex-row justify-between items-center text-black p-4 my-2 rounded-lg shadow-sn ring-2 ring-gray-200">
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <span className="text-lg font-bold mt-4">{item.price},-</span>
          <p className="text-sm text-gray-700 mt-4">{item.description}</p>
        </div>
        <Button
          variant="outline"
          className="mt-2 bg-orange-300 hover:bg-orange-400 text-black transition duration-200 ease-in-out rounded px-4 py-1 w-24"
          onClick={handleAddOrUpdate}
        >
          Add to cart
        </Button>
      </div>
      <ImageDisplay item={item} />
    </div>
  );
};

export default MenuItem;
