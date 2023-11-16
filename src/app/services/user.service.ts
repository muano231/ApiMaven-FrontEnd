import { Injectable } from '@angular/core';
import { UserDetail } from '../models/userDetail.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor() { }

  getUser(): UserDetail {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    return new UserDetail(this.user.id, this.user.email, this.user.username, this.user.role);
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

}
