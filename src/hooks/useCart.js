import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState(null);
  const changeQuantity = ({ price, num }) => {
    if (num <= 0) {
      setCart(null);
      return;
    }
    setCart({ quantity: num, price });
  };
  return { cart, changeQuantity };
}

export default useCart;
