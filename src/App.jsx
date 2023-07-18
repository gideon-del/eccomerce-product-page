import { useState } from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import useCart from "./hooks/useCart";
import Container from "./UI/Container";
import { useMemo } from "react";

function App() {
  const { cart, changeQuantity } = useCart();
  const [quantity, setQuantiy] = useState(0);
  const updateCart = () => {
    changeQuantity({ num: quantity, price: 125 });
  };
  const carouselObj = useMemo(() => ({ updateCart, quantity, setQuantiy }), []);
  return (
    <Container>
      <Header cat={cart} delt={changeQuantity} />
      <Carousel {...carouselObj} />
    </Container>
  );
}

export default App;
