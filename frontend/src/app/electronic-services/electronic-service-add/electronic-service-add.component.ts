import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ElectronicServiceService} from "../../services/electronicService.service";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";
import {ServiceStatusService} from "../../services/service-status.service";

@Component({
  selector: 'app-electronic-service-add',
  templateUrl: './electronic-service-add.component.html',
  styleUrls: ['./electronic-service-add.component.css']
})
export class ElectronicServiceAddComponent implements OnInit {

  orders;
  users;
  serviceStatuses;

  electronicService = {
    orderId: "",
    userId: "",
    description: "",
    serviceStatusId: "",
  };


  constructor(private electronicServiceService: ElectronicServiceService,
              private router: Router,
              private orderService: OrderService,
              private serviceStatusService: ServiceStatusService,
              private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getOrders();
    this.getUsers();
    this.getServiceStatuses();
  }

  addElectronicService(form) {
    if (form.valid) {
      this.electronicServiceService.save(this.electronicService)
        .subscribe((data: any) => {
          this.router.navigate(['/electronicServices']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano serwis", "");
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
