export class Product {
    id: number;
    price: number;
    title: string;
    description: string;
    categoryId: number;
    category: Category;
}

export class Category {
    categoryId: number;
    categoryName: string;
    description: string;
}