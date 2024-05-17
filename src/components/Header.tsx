import { AiFillShopping } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[60px] w-full flex justify-between items-center max-w-[1390px] px-4 mx-auto">
                <h1 className="text-xl flex items-center gap-1 select-none">General Trading Co.<AiFillShopping className="text-2xl fill-blue-300"/></h1>
                <div className="flex gap-2 items-center text-md drop-shadow-sm">
                    <a href="/" className="select-none hover:opacity-75">Home</a>
                    <a href="/cart" className="select-none flex items-center gap-0.5 hover:opacity-75">Cart<IoCartOutline className="text-lg"/></a>
                    <input type="text" id="search-bar" className="border border-gray-300 rounded-md px-3 py-1" placeholder="Search"/>
                </div>
            </div>
        </nav>
    )
}