import NewTask from "./NewTask"
import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from './FailedTask'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const TasksContainer = ()=>{
    const {userData} = useContext(AuthContext)
    console.log('userdata',userData)
    const currUserData = userData.employeesData.find(e=>e.email===JSON.parse(localStorage.getItem("loggedInUser")).data.email)
    console.log('curruserdata',currUserData)
    return(
        <div>
             <h1 className="mx-10 font-extrabold text-4xl text-white mt-25 bg-zinc-600 text-center rounded-xl p-4">Task Manager</h1>
            <div className="p-5 bg-zinc-800 mt-6 mx-5 rounded-2xl mb-10">
            
                <div id="taskContainer" className=" p-10 mt-6 flex flex-nowrap justify-between overflow-x-auto  items-center rounded-xl">
                    {currUserData?.tasks?.map((t,index)=>{
                        if(t.active && t.newTask || t.newTask){
                            return <NewTask key={index}  task={t} />
                        }
                        else if(t.active){
                            return <AcceptTask  key={index} task={t} />
                        }
                        else if(t.completed){
                            return <CompleteTask key={index}  task={t} />
                        }
                        else if(t.failed){
                            return <FailedTask key={index}  task={t} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default TasksContainer;