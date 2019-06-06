import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ServiceStatusService} from "../../services/service-status.service";

@Component({
  selector: 'app-service-status-add',
  templateUrl: './service-status-add.component.html',
  styleUrls: ['./service-status-add.component.css']
})
export class ServiceStatusAddComponent implements OnInit {

  serviceStatus = {
    status: ""
  };

  constructor(private serviceStatusService: ServiceStatusService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addServiceStatus(form) {
    if (form.valid) {
      this.serviceStatusService.save(this.serviceStatus)
        .subscribe((data: any) => {
          this.router.navigate(['/serviceStatuses']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano status serwisu", "");
  }

}
