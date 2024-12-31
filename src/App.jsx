import React from 'react'
import Login from './components/Auth/Login'
import  Container  from './components/Common/Container'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  )
}

export default App