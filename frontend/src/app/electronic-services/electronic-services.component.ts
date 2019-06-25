import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ElectronicServiceService} from "../services/electronicService.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-electronic-services',
  templateUrl: './electronic-services.component.html',
  styleUrls: ['./electronic-services.component.css']
})
export class ElectronicServicesComponent implements OnInit {
  electronicServices: any;

  constructor(private http: HttpClient,
              private electronicServiceService: ElectronicServiceService,
              public authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getElectronicServices();
  }

  getElectronicServices() {
    this.electronicServiceService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.electronicServices = data;
      })
  }

  previewElectronicService(electronicService) {
    this.router.navigate(['/electronicServices/preview', electronicService.id]);
  }

  editElectronicService(electronicService) {
    this.router.navigate(['/electronicServices/edit', electronicService.id]);
  }

  open(electronicService) {
    const modalRef = this.modalService.open(ElectronicServiceDeleteModal).result.then(result => {
      if (result === 'true') {
        this.electronicServiceService.delete(electronicService.id)
          .subscribe((data: any) => {
            this.getElectronicServices();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto serwis", "");
  }


}

@Component({
  selector: 'electronicService-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie serwisu</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć ten serwis?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class ElectronicServiceDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
