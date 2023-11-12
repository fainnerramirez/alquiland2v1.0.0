import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ContainerPensions } from "./components/ContainerPension";
import { ErrorPage } from "./pages/ErrorPage";
import { Estudiantes } from "./pages/Students";
import { PATHS } from "./utils/PathsRouter";
import HomePage from "./pages/HomePage";
import Layout from "./Layout/Layout";
import Gallery from "./components/Gallery";
import PensionDetail from "./components/PensionDetail";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery/:anuncioId",
    element: <PensionDetail />,
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