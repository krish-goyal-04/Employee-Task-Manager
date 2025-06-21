
const CreateTask = ()=>{
    return(
        <div className="text-black rounded-xl flex flex-col justify-center items-center bg-amber-100 mt-14 p-10 mx-[30%]">
                <h1 className="text-3xl mb-10 font-bold">Add Task</h1>
                <form className="w-[90%]  flex flex-col justify-center items-center ">
                    <h3 className="font-semibold mb-1">Task Title</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" placeholder="" type="text" />
                    <h3 className="font-semibold mb-1">Description</h3>
                    <textarea className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" rows="10" cols="30"></textarea>
                    <h3 className="font-semibold mb-1">Date</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="date" />
                    <h3 className="font-semibold mb-1">Employee Name</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="text" placeholder="" />
                    <h3 className="font-semibold mb-1">Task Category</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="text" placeholder="" />
                </form>
                <button className="rounded-3xl cursor-pointer bg-blue-500 p-1 w-4/10 text-neutral-200 hover:bg-blue-700">Create Task</button>
            </div>
    )
}

export default CreateTask;