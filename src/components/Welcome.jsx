import React, { useContext, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import UserContext from "../context/providers/userContext";
import { supabase } from "../backend/supabase/client";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { data } = useContext(UserContext);

  console.log("user welcome: ", data);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (!session) {
        window.location.href = "/user-logout";
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Heading>
      {data.user != null
        ? "Welcome user a alquilando " + data?.user?.email
        : "User no logeado"}
    </Heading>
  );
};

export default Welcome;
