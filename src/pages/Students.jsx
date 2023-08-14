﻿import React, { useEffect } from "react";
import { CardsContainer } from "../components/CardContainer";
import { supabase } from "../backend/supabase/client";
import { useNavigate } from "react-router-dom";

export const Estudiantes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (!session) {
        window.location.href = "/";
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return <CardsContainer />;
};