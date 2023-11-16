import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  orderId!: number;
  order: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.route.url.subscribe((url) => {
      this.orderId = Number(url[1].path);
    });

    this.orderService.getOrder(this.orderId)
    this.orderService.usersOrder$.subscribe((usersOrders) => {
      this.order = usersOrders;
    })
    console.log(this.order);

  }

}
