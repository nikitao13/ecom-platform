import { Product } from "@/types";
import { useState } from "react";
import Image from 'next/image'

interface ProductProps {
    category: string;
    products: Product[];
}

export default function ProductRow(props: ProductProps) {
    const { category, products } = props;
    const [showAll, setShowAll] = useState(false);
    const visibleProducts = showAll ? products : products.slice(0, 4);
    const hasMoreThanFourProducts = products.length > 4;

    return (
        <div className="max-w-[1354px] shadow-md mt-6 bg-white px-6 py-4 mx-4 border rounded-md transition-all duration-300 dark:bg-zinc-900 dark:border-slate-950 dark:text-slate-200">
            <span className="flex items-center justify-between">
                <h1 className="select-none text-xl mb-2 drop-shadow-sm">{category}</h1>

                {hasMoreThanFourProducts && (
                    <p className="select-none text-blue-500 hover:text-blue-700 cursor-pointer text-sm"
                       onClick={() => setShowAll(!showAll)}>{showAll ? "see less..." : "see more..."}</p>
                )}
            </span>

            <div className="flex items-center text-sm">
                <ul className="flex flex-wrap gap-8">
                    {visibleProducts.map((product: Product, index: number) => (
                        product.stocked && (
                            <li key={product.name} className={`flex flex-col mt-2 max-w-xs`}
                            >
                                <Image
                                src="https://placehold.co/300.svg"
                                width="300"
                                height="300"
                                alt="clothing item"
                                className="select-none drop-shadow-md hover:opacity-70 border rounded-sm transition-opacity duration-300 hover:cursor-pointer"
                                />
                                {/* <img alt="clothing item" src="https://placehold.co/300" className="select-none drop-shadow-md hover:opacity-70 border rounded-sm transition-opacity duration-300 hover:cursor-pointer" /> */}
                                <div className="flex mt-3 items-center justify-between drop-shadow-sm transition-opacity duration-300">
                                    <span className="text-base">{product.name} - ${product.price.toFixed(2)}</span>
                                    <button className="select-none ml-2 py-1 border rounded-md px-2 hover:bg-blue-200/80 transition-all duration-300 dark:border-slate-950 dark:bg-zinc-800 dark:hover:bg-blue-900 dark:text-slate-300">Add to Cart</button>
                                </div>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}
