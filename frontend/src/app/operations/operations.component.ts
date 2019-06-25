import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {OperationService} from "../services/operation.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  operations: any;

  constructor(private http: HttpClient,
              private operationService: OperationService,
              private router: Router,
              public authService: AuthService,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getOperations();
  }

  getOperations() {
    this.operationService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.operations = data;
      })
  }

  previewOperation(operation) {
    this.router.navigate(['/operations/preview', operation.id]);
  }

  editOperation(operation) {
    this.router.navigate(['/operations/edit', operation.id]);
  }

  open(operation) {
    const modalRef = this.modalService.open(OperationDeleteModal).result.then(result => {
      if (result === 'true') {
        this.operationService.delete(operation.id)
          .subscribe((data: any) => {
            this.getOperations();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto usługę", "");
  }


}

@Component({
  selector: 'operation-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie usługi</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tą usługę?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class OperationDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
