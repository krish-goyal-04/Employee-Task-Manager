import { createContext, useEffect, useState} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [userData , setUserData] = useState(null)
    useEffect(()=>{
        const {employeesData,adminData} = getLocalStorage()
        setUserData({employeesData,adminData})
        if(!employeesData || !adminData){
            setLocalStorage()
        }
    },[])
    
    useEffect(()=>{
        if(userData){
            console.log(userData)
            localStorage.setItem("employees",JSON.stringify(userData.employeesData))
            localStorage.setItem("admin",JSON.stringify(userData.adminData))
        }
    },[userData])

    return(
        <div>
            <AuthContext.Provider value={{userData,setUserData}}>{children}</AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;