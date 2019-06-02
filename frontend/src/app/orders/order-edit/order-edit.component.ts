import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ClientService} from "../../services/client.service";
import {UserService} from "../../services/user.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

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
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef,
              private clientService: ClientService,
              private productService: ProductService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.orderService.update(this.order)
        .subscribe((data: any) => {
          this.router.navigate(['/orders']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano zlecenie", "");
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
