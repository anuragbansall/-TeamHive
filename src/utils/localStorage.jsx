import data from "../data/data.json";

const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(data.employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(data.admin));
  }
};

const getLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    setLocalStorage();
  }

  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

export { setLocalStorage, getLocalStorage };
