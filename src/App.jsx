import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  const handleLogin = (email, password) => {
    if (
      authData.admin.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      setUser("admin");
    } else if (
      authData.employees.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? <AdminDashboard /> : null}
      {user === "employee" ? <EmployeeDashboard /> : null}
    </>
  );
}

export default App;
