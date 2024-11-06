import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

 
  const logoutFunction = () => {
    // localStorage.setItem("loggedInUser",'')
    localStorage.removeItem("loggedInUser")
    window.location.reload();  
    // props.changeUser("")
  }

  return (
    <div className='flex flex-row justify-between ' >
      <h1 className='text-2xl font-medium' >Hello <span className='text-3xl font-semibold' > 👋</span>   </h1>
      <button onClick={logoutFunction} className='bg-red-500 text-white text-lg font-medium px-4 py2 rounded-md' >Log Out</button>
    </div>
  )
}

export default Header