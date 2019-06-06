import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceStatusService} from "../../services/service-status.service";

@Component({
  selector: 'app-service-status-preview',
  templateUrl: './service-status-preview.component.html',
  styleUrls: ['./service-status-preview.component.css']
})
export class ServiceStatusPreviewComponent implements OnInit {

  serviceStatus = {
    status: ""
  };

  serviceStatusId;

  constructor(private serviceStatusService: ServiceStatusService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

}
