import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InformationForClientService} from "../../services/informationForClient.service";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-information-for-client-add',
  templateUrl: './information-for-client-add.component.html',
  styleUrls: ['./information-for-client-add.component.css']
})
export class InformationForClientAddComponent implements OnInit {

  orders;
  users;

  informationForClient = {
    orderId: "",
    userId: "",
    information: ""
  };

  constructor(private informationForClientService: InformationForClientService,
              private router: Router,
              private orderService: OrderService,
              private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getOrders();
    this.getUsers();
  }

  addInformationForClient(form) {
    if (form.valid) {
      this.informationForClientService.save(this.informationForClient)
        .subscribe((data: any) => {
          this.router.navigate(['/informationsForClient']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano informację dla klienta", "");
  }

  private getOrders() {
    this.orderService.list()
      .subscribe((orders: any) => {
        this.orders = orders;
      })
  }

  private getUsers() {
    this.userService.list()
      .subscribe((users: any) => {
        this.users = users;
      })
  }

}
