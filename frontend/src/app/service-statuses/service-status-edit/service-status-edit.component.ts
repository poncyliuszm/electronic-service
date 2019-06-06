import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ServiceStatusService} from "../../services/service-status.service";

@Component({
  selector: 'app-service-status-edit',
  templateUrl: './service-status-edit.component.html',
  styleUrls: ['./service-status-edit.component.css']
})
export class ServiceStatusEditComponent implements OnInit {

  serviceStatus = {
    status: ""
  };

  serviceStatusId;

  constructor(private serviceStatusService: ServiceStatusService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getServiceStatus();
  }

  getServiceStatus() {
    this.activatedRoute.params.subscribe(params => {
      this.serviceStatusId = +params['id'];
      this.serviceStatusService.getServiceStatus(this.serviceStatusId)
        .subscribe((serviceStatus: any) => {
          this.serviceStatus = serviceStatus;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.serviceStatusService.update(this.serviceStatus)
        .subscribe((data: any) => {
          this.router.navigate(['/serviceStatuses']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano status serwisu", "");
  }

}
