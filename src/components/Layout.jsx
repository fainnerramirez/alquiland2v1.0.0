import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Box height={'86vh'}>{children}</Box>
        <Footer />
    </React.Fragment>
  );
};