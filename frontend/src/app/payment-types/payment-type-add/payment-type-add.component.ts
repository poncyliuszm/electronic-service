import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PaymentTypeService} from "../../services/payment-type.service";

@Component({
  selector: 'app-payment-type-add',
  templateUrl: './payment-type-add.component.html',
  styleUrls: ['./payment-type-add.component.css']
})
export class PaymentTypeAddComponent implements OnInit {

  paymentType = {
    name: ""
  };

  constructor(private paymentTypeService: PaymentTypeService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addPaymentType(form) {
    if (form.valid) {
      this.paymentTypeService.save(this.paymentType)
        .subscribe((data: any) => {
          this.router.navigate(['/paymentTypes']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano formę płatności", "");
  }

}
