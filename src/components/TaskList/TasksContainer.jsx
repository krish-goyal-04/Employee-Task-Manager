import NewTask from "./NewTask"
import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from './FailedTask'

const TasksContainer = ({data})=>{
    
    return(
        <div id="taskContainer" className=" p-10 mt-10 flex flex-nowrap justify-between overflow-x-auto  items-center gap-5 rounded-xl">
            {data?.tasks?.map((t)=>{
                if(t.active && t.newTask){
                    return <NewTask task={t} />
                }
                else if(t.active){
                    return <AcceptTask task={t} />
                }
                else if(t.completed){
                    return <CompleteTask task={t} />
                }
                else if(t.failed){
                    return <FailedTask task={t} />
                }
            })}
        </div>
    )
}
export default TasksContainer;