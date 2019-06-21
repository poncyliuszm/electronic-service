import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {InformationForClientService} from "../../services/informationForClient.service";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-information-for-client-edit',
  templateUrl: './information-for-client-edit.component.html',
  styleUrls: ['./information-for-client-edit.component.css']
})
export class InformationForClientEditComponent implements OnInit {

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
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.informationForClientService.update(this.informationForClient)
        .subscribe((data: any) => {
          this.router.navigate(['/informationsForClient']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano informację dla klienta", "");
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
