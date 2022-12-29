import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { CardProvider } from "./context/providers/CardProvider";
import theme from "./utils/Theme";
import { UserProvider } from "./context/providers/userProvider";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <ChakraProvider theme={theme}>
    <UserProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </UserProvider>
  </ChakraProvider>
);
