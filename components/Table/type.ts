export type productType = {
    id: number;
    title: string;
    price: number;
    discount: number;
    category: {
        main: string;
        sub: string;
    };
    gender: string;
    size: string[];
    color: string[];
    stock: number;
    images: string[];
    description: string;
    rating: number;
    reviews: number;
    details: string;
    brand: string;
    shipping: number;
    warrenty: string;
    tags: string[];
};

export type ProductDataTablePropsType = {
    data: productType[];
};
