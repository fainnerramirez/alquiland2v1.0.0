import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ContainerCardsPension } from "./components/ContainerCardsPension";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { Estudiantes } from "./pages/Students";
import { PATHS } from "./utils/PathsRouter";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Estudiantes />,
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