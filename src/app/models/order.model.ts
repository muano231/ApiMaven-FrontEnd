import { OrderDetail } from "./orderDetail.model";

export class Order {
    id: number;
    price: number;
    status: number;
    orderDetails: OrderDetail[];

    constructor(id: number, price: number, status: number, orderDetails: OrderDetail[]) {
        this.id = id;
        this.price = price;
        this.status = status;
        this.orderDetails = orderDetails;
    }
}