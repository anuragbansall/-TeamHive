export const login = (email, password, authData) => {
    if (
      authData.admin.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      const role = "admin";
      const userData = authData.admin.find(
        (user) => user.email === email && user.password === password
      );
      localStorage.setItem("loggedInUser", JSON.stringify({ role }));
      localStorage.setItem("userData", JSON.stringify(userData));
      return { role, userData };
    } else if (
      authData.employees.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      const role = "employee";
        const userData = authData.employees.find(
            (user) => user.email === email && user.password === password
        );
      localStorage.setItem("loggedInUser", JSON.stringify({ role }));
      localStorage.setItem("userData", JSON.stringify(userData));
      return {role, userData};
    } else {
      return null;
    }
  };
  
  export const logout = () => {
    localStorage.removeItem("loggedInUser");
  };
  
  export const getLoggedInUser = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  };

  export const getUserData = () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  };