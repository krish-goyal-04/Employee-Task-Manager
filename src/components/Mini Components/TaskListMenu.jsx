import { useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListMenu = ()=>{
    const {userData} = useContext(AuthContext)
    const currUserData = userData?.employeesData?.find((e)=>e.email === JSON.parse(localStorage.getItem("loggedInUser"))?.data?.email)
       
    return(
        <div className="flex flex-col screen mt-10 p-10 text-amber-50 ">
            <div className="flex gap-5">
            <div className="bg-red-400 hover:bg-red-500  w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>{currUserData.taskStats.newTask}</h2>
                <h2 >New Tasks</h2>
            </div>
            <div className="bg-green-400 hover:bg-green-500 w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>{currUserData.taskStats.completed}</h2>
                <h2 >Completed</h2>
            </div>
            </div>
            <div className="flex gap-5 mt-5">
            <div className="bg-yellow-400 hover:bg-yellow-500  w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>{currUserData.taskStats.active}</h2>
                <h2 >Active</h2>
            </div>
            <div className="bg-orange-400 hover:bg-orange-500 w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>{currUserData.taskStats.failed}</h2>
                <h2 >Failed</h2>
            </div>
            </div>
        </div>
    )
}
export default TaskListMenu;