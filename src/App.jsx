import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './contexts/AuthProvider'


const App = () => {

  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const [userdata, setuserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    // console.log(loggedInUser);
    
    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser);
      setuser(userdata.role);
      setloggedInUserData(userdata.data);

    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === '123') {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userdata) {
      const employee = userdata.find((employee) => employee.email === email && employee.password === password)
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      }

    } else {
      alert("Invalid credentials");
    }
  };



  return (
    <>
      {user ? "" : <Login handleLogin={handleLogin} />}
      {/* {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />} */}
      {(user == "admin") && <AdminDashboard changeUser = {setuser} />}
      {(user == "employee") && <EmployeeDashboard data={loggedInUserData} />}

    </>
  )
}

export default App