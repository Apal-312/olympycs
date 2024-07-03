import React from "react";
import ProductsContextProvider from "./context/ProductContextProvider";
import Navbar from "./components/homePage/Navbar";
import CartProvider from "./context/CartContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <ProductsContextProvider>
          <MainRoutes />
        </ProductsContextProvider>
      </CartProvider>
    </div>
  );
};

export default App;
