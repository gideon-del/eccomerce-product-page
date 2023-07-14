import Carousel from "./components/Carousel";
import Header from "./components/Header";
import useCart from "./hooks/useCart";
import Container from "./UI/Container";

function App() {
  const { cart, changeQuantity } = useCart();
  return (
    <Container>
      <Header cat={cart} />
      <Carousel />
    </Container>
  );
}

export default App;
