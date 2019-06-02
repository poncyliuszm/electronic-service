import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {PaymentTypeService} from "../services/payment-type.service";

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})
export class PaymentTypesComponent implements OnInit {
  paymentTypes: any;

  constructor(private http: HttpClient,
              private paymentTypeService: PaymentTypeService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.paymentTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.paymentTypes = data;
      })
  }

  previewPaymentType(paymentType) {
    this.router.navigate(['/paymentTypes/preview', paymentType.id]);
  }

  editPaymentType(paymentType) {
    this.router.navigate(['/paymentTypes/edit', paymentType.id]);
  }

  open(paymentType) {
    const modalRef = this.modalService.open(PaymentTypeDeleteModal).result.then(result => {
      if (result === 'true') {
        this.paymentTypeService.delete(paymentType.id)
          .subscribe((data: any) => {
            this.getCategories();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto formę płatności", "");
  }


}

@Component({
  selector: 'paymentType-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie formy płatności</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tą formę płatności?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class PaymentTypeDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
