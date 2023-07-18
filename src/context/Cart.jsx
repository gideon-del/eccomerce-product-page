import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartCtx = createContext({
  updateCart: () => {},
  quantity: 0,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  cart: { price: 125, quantity: 0 },
  deleteCart: () => {},
  showCart: false,
  toggleShowCart: () => {},
});

const CartProvider = ({ children }) => {
  const [quantity, setQuantiy] = useState(0);
  const [cart, setCart] = useState({ price: 125, quantity: 0 });
  const [showCart, setShowCart] = useState(false);
  const increaseQuantity = () => {
    setQuantiy((prev) => ++prev);
  };
  const decreaseQuantity = () => {
    if (quantity <= 0) return;
    setQuantiy((prev) => --prev);
  };
  const updateCart = () => {
    setCart((cat) => ({ ...cat, quantity }));
  };
  const deleteCart = () => {
    setCart((cat) => ({ ...cat, quantity: 0 }));
    setQuantiy(0);
  };
  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <CartCtx.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        cart,
        updateCart,
        deleteCart,
        showCart,
        toggleShowCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
export const useCat = () => useContext(CartCtx);
export default CartProvider;
