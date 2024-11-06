import React from 'react'

const CompletedTask = ({data}) => {
    return (
        <div className="h-full w-[300px] p-5 shrink-0 bg-emerald-700 rounded-xl">
            <div className=' flex justify-between items-center' >
                <h3 className='bg-emerald-900 px-3 py-1 rounded-lg text-sm' >{data.category}</h3>
                <h4 className='text-sm' >{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold' >{data.title}</h2>
            <p className='text-sm mt-2 ' >{data.description}</p>
            <div className='mt-4 ' >
                <button className='bg-green-800 py-1 px-2 text-sm rounded w-full' >Completed</button>
            </div>
        </div>
    )
}

export default CompletedTask