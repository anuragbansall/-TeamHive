import React from 'react'
import Header from './Header'
import Container from '../Common/Container'
import CreateTask from './CreateTask'

function AdminDashboard({handleLogout, userData}) {
  console.log(userData)
  const {id, email, name, password, tasks} = userData
  return (
    <div className='min-h-screen w-full p-6'>
      <Container>
        <Header handleLogout={handleLogout} userName={name} />
        <CreateTask />
      </Container>
    </div>
  )
}

export default AdminDashboard