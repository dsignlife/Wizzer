export class Product {
    id: number;
    price: number;
    title: string;
    description: string;
    category: Category;
}

export class Category {
    categoryId: number;
    categoryName : string;
}