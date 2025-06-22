
const AcceptTask = ({task})=>{
    return(
        <div className="rounded-xl flex-shrink-0 w-[300px] h-[300px] bg-yellow-400 p-3 text-center items-center">
                <div className="flex justify-between mt-3">
                    <h3 className="bg-amber-50 font-bold rounded-xl px-3 py-1">{task.category}</h3>
                    <h4>{task.date}</h4>
                </div>
                <h2 className="font-semibold mt-6 text-xl">{task.title}</h2>
                <p className="">{task.description}</p>
                <div className="flex justify-between mt-4 ">
                    <button className="rounded-3xl cursor-pointer bg-green-400 p-1 w-4/10 text-neutral-200 hover:bg-green-500">Completed</button>
                    <button className="rounded-3xl cursor-pointer bg-orange-400 p-1 w-4/10 text-neutral-200 hover:bg-orange-500">Failed</button>
                </div>
            </div>
    )
}
export default AcceptTask;