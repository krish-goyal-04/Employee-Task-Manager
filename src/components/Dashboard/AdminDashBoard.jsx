import Header from "../Mini Components/Header"
import CreateTask from "../Mini Components/CreateTask"
import AllTasks from "../Mini Components/AllTasks";

const AdminDashBoard = ()=>{
    return(
        <div>
            <Header />
            <CreateTask />
            <AllTasks />
        </div>
    )
}
export default AdminDashBoard;