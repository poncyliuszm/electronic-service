import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../services/order.service";
import {ProductService} from "../../services/product.service";
import {ClientService} from "../../services/client.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  clients;
  users;
  products;

  order = {
    clientId: "",
    userId: "",
    productId: "",
    description: "",
    acceptanceDate: "",
  };

  constructor(private productService: ProductService,
              private router: Router,
              private toastr: ToastrService,
              private clientService: ClientService,
              private orderService: OrderService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getClients();
    this.getProducts();
    this.getUsers();
  }

  addOrder(form) {
    if (form.valid) {
      this.orderService.save(this.order)
        .subscribe((data: any) => {
          this.router.navigate(['/orders']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano zlecenie ", "");
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
