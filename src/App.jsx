import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth.jsx/Login";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashBoard";
import {AuthContext} from "./context/AuthProvider"

 const App = ()=>{
  const[user, setUser] = useState('')
  const[loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log(loggedInUser)
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log(userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email,password)=>{
    if(authData && email.includes("admin")){
      const admin = authData.adminData.find((a)=>a.email==email && a.password==password)
      if(admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))

      }
      
    }
    else if(authData){
      const employee = authData.employeesData.find((e)=>e.email==email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      console.log("Recheck credentials")
    }
  }


  return(
    <>
      {!user ? <Login handleLogin={handleLogin} />: null}
      {user=='admin'?<AdminDashBoard changeUser={setUser} data={loggedInUserData}/>: (user == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  )
 }
 export default App;