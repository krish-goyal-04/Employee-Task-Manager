import Header from "../Mini Components/Header";
import TaskListMenu from "../Mini Components/TaskListMenu";
import TasksContainer from "../TaskList/TasksContainer";
const EmployeeDashboard = ()=>{
    return(
        <div className=" h-screen w-screen">
            <Header />
            <TaskListMenu />
            <TasksContainer />
        </div>
    )
}
export default EmployeeDashboard;