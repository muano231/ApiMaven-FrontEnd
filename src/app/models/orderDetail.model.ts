import { Product } from "./product.model";

export class OrderDetail {
    id: number;
    product: Product;
    price: number;
    quantity: number;

    constructor(id: number, product: Product, price: number, quantity: number) {
        this.id = id;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
    }
}