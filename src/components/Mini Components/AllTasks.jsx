import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTasks = ()=>{
    const {userData} = useContext(AuthContext)
    return(
        <div>
        <h1 className="mx-6 font-extrabold text-4xl text-white mt-25 bg-zinc-600 text-center rounded-xl p-4">Task Manager</h1>
        <div className="p-5 bg-zinc-800 mt-6 mx-5 rounded-2xl mb-10  font-medium text-black">
            <div className="bg-lime-300 mt-3 mb-2 px-4 py-3 h-20 text-xl rounded-xl flex justify-between">
                <h1 className="w-1/5" >Employee Name</h1>
                <h1 className="w-1/5" >New Task</h1>
                <h1 className="w-1/5" >Active</h1>
                <h1 className="w-1/5" >Completed</h1>
                <h1 className="w-1/5" >Failed</h1>
            </div>
            {userData.employeesData.map((e)=>{
                return(
                    <div key={e.id} className="bg-zinc-200 mt-3 mb-2 px-4 py-3 hover:bg-zinc-300 h-20 text-xl rounded-xl flex justify-between">
                        <h1 className="w-1/5">{e.name}</h1>
                        <h1 className="w-1/5">{e.taskStats.newTask}</h1>
                        <h1 className="w-1/5">{e.taskStats.active}</h1>
                        <h1 className="w-1/5">{e.taskStats.completed}</h1>
                        <h1 className="w-1/5">{e.taskStats.failed}</h1>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default AllTasks