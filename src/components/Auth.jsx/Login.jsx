import { useState } from "react"

const Login = ({handleLogin})=>{

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("")


    return(
        <div className="flex h-screen w-screen items-center justify-center ">
            <div className="bg-amber-100 h-3/5 w-2/6 rounded-3xl">
                <form 
                    onSubmit={(e)=>{submitHandler(e)}}
                    className="flex flex-col justify-center items-center p-7">
                    <label className="font-bold text-3xl mb-7">Login</label>
                    <input required 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="border-solid border-2  bg-amber-100 rounded-3xl my-2 p-1.5 w-11/12 hover:bg-yellow-200" type="email" placeholder="Enter email" />
                    <input required 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className="border-solid border-2  bg-amber-100 rounded-3xl my-2 p-1.5 w-11/12 hover:bg-yellow-200" type="password" placeholder="Enter password" />
                    <button className="rounded-3xl cursor-pointer bg-blue-500 p-1 w-4/10 text-neutral-200 hover:bg-blue-700">Submit</button>
                </form>
            </div>
            
        </div>
    )
}
export default Login