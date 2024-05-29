import React, { useEffect, useState } from "react";
import client from "./sanityClient"; // Adjust the import path to where your client is configured
import { getUserId } from "./sessionStorage"; // Adjust this path to your getUserId function

const FetchCart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const userId = getUserId();
      if (!userId) {
        setError("No user ID found");
        setLoading(false);
        return;
      }

      try {
        const query = `*[_type == "cart" && userId == $userId][0]{
          _id,
          items[]{
            _ref->{
              _id,
              name,
              price
            }
          }
        }`;
        const fetchedCart = await client.fetch(query, { userId });
        setCart(fetchedCart);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        setError(err.message);
      }
      setLoading(false);
    };

    fetchCart();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart && cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item) => (
            <li key={item._ref._id}>
              {item._ref.name} - ${item._ref.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default FetchCart;
