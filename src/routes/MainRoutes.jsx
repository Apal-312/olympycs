import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import MainPage from "../components/homePage/MainPage";
import AboutPage from "../pages/AboutPage";
import { CartContext } from "../context/CartContext";

const PUBLIC_ROUTES = [
  { id: 1, path: "/", element: <MainPage /> },
  { id: 2, path: "/products", element: <ProductPage /> },
  { id: 4, path: "/about", element: <AboutPage /> },
  { id: 5, path: "/tickets", element: <HomePage /> },
  { id: 8, path: "/cart", element: <CartContext /> },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
