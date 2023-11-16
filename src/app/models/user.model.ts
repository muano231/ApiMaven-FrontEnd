import { Order } from "./order.model";
import { Role } from "./role.model";

export class User {
    id: number;
    email: string;
    username: string;
    role: Role;
    orders: Order[];

    constructor(id: number, email: string, username: string, role: Role, orders: Order[]) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.role = role;
        this.orders = orders;
    }
}