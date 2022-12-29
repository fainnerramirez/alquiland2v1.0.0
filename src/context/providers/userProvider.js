import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { supabase } from "../../backend/supabase/client";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ data: { user: null } });

  useEffect(() => {
    const getUser = async () => {
      const aux = await supabase.auth.getUser();
      setUser(aux);
    };

    getUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
