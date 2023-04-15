import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Box>
        <Navbar />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};
