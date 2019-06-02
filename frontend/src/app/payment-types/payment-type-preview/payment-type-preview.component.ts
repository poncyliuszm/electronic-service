import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentTypeService} from "../../services/payment-type.service";

@Component({
  selector: 'app-payment-type-preview',
  templateUrl: './payment-type-preview.component.html',
  styleUrls: ['./payment-type-preview.component.css']
})
export class PaymentTypePreviewComponent implements OnInit {

  paymentType = {
    name: ""
  };

  paymentTypeId;

  constructor(private paymentTypeService: PaymentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

}
