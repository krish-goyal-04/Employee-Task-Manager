

const Header = (props)=>{
    const logOutUser = ()=>{
        localStorage.removeItem('loggedInUser')
        props.changeUser('')
    }
    return(
        <div>
        <div className="flex justify-between p-4 text-amber-50 mx-2.5">
            <h1 className="text-3xl">Welcome <span className="font-bold">{props.data.name?props.data.name:"Admin"}</span> </h1>
            <button 
            onClick={logOutUser}
            className="border-solid bg-red-600 rounded-xl p-2.5 mx-2.5" >Logout</button>
        </div>
        <hr className="border-1 mt-2 border-amber-50 "/>
        </div>
    )
}
export default Header;