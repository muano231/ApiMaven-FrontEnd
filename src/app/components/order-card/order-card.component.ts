import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent {
  @Input() index!: number;
  @Input() order!: Order;

  constructor(
    private router: Router
  ) { }

  orderDetail(id: number): void {
    this.router.navigate([`/order/${id}`]);
  }

}
