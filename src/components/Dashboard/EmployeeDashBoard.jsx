import Header from "../Mini Components/Header";
import TaskListMenu from "../Mini Components/TaskListMenu";
import TasksContainer from "../TaskList/TasksContainer";
const EmployeeDashboard = (props)=>{
    return(
        <div className=" h-screen w-screen">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListMenu data={props.data}/>
            <TasksContainer data={props.data}/>
        </div>
    )
}
export default EmployeeDashboard;