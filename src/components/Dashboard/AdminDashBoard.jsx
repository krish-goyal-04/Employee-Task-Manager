import Header from "../Mini Components/Header"
import CreateTask from "../Mini Components/CreateTask"
import AllTasks from "../Mini Components/AllTasks";

const AdminDashBoard = (props)=>{
    return(
        <div>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask />
            <AllTasks />
        </div>
    )
}
export default AdminDashBoard;