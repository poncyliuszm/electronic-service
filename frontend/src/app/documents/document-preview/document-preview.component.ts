import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

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

  documentId;

  constructor(private documentService: DocumentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private paymentTypeService: PaymentTypeService,
              private documentTypeService: DocumentTypeService) {

  }

  ngOnInit() {
    this.getDocument();
    this.getOrders();
    this.getPaymentTypes();
    this.getDocumentTypes();
  }

  getDocument() {
    this.activatedRoute.params.subscribe(params => {
      this.documentId = +params['id'];
      this.documentService.getDocument(this.documentId)
        .subscribe((document: any) => {
          document.date = new Date(document.date);
          this.document = document;
        })
    });
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
