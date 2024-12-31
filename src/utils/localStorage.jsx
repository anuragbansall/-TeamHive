import data from '../data/data.json';

const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(data.employees));
  localStorage.setItem('admin', JSON.stringify(data.admin));
};

const getLocalStorage = () => {
  if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
    setLocalStorage();
  }

  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};

export { setLocalStorage, getLocalStorage };