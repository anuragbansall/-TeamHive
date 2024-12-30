import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='font-semibold text-3xl'>Anurag 👋🏻</span></h1>
        <button className='log-out shrink-0'>Log out</button>
    </div>
  )
}

export default Header