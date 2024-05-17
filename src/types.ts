export interface Product {
    name: string;
    price: number;
    stocked: boolean;
}

export interface ProductCategory {
    category: string;
    products: Product[];
}