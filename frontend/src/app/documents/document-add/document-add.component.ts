import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DocumentService} from "../../services/document.service";
import {OrderService} from "../../services/order.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {

  orders;
  paymentTypes;
  documentTypes;

  document = {
    orderId: "",
    date: "",
    netto: "",
    vat: "",
    paymentTypeId: "",
    documentTypeId: ""
  };

  constructor(private router: Router,
              private toastr: ToastrService,
              private orderService: OrderService,
              private documentService: DocumentService,
              private paymentTypeService: PaymentTypeService,
              private documentTypeService: DocumentTypeService) {
  }

  ngOnInit() {
    this.getOrders();
    this.getPaymentTypes();
    this.getDocumentTypes();
  }

  addDocument(form) {
    if (form.valid) {
      this.documentService.save(this.document)
        .subscribe((data: any) => {
          this.router.navigate(['/documents']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano dokument sprzedaży ", "");
  }

  private getOrders() {
    this.orderService.list()
      .subscribe((orders: any) => {
        this.orders = orders;
      })
  }

  private getPaymentTypes() {
    this.paymentTypeService.list()
      .subscribe((paymentTypes: any) => {
        this.paymentTypes = paymentTypes;
      })
  }

  private getDocumentTypes() {
    this.documentTypeService.list()
      .subscribe((documentTypes: any) => {
        this.documentTypes = documentTypes;
      })
  }


}
