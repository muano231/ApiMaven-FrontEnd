import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { API_URL } from 'src/environment/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { Role } from '../models/role.model';
import { OrderDetail } from '../models/orderDetail.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private usersOrdersSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public usersOrders$: Observable<any> = this.usersOrdersSubject.asObservable();
  private usersOrderSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public usersOrder$: Observable<any> = this.usersOrderSubject.asObservable();
  user_id: number;
  user_token: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.user_id = JSON.parse(localStorage.getItem('user') as string).id;
    this.user_token = this.authService.getToken() as string;
  }

  getOrders(): any {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.user_token}`);
    return this.http.get(`${API_URL}/users/${this.user_id}`, { headers }).subscribe(
      (data: any) => {
        const user_orders: Order[] = [];

        data.orders.forEach((order: any) => {
          user_orders.push(order);
        })

        this.setUsersOrders(user_orders);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des commandes :', error);
        return of([]); // Renvoie un tableau vide en cas d'erreur
      }
    );
  }

  setUsersOrders(value: any): void {
    this.usersOrdersSubject.next(value);
  }

  getOrder(id: number): any {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.user_token}`);
    return this.http.get(`${API_URL}/users/${this.user_id}/orders/${id}`, { headers }).subscribe(
      (data: any) => {
        console.log(data);
        const user_order: Order = data;

        this.setUsersOrder(user_order);
      },
      (error: any) => {
        console.error('Erreur lors de la sélection de la commande :', error);
        return of(null); // Renvoie null en cas d'erreur
      }
    )
  }

  setUsersOrder(value: any): void {
    this.usersOrderSubject.next(value);
  }

}
