import React from 'react'

const TaskListNumbers = ({data}) => {    
  return (
    <div className='grid grid-cols-4 gap-5 mt-10 '>
        <div className='flex flex-col bg-red-400 rounded-xl py-6 px-8' > 
            <div className='text-3xl font-semibold'>{data.taskNumbers.active}</div>
            <div className='text-xl font-medium' >Active</div>
        </div>
        <div className='flex flex-col bg-blue-400 rounded-xl py-6 px-8' > 
            <div className='text-3xl font-semibold'>{data.taskNumbers.newTask}</div>
            <div className='text-xl font-medium' >New Task</div>
        </div>
        <div className='flex flex-col bg-green-400 rounded-xl py-6 px-8' > 
            <div className='text-3xl font-semibold'>{data.taskNumbers.completed}</div>
            <div className='text-xl font-medium' >Completed</div>
        </div>
        <div className='flex flex-col bg-orange-400 rounded-xl py-6 px-8' > 
            <div className='text-3xl font-semibold'>{data.taskNumbers.failed}</div>
            <div className='text-xl font-medium' >Failed</div>
        </div>


    </div>
  )
}

export default TaskListNumbers