import React from 'react'
import Header from './Header'
import Container from '../Common/Container'
import CreateTask from './CreateTask'

function AdminDashboard() {
  return (
    <div className='min-h-screen w-full p-6'>
      <Container>
        <Header />
        <CreateTask />
      </Container>
    </div>
  )
}

export default AdminDashboard