import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ClientService} from "../../services/client.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  clients;
  users;
  products;

  order = {
    clientId: "",
    userId: "",
    productId: "",
    description: "",
    acceptanceDate: "",
    releaseDate: "",
  };

  orderId;

  constructor(private orderService: OrderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private clientService: ClientService,
              private productService: ProductService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.getOrder();
    this.getClients();
    this.getProducts();
    this.getUsers();
  }

  getOrder() {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = +params['id'];
      this.orderService.getOrder(this.orderId)
        .subscribe((order: any) => {
          order.acceptanceDate = new Date(order.acceptanceDate);
          if (order.releaseDate != null)
            order.releaseDate = new Date(order.releaseDate);
          this.order = order;
        })
    });
  }

  private getClients() {
    this.clientService.list()
      .subscribe((clients: any) => {
        this.clients = clients;
      })
  }

  private getUsers() {
    this.userService.list()
      .subscribe((users: any) => {
        this.users = users;
      })
  }

  private getProducts() {
    this.productService.list()
      .subscribe((products: any) => {
        this.products = products;
      })
  }

}
