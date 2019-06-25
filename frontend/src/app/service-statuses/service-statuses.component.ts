import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ServiceStatusService} from "../services/service-status.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-service-statues',
  templateUrl: './service-statuses.component.html',
  styleUrls: ['./service-statuses.component.css']
})
export class ServiceStatusesComponent implements OnInit {
  serviceStatuses: any;

  constructor(private http: HttpClient,
              private serviceStatusService: ServiceStatusService,
              private router: Router,
              private toastr: ToastrService,
              public authService: AuthService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getServiceStatuses();
  }

  getServiceStatuses() {
    this.serviceStatusService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.serviceStatuses = data;
      })
  }

  previewServiceStatus(serviceStatus) {
    this.router.navigate(['/serviceStatuses/preview', serviceStatus.id]);
  }

  editServiceStatus(serviceStatus) {
    this.router.navigate(['/serviceStatuses/edit', serviceStatus.id]);
  }

  open(serviceStatus) {
    const modalRef = this.modalService.open(ServiceStatusDeleteModal).result.then(result => {
      if (result === 'true') {
        this.serviceStatusService.delete(serviceStatus.id)
          .subscribe((data: any) => {
            this.getServiceStatuses();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto status serwisu", "");
  }


}

@Component({
  selector: 'service-status-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie statusu serwisu</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć ten status serwisu?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class ServiceStatusDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
