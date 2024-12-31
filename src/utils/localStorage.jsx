import data from '../data/data.json';

function setLocalStorage(){
    localStorage.setItem('employees', JSON.stringify(data.employees));
    localStorage.setItem('admin', JSON.stringify(data.admin));
}

function getLocalStorage(){
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}

export { setLocalStorage, getLocalStorage };