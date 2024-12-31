import React from 'react'

function TaskTracker({title, count}) {

  let bgColor = ''
  if(title === 'Active Tasks') {
    bgColor = 'green'
  }else if(title === 'New Tasks') {
    bgColor = 'blue'
  }
  else if(title === 'Completed Tasks') {
    bgColor = 'yellow'
  }
  else if(title === 'Failed Tasks') {
    bgColor = 'red'
  }

  return (
    <div className={`bg-${bgColor}-500 hover:brightness-105 duration-100 p-2 rounded-md cursor-pointer`}>
        <h3 className='text-white font-bold text-3xl'>{count}</h3>
        <p className='text-white font-semibold text-2xl'>{title}</p>
    </div>
  )
}

export default TaskTracker