import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Services } from "../components/Services";

export const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <Services />
            <div>{children}</div>
            <Footer />
        </>
    )
}