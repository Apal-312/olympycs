import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/homePage/MainPage";
import AdminPage from "../pages/AdminPage";
import SportsPage from "../pages/SportsPage";
import LetsMovePage from "../pages/LetsMovePage";
import AthletesPage from "../pages/AthletesPage";
import AddAthletes from "../components/products/AddAthletes";
import EditAthletes from "../components/products/EditAthletes";
import Auth from "../auth/Auth";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <MainPage /> },
    { id: 2, link: "/athletes", element: <AddAthletes /> },
    { id: 3, link: "/edit/:id", element: <EditAthletes /> },
    { id: 4, link: "/athletesPage", element: <AthletesPage /> },
    { id: 5, link: "/sports", element: <SportsPage /> },
    { id: 6, link: "/lets-move", element: <LetsMovePage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    { id: 8, link: "/register", element: <Auth /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;