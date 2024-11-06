import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const CreateTask = () => {
    const [userdata,setuserData] = useContext(AuthContext);

    const [taskTitle, settaskTitle] = useState("")
    const [taskDescription, settaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [Category, setCategory] = useState("")


    const submitHandler =  (e) => {
        e.preventDefault();
        const Task =  {
            taskTitle,
            taskDescription,
            taskDate,
            Category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }
        const data = userdata
        data.forEach((value) => {
            if (assignTo == value.firstName) {
                value.tasks.push(Task)
                // value.taskCounts.Task = value.taskCounts.Task + 1;
 
                // console.log(value.tasks);

            }
        })
        // console.log(data);
        setuserData(data)
        // localStorage.setItem("employees", JSON.stringify(data))

        // settaskTitle("")
        // settaskDescription("")
        // setTaskDate("")
        // setAssignTo("")
        // setCategory("")


    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded' >
            <form onSubmit={(e) => { submitHandler(e) }} className='flex  w-full flex-wrap items-start justify-between ' action="">
                <div className='w-1/2' >
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
                        <input value={taskTitle} onChange={(e) => settaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a figma prototype' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                        <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Assign To</h3>
                        <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5' >Category</h3>
                        <input value={Category} onChange={(e) => setCategory(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc.' />
                    </div>

                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
                    <textarea value={taskDescription} onChange={(e) => settaskDescription(e.target.value)} className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full' >Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask