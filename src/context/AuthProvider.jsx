import React, { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(getLocalStorage);
  const updateEmployees = (newEmployees) => {
    const updatedData = { ...authData, employees: newEmployees };
    setAuthData(updatedData);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
  };
  return (
    <AuthContext.Provider value={{ authData, setAuthData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
}
  
export default AuthProvider;
