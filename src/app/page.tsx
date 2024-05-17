"use client"

import Header from "@/components/Header";
import { ProductCategory } from "@/types";
import ProductRow from "@/components/ProductRow";

const categories: ProductCategory[] = [
    {
        category: "T-Shirts",
        products: [
            {
                name: "Taylor Swift",
                price: 30.00,
                stocked: true
            },
            {
                name: "Kittens",
                price: 22.00,
                stocked: true
            },
            {
                name: "Tye Dye Storm",
                price: 18.00,
                stocked: true
            },
            {
                name: "Clouds",
                price: 24.00,
                stocked: true
            },
            {
                name: "Clouds",
                price: 24.00,
                stocked: true
            },
        ]
    },
    {
        category: "Pants",
        products: [
            {
                name: "Blue Jeans",
                price: 50.00,
                stocked: true
            },
            {
                name: "Black Chinos",
                price: 40.00,
                stocked: true
            },
            {
                name: "Cargo Pants",
                price: 35.00,
                stocked: true
            }
        ]
    },
    {
        category: "Accessories",
        products: [
            {
                name: "Silver Necklace",
                price: 120.00,
                stocked: true
            },
            {
                name: "Gold Bracelet",
                price: 200.00,
                stocked: true
            },
            {
                name: "Cross Pendant",
                price: 75.00,
                stocked: true
            },
            {
                name: "Diamond Earrings",
                price: 145.00,
                stocked: true
            },
            {
                name: "Leather Belt",
                price: 45.00,
                stocked: true
            },
        ]
    }
];

export default function Home() {
  return (
   <div className="scroll-smooth flex flex-col bg-gray-100 min-h-screen font-sans font-light">
       <Header />
       <main className="max-w-[1400px] mx-auto mb-8">
           {categories.map((category) => (
               <ProductRow key={category.category} {...category} />
           ))}
       </main>
   </div>
  );
}
