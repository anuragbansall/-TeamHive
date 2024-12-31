import React, { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [userData, setUserData] = useState(getLocalStorage)

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
