import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";
import Welcome from "./components/Welcome";
import { supabase } from "./backend/supabase/client";
import UserLogout from "./components/UserLogout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/casas",
    element: <Cards category="casas" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fincas",
    element: <Cards category="fincas" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/piscinas",
    element: <Cards category="piscinas" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/salones-eventos",
    element: <Cards category="salonesEventos" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/maquinarias",
    element: <Cards category="maquinarias" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/construccion",
    element: <Cards category="construccion" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/locales-negocio",
    element: <Cards category="localesNegocio" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/carros",
    element: <Cards category="carros" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-logout",
    element: <UserLogout />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
