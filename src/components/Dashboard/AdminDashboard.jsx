import React, { useContext } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
import { AuthContext } from '../../contexts/AuthProvider'


const AdminDashboard = (props) => {
    
    
    return (
        <div className='h-screen p-7' >
            <Header changeUser = {props.changeUser} />
            <CreateTask/>
            <AllTask  />
            
        </div>
    )
}

export default AdminDashboard