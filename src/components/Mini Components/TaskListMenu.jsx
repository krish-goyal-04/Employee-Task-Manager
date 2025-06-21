

const TaskListMenu = ()=>{
    return(
        <div className="flex flex-col screen mt-10 p-10 text-amber-50 ">
            <div className="flex gap-5">
            <div className="bg-red-400  w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>0</h2>
                <h2 >New Tasks</h2>
            </div>
            <div className="bg-green-400 w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>0</h2>
                <h2 >Completed</h2>
            </div>
            </div>
            <div className="flex gap-5 mt-5">
            <div className="bg-yellow-400  w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>0</h2>
                <h2 >Accepted</h2>
            </div>
            <div className="bg-orange-400 w-[45%] rounded-xl p-8 font-bold text-2xl flex flex-col justify-between">
                <h2>0</h2>
                <h2 >Foiled</h2>
            </div>
            </div>
        </div>
    )
}
export default TaskListMenu;