import { Product } from "@/types";
import { useEffect, useState } from "react";

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
        <div className="shadow-md mt-6 bg-white px-6 py-4 mx-4 border rounded-md transition-all delay-150 duration-300">
            <span className="flex items-center justify-between">
                <h1 className="select-none text-xl mb-2 drop-shadow-sm">{category}</h1>

                {hasMoreThanFourProducts && (
                    <p className="select-none text-blue-500 hover:text-blue-700 cursor-pointer text-sm"
                       onClick={() => setShowAll(!showAll)}>{showAll ? "see less..." : "see more..."}</p>
                )}
            </span>

            <div className="flex items-center text-sm">
                <ul className="flex flex-wrap gap-8">
                    {visibleProducts.map((product: Product) => (
                        product.stocked && (
                            <div key={product.name} className="flex flex-col mt-2">
                                <img alt="clothing item" src="https://placehold.co/300" className="select-none drop-shadow-md hover:opacity-70 border rounded-sm transition-opacity duration-300" />
                                <div className="flex mt-3 items-center justify-between drop-shadow-sm transition-opacity duration-300">
                                    <span>{product.name} - ${product.price.toFixed(2)}</span>
                                    <button className="select-none ml-2 border rounded-md px-2 hover:bg-blue-200/80 transition-all duration-300">Add to Cart</button>
                                </div>
                            </div>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}
