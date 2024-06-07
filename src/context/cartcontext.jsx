import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

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
    if (!cart) return 0;
    return Object.values(cart).reduce((total, item) => total + item.qty, 0);
  };

  const getTotalCost = () => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  };

  const addToCart = (itemId, itemDetails, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId]) {
        newCart[itemId].qty += quantity; // Increase qty if already in cart
      } else {
        newCart[itemId] = { details: itemDetails, qty: quantity }; // Add new item with qty
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
