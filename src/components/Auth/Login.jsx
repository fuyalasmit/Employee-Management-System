import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setemail("");
        setpassword("");
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen' >
            <div className='border-2 rounded-2xl border-emerald-600  px-20 py-10 pb-14' >
                <p className='mb-10 text-xl font-bold'>Log In</p>
                <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center gap-3' action="">
                    <input value={email} onChange={(e) => setemail(e.target.value)} required className='bg-transparent outline-none border-2 border-emerald-600 rounded-full text-lg py-2 px-6 placeholder:text-gray-400 ' type="email" placeholder='Enter your email' />
                    <input value={password} onChange={(e) => setpassword(e.target.value)} required className='bg-transparent outline-none border-2 border-emerald-600 rounded-full text-lg py-2 px-6 placeholder:text-gray-400 ' type="password" placeholder='Enter password here' />
                    <button className='mt-4 outline-none bg-emerald-600 rounded-full text-lg py-2 px-6 ' >Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login