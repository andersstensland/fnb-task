import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [deliveryCost, setDeliveryCost] = useState(0);

  // Load and save cart from/to localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getItemCount = (cart) => {
    if (!cart) return;
    return Object.values(cart).reduce((total, item) => total + item.qty, 0);
  };

  // get qty from cart item
  const getQty = (itemId) => {
    return cart[itemId] ? cart[itemId].qty : 0;
  };

  const getTotalCost = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  };

  const addToCart = (itemId, itemDetails, quantity) => {
    if (quantity === undefined) {
      console.error("Quantity was undefined, defaulting to 1");
      quantity = 1;
    }
    if (typeof quantity !== "number" || isNaN(quantity)) {
      console.error("Invalid quantity:", quantity);
      return; // Exit the function if quantity is not valid
    }
    if (typeof itemDetails.price !== "number" || isNaN(itemDetails.price)) {
      console.error("Invalid price:", itemDetails.price);
      return; // Exit the function if price is not valid
    }

    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId]) {
        newCart[itemId].qty += quantity;
      } else {
        newCart[itemId] = { ...itemDetails, qty: quantity };
      }
      return newCart;
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] && quantity > 0) {
        newCart[itemId].qty = quantity; // Update existing item qty
      } else {
        delete newCart[itemId]; // Remove item from cart if qty is zero or less
      }
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    const newCart = { ...cart };
    delete newCart[itemId];
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemCount,
        getTotalCost,
        getQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
