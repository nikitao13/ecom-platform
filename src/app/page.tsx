"use client"

import Header from "@/components/Header";
import ProductRow from "@/components/ProductRow";
import categories from "@/data/categories";
import { useCart } from '@/context/cartContext';


export default function Home() {
    const { cartEmpty } = useCart();

  return (
   <div className="scroll-smooth flex flex-col bg-gray-100 dark:bg-zinc-800 min-h-screen font-sans font-light">
       <Header cartEmpty={cartEmpty}/>
       <main className="max-w-[1378px] mx-auto mb-8">
           {categories.map((category) => (
               <ProductRow key={category.category} {...category} />
           ))}
       </main>
   </div>
  );
}
