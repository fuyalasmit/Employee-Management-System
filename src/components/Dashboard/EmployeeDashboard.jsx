import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data.id);
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >
        <Header changeUser={props.changeUser} data = {props.data} />
        <TaskListNumbers data = {props.data} />
        <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard