import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const changeQuantity = ({ price, num } = { price: 125, num: 0 }) => {
    if (num <= 0) {
      setCart(null);
      return;
    }
    setCart({ quantity: num, price });
  };
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };
  return { cart, changeQuantity, showCart, toggleCart };
}

export default useCart;
