import React from 'react'

function Header({handleLogout, userName="User"}) {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='font-semibold text-3xl'>{userName} 👋🏻</span></h1>
        <button className='log-out shrink-0' onClick={() => handleLogout()}>Log out</button>
    </div>
  )
}

export default Header