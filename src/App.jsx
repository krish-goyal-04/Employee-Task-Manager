import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth.jsx/Login";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import {AuthContext} from "./context/AuthProvider"

 const App = ()=>{
  
  const[user, setUser] = useState(null)

  const authData = useContext(AuthContext)


  const handleLogin = (email,password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser('admin')
    }
    else if(authData && authData.employeesData.find((e)=>e.email==email)){
      setUser('employee')
    }
    else{
      console.log("Recheck credentials")
    }
  }


  return(
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user=='admin'?<AdminDashBoard />: <EmployeeDashboard />}
    </>
  )
 }
 export default App;