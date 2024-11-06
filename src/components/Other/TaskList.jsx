import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompletedTask from '../TaskList/CompletedTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='h-[55%] w-full py-5  mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto' >
        {data.tasks.map((value,index)=>{
          if(value.active){
            return <AcceptTask key={index} data={value} />
          }
          if(value.NewTask){
            return <NewTask key={index} data={value} />
          }
          if(value.completed){
            return <CompletedTask key={index} data={value} />
          }
          if(value.failed){
            return <FailedTask key={index} data={value} />
          }
          
        })}
        {/* <AcceptTask/>
        <NewTask/>
        <CompletedTask/>
        <FailedTask/> */}

    </div>
  )
}

export default TaskList