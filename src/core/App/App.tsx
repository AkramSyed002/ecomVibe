import CartContextProvider from "context/cartContext";
import LandingRouter from "core/Router/LandingRouter";

const App = () => {
  return (
    <CartContextProvider>
      <LandingRouter />
    </CartContextProvider>
  );
};

export default App;
