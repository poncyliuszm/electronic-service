import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InformationForClientService} from "../../services/informationForClient.service";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-information-for-client-preview',
  templateUrl: './information-for-client-preview.component.html',
  styleUrls: ['./information-for-client-preview.component.css']
})
export class InformationForClientPreviewComponent implements OnInit {

  orders;
  users;

  informationForClient = {
    orderId: "",
    userId: "",
    information: ""
  };

  informationForClientId;

  constructor(private informationForClientService: InformationForClientService,
              private router: Router,
              private orderService: OrderService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getInformationForClient();
    this.getOrders();
    this.getUsers();
  }

  getInformationForClient() {
    this.activatedRoute.params.subscribe(params => {
      this.informationForClientId = +params['id'];
      this.informationForClientService.getInformationForClient(this.informationForClientId)
        .subscribe((informationForClient: any) => {
          this.informationForClient = informationForClient;
        })
    });
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
