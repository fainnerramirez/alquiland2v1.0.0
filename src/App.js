import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ContainerPensions } from "./components/ContainerCardsPension";
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
    path: "/gallery",
    element: <ContainerPensions />,
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