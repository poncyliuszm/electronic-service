import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DocumentService} from "../../services/document.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../services/order.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

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
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef,
              private orderService: OrderService,
              private paymentTypeService: PaymentTypeService,
              private documentTypeService: DocumentTypeService) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.documentService.update(this.document)
        .subscribe((data: any) => {
          this.router.navigate(['/documents']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano dokument sprzedaży", "");
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
