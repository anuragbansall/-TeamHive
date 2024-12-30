import React from 'react'

function TaskTracker({bgColor="sky"}) {
  return (
    <div className={`bg-${bgColor}-500 hover:brightness-105 duration-100 p-2 rounded-md cursor-pointer`}>
        <h3 className='text-white font-bold text-3xl'>0</h3>
        <p className='text-white font-semibold text-2xl'>New task</p>
    </div>
  )
}

export default TaskTracker