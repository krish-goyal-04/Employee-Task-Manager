import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth.jsx/Login";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashBoard";
import {AuthContext} from "./context/AuthProvider"

 const App = ()=>{
  const[user, setUser] = useState('')
  const[loggedInUserData, setLoggedInUserData] = useState(null)

  const {userData} = useContext(AuthContext)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log(userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email,password)=>{
    if(userData && email.includes("admin")){
      const admin = userData.adminData.find((a)=>a.email==email && a.password==password)
      if(admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))

      }
      
    }
    else if(userData){
      const employee = userData.employeesData.find((e)=>e.email==email && e.password==password)
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
      {user=='admin'?<AdminDashBoard changeUser={setUser} data={userData?.adminData?.find(a=>a.email === loggedInUserData?.email)}/>: (user == 'employee'? <EmployeeDashboard changeUser={setUser} data={userData?.employeesData?.find(e=>e.email === loggedInUserData.email)}/>:null)}
    </>
  )
 }
 export default App;