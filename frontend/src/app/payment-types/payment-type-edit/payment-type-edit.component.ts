import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PaymentTypeService} from "../../services/payment-type.service";

@Component({
  selector: 'app-payment-type-edit',
  templateUrl: './payment-type-edit.component.html',
  styleUrls: ['./payment-type-edit.component.css']
})
export class PaymentTypeEditComponent implements OnInit {

  paymentType = {
    name: ""
  };

  paymentTypeId;

  constructor(private paymentTypeService: PaymentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getPaymentType();
  }

  getPaymentType() {
    this.activatedRoute.params.subscribe(params => {
      this.paymentTypeId = +params['id'];
      this.paymentTypeService.getPaymentType(this.paymentTypeId)
        .subscribe((paymentType: any) => {
          this.paymentType = paymentType;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.paymentTypeService.update(this.paymentType)
        .subscribe((data: any) => {
          this.router.navigate(['/paymentTypes']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano formę płatności", "");
  }

}
