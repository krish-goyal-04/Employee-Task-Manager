

const CompleteTask = ({task})=>{
    return(
        <div className="rounded-xl flex-shrink-0 w-[300px] h-[300px] bg-green-400 hover:bg-green-500 p-3 text-center items-center">
                <div className="flex justify-between mt-3">
                    <h3 className="bg-amber-50 font-bold rounded-xl px-3 py-1">{task.category}</h3>
                    <h4>{task.date}</h4>
                </div>
                <h2 className="font-semibold mt-6 text-xl">{task.title}</h2>
                <p className="">{task.description}</p>
                
            </div>
    )
}
export default CompleteTask;