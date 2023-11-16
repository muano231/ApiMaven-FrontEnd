import { Role } from "./role.model";

export class UserDetail {
    id: number;
    email: string;
    username: string;
    role: Role;

    constructor(id: number, email: string, username: string, role: Role) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.role = role;
    }
}