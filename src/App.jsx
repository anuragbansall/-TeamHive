import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { login, logout, getLoggedInUser, getUserData } from "./utils/authUtils";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    const { role, userData } = login(email, password, authData);
    console.log(role, userData);
    if (role) {
      setUser(role);
      setUserData(userData);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  useEffect(() => {
    if (authData) {
      const loggedInUser = getLoggedInUser();
      const userData = getUserData();
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
      if (userData) {
        setUserData(userData);
      }
    }
  }, [authData]);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} userData={userData} />
      ) : null}
      {user === "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout} userData={userData} />
      ) : null}
    </>
  );
}

export default App;
