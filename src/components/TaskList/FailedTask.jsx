import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const FailedTask = ({task})=>{
    const {userData, setUserData} = useContext(AuthContext)
    const restartTask = () => {
        const loggedInEmail = JSON.parse(localStorage.getItem("loggedInUser"))?.data?.email;

        const updatedUserData = {
            ...userData,
            employeesData: userData.employeesData.map(emp => {
            if (emp.email === loggedInEmail) {
                const updatedTasks = emp.tasks.map(t => {
                if (t.description === task.description && t.date === task.date &&t.title === task.title){
                    return {
                    ...t,
                    active: true,
                    completed: false,
                    newTask: false,
                    failed: false,
                    };
                }
                return t;
                });
                const updatedStats = {
                newTask: updatedTasks.filter(t => t.newTask).length,
                active: updatedTasks.filter(t => t.active).length,
                completed: updatedTasks.filter(t => t.completed).length,
                failed: updatedTasks.filter(t => t.failed).length,
                };

                return {
                ...emp,
                tasks: updatedTasks,
                taskStats: updatedStats,
                };
            }
            return emp;
            }),
        };

        setUserData(updatedUserData);
        };
    return(
        <div className="rounded-xl flex-shrink-0 w-[300px] h-[300px] bg-orange-400 hover:bg-orange-500 p-3 text-center items-center">
                <div className="flex justify-between mt-3">
                    <h3 className="bg-amber-50 font-bold rounded-xl px-3 py-1">{task.category}</h3>
                    <h4>{task.date}</h4>
                </div>
                <h2 className="font-semibold mt-6 text-xl">{task.title}</h2>
                <p className="">{task.description}</p>
                <button 
                    onClick={restartTask}
                    className="rounded-3xl mt-6 cursor-pointer bg-green-600 p-1 w-4/10 text-neutral-200 hover:bg-green-700">Restart</button>
            </div>
    )
}
export default FailedTask;