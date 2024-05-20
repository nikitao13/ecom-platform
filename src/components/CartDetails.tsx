"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartDetails() {
    const [cartEmpty, setCartEmpty] = useState(false);

    const router = useRouter();

    const handleReturnHome = () => {
        router.push('/');
    };

    return (
    <div className="dark:text-slate-200 font-thin flex flex-col justify-center items-center text-center mt-16 opacity-95 drop-shadow-md select-none">
        <h3 className="text-3xl mb-1.5 underline decoration-1 tracking-wide">Shopping Cart</h3>

         {cartEmpty ? (
            <div>
                <p className="text-xl mb-0.5">Your cart is <span className="underline decoration-1">empty.</span></p>
                <p className="text-lg">Add items to your cart to get started!</p>

            <div>
                <button 
                    onClick={handleReturnHome} 
                    className="select-none border rounded-md py-1 px-2 hover:bg-blue-200/80 transition-all duration-300 dark:border-slate-950 dark:bg-zinc-800 dark:hover:bg-blue-900 dark:text-slate-300 w-max mt-2"
                >
                Return Home
                </button>
            </div>
            </div>
            
            ) : (

            <div className="mt-2">
                <ul className="text-xl font-medium">
                    <li>Taylor Swift T-Shirt - $37.95</li>
                </ul>

            <div className="flex gap-2 mt-2">
                <button 
                    onClick={handleReturnHome}
                    className="select-none border rounded-md py-1 px-2 hover:bg-blue-200/80 transition-all duration-300 dark:border-slate-950 dark:bg-zinc-800 dark:hover:bg-blue-900 dark:text-slate-300 w-max mt-2"
                >
                Continue Shopping
                </button>
                <button 
                    className="select-none border rounded-md py-1 px-2 hover:bg-blue-200/80 transition-all duration-300 dark:border-slate-950 dark:bg-zinc-800 dark:hover:bg-blue-900 dark:text-slate-300 w-max mt-2"
                >
                Checkout
                </button>
            </div>
            </div>
            )
        }
            
    </div>
    )
}