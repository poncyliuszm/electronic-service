import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ElectronicServiceService} from "../../services/electronicService.service";
import {OrderService} from "../../services/order.service";
import {ServiceStatusService} from "../../services/service-status.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-electronic-service-edit',
  templateUrl: './electronic-service-edit.component.html',
  styleUrls: ['./electronic-service-edit.component.css']
})
export class ElectronicServiceEditComponent implements OnInit {

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
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private serviceStatusService: ServiceStatusService,
              private userService: UserService,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.electronicServiceService.update(this.electronicService)
        .subscribe((data: any) => {
          this.router.navigate(['/electronicServices']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano serwis", "");
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
