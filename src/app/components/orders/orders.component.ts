import { Order } from 'src/app/models/order.model';
import { OrderService } from './../../services/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(
    private orderService: OrderService
  ) {
    this.orderService.getOrders();
    this.orderService.usersOrders$.subscribe((usersOrders) => {
      this.orders = usersOrders;
    });
  }

}
