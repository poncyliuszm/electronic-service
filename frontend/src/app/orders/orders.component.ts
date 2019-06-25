import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../services/order.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private http: HttpClient,
              private orderService: OrderService,
              public authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.orders = data;
      })
  }

  previewOrder(order) {
    this.router.navigate(['/orders/preview', order.id]);
  }

  editOrder(order) {
    this.router.navigate(['/orders/edit', order.id]);
  }

  open(order) {
    const modalRef = this.modalService.open(OrderDeleteModal).result.then(result => {
      if (result === 'true') {
        this.orderService.delete(order.id)
          .subscribe((data: any) => {
            this.getOrders();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto zlecenie", "");
  }


}

@Component({
  selector: 'order-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie zlecenia</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć to zlecenie?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class OrderDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
