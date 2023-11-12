import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/Theme";
import Layout from "./Layout/Layout";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <ChakraProvider theme={theme}>
    <Layout>
      <App />
    </Layout>
  </ChakraProvider>
);
