import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const AllTask = () => {

    const [userdata,setuserData] = useContext(AuthContext);
    // console.log(authData.employees);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded ' >
            <div className='bg-emerald-600 py-2 px-4 flex justify-between rounded mb-2 ' >
                <h2 className='font-medium text-lg w-1/5 ' >Employees</h2>
                <h3 className='font-medium text-lg w-1/5 ' >New Task</h3>
                <h5 className='font-medium text-lg w-1/5 ' >Active Task</h5>
                <h5 className='font-medium text-lg w-1/5 ' >Completed</h5>
                <h5 className='font-medium text-lg w-1/5 ' >Failed</h5>
            </div>
            <div className=' overflow-auto' >
                {userdata.map((value,index) => {
                    return <div key={index} className=' border-2 border-emerald-900 py-2 px-4 flex justify-between rounded mb-2 ' >
                        <h2 className='  font-medium w-1/5 text-white' >{value.firstName}</h2>
                        <h3 className='  font-medium w-1/5 text-blue-400 ' >{value.taskNumbers.newTask}</h3>
                        <h5 className='  font-medium w-1/5 text-orange-200 ' >{value.taskNumbers.active}</h5>
                        <h5 className='  font-medium w-1/5 text-zinc-300 ' >{value.taskNumbers.completed}</h5>
                        <h5 className='  font-medium w-1/5 text-red-300 ' >{value.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask