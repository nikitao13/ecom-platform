"use client"

import { AiFillShopping } from "react-icons/ai";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Header({ cartEmpty }: { cartEmpty: boolean }) {
    const pathname = usePathname();

    const handleLinkClick = (pathnameToPrevent: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathname === pathnameToPrevent) {
            e.preventDefault();
        }
    };

    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white dark:bg-zinc-900 dark:text-slate-100 opacity-95">
            <div className="h-[60px] w-full flex justify-between items-center max-w-[1390px] px-4 mx-auto">
                <h1 className="text-xl flex items-center gap-1 select-none">General Trading Co.<AiFillShopping className="text-2xl fill-blue-300"/></h1>
                <div className="flex gap-2 items-center text-md drop-shadow-sm">
                    <a href="/" onClick={(e) => handleLinkClick("/", e)} className="select-none hover:opacity-75">Home</a>
                    <a href="/cart" onClick={(e) => handleLinkClick("/cart", e)} className="select-none flex items-center gap-0.5 hover:opacity-75">Cart
                    {cartEmpty ? <IoCartOutline className="text-lg" /> :  <IoCart className="text-lg" />}
                    </a>
                    <input type="text" id="search-bar" className="border border-gray-300 rounded-md px-3 py-1 dark:bg-zinc-800 dark:border-slate-950 outline-none" placeholder="Search"/>
                </div>
            </div>
        </nav>
    )
}
