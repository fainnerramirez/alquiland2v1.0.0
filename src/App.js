import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ContainerCardsPension } from "./components/ContainerCardsPension";
import { ErrorPage } from "./pages/ErrorPage";
import { Estudiantes } from "./pages/Students";
import { PATHS } from "./utils/PathsRouter";
import HomePage from "./pages/HomePage";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/example",
    element: <ContainerCardsPension category="casas" />,
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