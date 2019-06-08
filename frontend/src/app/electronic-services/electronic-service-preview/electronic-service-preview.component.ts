import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ElectronicServiceService} from "../../services/electronicService.service";
import {OrderService} from "../../services/order.service";
import {ServiceStatusService} from "../../services/service-status.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-electronic-service-preview',
  templateUrl: './electronic-service-preview.component.html',
  styleUrls: ['./electronic-service-preview.component.css']
})
export class ElectronicServicePreviewComponent implements OnInit {

  orders;
  users;
  serviceStatuses;

  electronicService = {
    orderId: "",
    userId: "",
    description: "",
    serviceStatusId: "",
  };

  electronicServiceId;

  constructor(private electronicServiceService: ElectronicServiceService,
              private router: Router,
              private orderService: OrderService,
              private serviceStatusService: ServiceStatusService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getElectronicService();
    this.getOrders();
    this.getUsers();
    this.getServiceStatuses();
  }

  getElectronicService() {
    this.activatedRoute.params.subscribe(params => {
      this.electronicServiceId = +params['id'];
      this.electronicServiceService.getElectronicService(this.electronicServiceId)
        .subscribe((electronicService: any) => {
          this.electronicService = electronicService;
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

  private getServiceStatuses() {
    this.serviceStatusService.list()
      .subscribe((serviceStatuses: any) => {
        this.serviceStatuses = serviceStatuses;
      })
  }

}
