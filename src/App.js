import React from "react";
import { Estudiantes } from "./pages/Students";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cards } from "./components/Cards";
import UserLogout from "./components/UserLogout";
import { Layout } from "./components/Layout";
import { NewProducto } from "./pages/NewProduct";
import { Welcome } from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/estudiantes",
    element: <Estudiantes />,
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
    path: "/user-logout",
    element: <UserLogout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-product",
    element: <NewProducto />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
