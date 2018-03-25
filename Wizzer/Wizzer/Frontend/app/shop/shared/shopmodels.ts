import * as _ from "lodash";


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

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();

    get subtotal(): number {
        return _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
    };

}
export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;

    productId: number;
    productTitle: string;
    productDescription: string;

    categoryId: number;
    categoryName: string;
}