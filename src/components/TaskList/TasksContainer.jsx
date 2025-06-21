

const TasksContainer = ()=>{
    return(
        <div id="taskContainer" className="h-[55%] p-10 mt-10 flex flex-nowrap justify-between overflow-x-auto  items-center gap-5 rounded-xl">
            <div className="rounded-xl flex-shrink-0 w-[300px] h-[90%] bg-amber-100 p-3 text-center items-center">
                <div className="flex justify-between mt-3">
                    <h3 className="bg-red-500 rounded-xl px-3 py-1">High</h3>
                    <h4>21 June 2025</h4>
                </div>
                <h2 className="font-semibold mt-6 text-xl">Revise DSA</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa modi placeat similique nam aut?</p>
            </div>
           
            
        </div>
    )
}
export default TasksContainer;