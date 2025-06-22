import { useState } from "react"

const CreateTask = ()=>{

    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[date,setDate]=useState("")
    const[empName,setEmpName]=useState("")
    const[taskCategory,setTaskCategory]=useState("")
    
    const submitHandler = (e)=>{
        e.preventDefault()

        const task = {title,description,date,taskCategory,active:false,newTask:true,completed:false,failed:false}

        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
            if(empName == elem.name){
                elem.tasks.push(task)
            }
        })

        localStorage.setItem('employees',JSON.stringify(data))

        setTaskCategory("")
        setDate("")
        setDescription("")
        setEmpName("")
        setTitle("")

    }
    
    return(
        <div className="text-black rounded-xl flex flex-col justify-center items-center bg-amber-100 mt-14 p-10 mx-[30%]">
                <h1 className="text-3xl mb-10 font-bold">Add Task</h1>
                <form onSubmit={(e)=>{submitHandler(e)}} className="w-[90%]  flex flex-col justify-center items-center ">
                    <h3 className="font-semibold mb-1">Task Title</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" placeholder="" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <h3 className="font-semibold mb-1">Description</h3>
                    <textarea className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" rows="10" cols="30" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                    <h3 className="font-semibold mb-1">Date</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    <h3 className="font-semibold mb-1">Employee Name</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="text" placeholder="" value={empName} onChange={(e)=>setEmpName(e.target.value)} />
                    <h3 className="font-semibold mb-1">Task Category</h3>
                    <input required className="border-solid border-2 rounded-lg p-1 w-[70%] mb-6 hover:bg-amber-200" type="text" placeholder="" value={taskCategory} onChange={(e)=>setTaskCategory(e.target.value)} />
                    <button className="rounded-3xl cursor-pointer bg-blue-500 p-1 w-4/10 text-neutral-200 hover:bg-blue-700">Create Task</button>
                </form>
                
            </div>
    )
}

export default CreateTask;