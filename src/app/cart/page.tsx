"use client"

import RootLayout from "../layout";
import Header from "@/components/Header";
import CartDetails from "@/components/CartDetails";
import { useCart } from '@/context/cartContext';

export default function Cart() {
    const { cartEmpty } = useCart();

    return (
        <RootLayout>
            <div className="scroll-smooth flex flex-col bg-gray-100 dark:bg-zinc-800 min-h-screen font-sans font-light">
                <Header cartEmpty={cartEmpty} />
                <main className="max-w-[1378px] mx-auto mb-8">
                    <CartDetails cartEmpty={cartEmpty} />
                </main>
            </div>
        </RootLayout>
    );
}