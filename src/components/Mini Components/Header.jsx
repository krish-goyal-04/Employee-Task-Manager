

const Header = ()=>{
    return(
        <div className="flex justify-between p-4 text-amber-50">
            <h1 className="text-3xl">Welcome <span className="font-bold">Name</span> </h1>
            <button className="border-solid bg-red-600 rounded-xl p-1" >Logout</button>
        </div>
    )
}
export default Header;